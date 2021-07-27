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
// const jwt = require("jsonwebtoken");
// const jwtkey = fs.readFileSync(path.resolve(__dirname,"./../jwt_key.json"));
// const jwtConfig = JSON.parse(jwtkey);
// const setJWT = (user_pk) => {
//     let token = jwt.sign(
//         {user_pk: user_pk}, jwtConfig.key, { expiresIn : "7d"}
//     )
//     return token;
// }

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
        console.log(req.body)
        const db = await client.connect();
        
        await db.release();
        return res.send("registered");
    }catch(err){
        console.log("error on register")
        console.log(err)
        return res.send("fail")
    }
})



module.exports = router;