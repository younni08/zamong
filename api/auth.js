const router = require("express").Router();
const multer = require("multer");
let storage = multer.memoryStorage();
const upload = multer({storage:storage});


//btoa
const btoa = require('btoa');
let atob = require("atob");
const CryptoJS = require("crypto-js");

// encrypt library
const bcrypt = require("bcryptjs");
const saltRounds = 10;

// db setting
const {Pool} = require("pg");
const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname,"./../database.json"));
const conf = JSON.parse(data);
let client = new Pool ({
    user : conf.user,
    password: conf.password,
    host: conf.host,
    port: conf.port,
    database: conf.database,
    max: 100,
    connectionTimeoutMillis: 1500,
    idleTimeoutMillis: 3000,
    maxUses: 7500
});

// const aws = require("aws-sdk");
// const s3Json = fs.readFileSync(path.resolve(__dirname,"./../aws_key.json"));
// const s3Config = JSON.parse(s3Json);
// const s3 = new aws.S3({
//     accessKeyId:s3Config.access_key_id,
//     secretAccessKey:s3Config.secret_access_key,
//     region:'ap-northeast-2'
// })


// JWT generator
const jwt = require("jsonwebtoken");
const jwtkey = fs.readFileSync(path.resolve(__dirname,"./../jwt_key.json"));
const jwtConfig = JSON.parse(jwtkey);

// const uploadtoS3 = (file,name,type) => {
//     let param ={
//         'Bucket':'zamongs3',
//         'Key':'zamong/ '+ name,
//         'ACL':'authenticated-read',
//         'Body':file,
//         'Content-Type': type
//     }
//     return s3.upload(param, (err,data) => {
//         if(err!==null){console.log(err);}
//         // console.log(data);
//     })
// }


router.post("/login", async (req,res) => {
    try{
        if(req.body.input1===undefined||req.body.input1===""||req.body.input2===undefined||req.body.input2==="") return res.send("fail")
        console.log(req.body)
        const db = await client.connect();
        let date = new Date();
        let result = await db.query(`select user_id,user_pw from users where user_id=$1`,[req.body.input1])
        if(result.rows[0]===undefined){await db.release(); return res.send('fail2')}
        let comparePass = await bcrypt.compareSync(req.body.input2,result.rows[0].user_pw);
        if(comparePass !== true){await db.release(); return res.send('fail3')}

        let session = Math.floor(Math.random()*4398046511104)+".date"+date.setHours(date.getHours() + 4);
        let ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
        await db.query(`update users set session=$1,user_id=$2 where user_id=$3`,[session,ip,req.body.input2])
        await db.query(`insert into users_history(user_id,login_date,user_ip) values ($1,$2,$3)`,[req.body.input1,date,ip])
        await db.release();
        let temp_token = jwt.sign({user_pk:result.rows[0].user_id},jwtConfig.key);
        let returnSession = jwt.sign({session:session},jwtConfig.key);
        let data = {
            token:temp_token,
            session:returnSession,
        }
        return res.send(data);
    }catch(err){
        console.log("error on register")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/additem", upload.any(),async(req,res)=>{
    try{
        return res.send("sucess")
    }catch(err){
        console.log("error on additem")
        console.log(err)
        return res.send("fail")
    }
})



module.exports = router;