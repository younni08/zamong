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

const aws = require("aws-sdk");
const s3Json = fs.readFileSync(path.resolve(__dirname,"./../aws_key.json"));
const s3Config = JSON.parse(s3Json);
const s3 = new aws.S3({
    accessKeyId:s3Config.access_key_id,
    secretAccessKey:s3Config.secret_access_key,
    region:'ap-northeast-2'
})


// JWT generator
const jwt = require("jsonwebtoken");
const jwtkey = fs.readFileSync(path.resolve(__dirname,"./../jwt_key.json"));
const jwtConfig = JSON.parse(jwtkey);

const uploadtoS3 = (file,name,type) => {
    let param ={
        'Bucket':'zamongs3',
        'Key':'zamong/ '+ name,
        'ACL':'authenticated-read',
        'Body':file,
        'Content-Type': type
    }
    return s3.upload(param, (err,data) => {
        if(err!==null){console.log(err);}
        // console.log(data);
    })
}


router.post("/login", async (req,res) => {
    try{
        if(req.body.input1===undefined||req.body.input1===""||req.body.input2===undefined||req.body.input2==="") return res.send("fail")
        const db = await client.connect();
        let date = new Date();
        let result = await db.query(`select user_id,user_pw from users where user_id=$1`,[req.body.input1])
        if(result.rows[0]===undefined){await db.release(); return res.send('fail2')}
        let comparePass = await bcrypt.compareSync(req.body.input2,result.rows[0].user_pw);
        if(comparePass !== true){await db.release(); return res.send('fail3')}

        let session = Math.floor(Math.random()*4398046511104)+".date"+date.setHours(date.getHours() + 4);
        let ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
        console.log(session)
        await db.query(`update users set session=$1,user_ip=$2 where user_id=$3`,[session,ip,req.body.input1])
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
        if(req.body.token===null||req.body.token===undefined||req.body.session===null||req.body.session===undefined) return res.send("fail")
        jwt.verify(req.body.token,jwtConfig.key);
        jwt.verify(req.body.session,jwtConfig.key);
        let user_pk = req.body.token;
        user_pk = user_pk.split(".")[1];
        user_pk = user_pk.split(".")[0];
        user_pk = atob(user_pk);
        user_pk = user_pk.split('{"user_pk":"')[1];
        user_pk = user_pk.split('","iat":')[0];

        let session = req.body.session;
        session = session.split(".")[1];
        session = session.split(".")[0];
        session = atob(session);
        session = session.split('{"session":"')[1];
        session = session.split('","iat":')[0];

        const db = await client.connect();
        let checkSession = await db.query(`select from users where session=$1 and user_id=$2`,[session,user_pk])
        if(checkSession.rows[0]===undefined){
            await db.release();
            return res.send("fail2")
        }

        let date = new Date();

        let mana_pk = "";
        let random_pk = Math.floor(Math.random()*4398046511104);
        mana_pk = "t4"+btoa(random_pk);
        mana_pk = mana_pk.replace(/=/g,'_')
        let check_pk = await db.query("select rtem_t4_pk from rtem_t4 where rtem_t4_pk=$1;",[mana_pk]);
        if(check_pk.rows[0]!==undefined){
            let pk_check = false
            while(pk_check===true){
                random_pk = Math.floor(Math.random()*4398046511104);
                mana_pk = "t4"+btoa(random_pk);
                mana_pk = mana_pk.replace(/=/g,'_')
                check_pk = await db.query("select rtem_t4_pk from rtem_t4 where rtem_t4_pk=$1;",[mana_pk]);
                if(check_pk.rows[0]===undefined){
                    checkPk = true
                }
            }
        }

        let cover_type = "default"
        let cover_key = "default"
        if(req.files[0]!==undefined){
            if(req.files[0].fieldname === "t4image"){
                let name = "#t4" + date.getTime();
                cover_type=req.files[0].mimetype;
                cover_key=name;
                await uploadtoS3(req.files[0].buffer,name,req.files[0].mimetype)
            }
        }

        await db.query(`insert into rtem_t4(rtem_t1_pk,rtem_t2_pk,rtem_t3_pk,rtem_t4_pk,rtem_t4_name,rtem_t4_key,rtem_t4_type,rtem_tag,rtem_address,rtem_t4_date) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,[req.body.t1item,req.body.t2item,req.body.t3item,mana_pk,req.body.t4name,cover_key,cover_type,req.body.tag,req.body.t4addres,date])
        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on additem")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/addcatet1", upload.any(),async(req,res)=>{
    try{
        if(req.body.token===null||req.body.token===undefined||req.body.session===null||req.body.session===undefined) return res.send("fail")
        jwt.verify(req.body.token,jwtConfig.key);
        jwt.verify(req.body.session,jwtConfig.key);
        let user_pk = req.body.token;
        user_pk = user_pk.split(".")[1];
        user_pk = user_pk.split(".")[0];
        user_pk = atob(user_pk);
        user_pk = user_pk.split('{"user_pk":"')[1];
        user_pk = user_pk.split('","iat":')[0];

        let session = req.body.session;
        session = session.split(".")[1];
        session = session.split(".")[0];
        session = atob(session);
        session = session.split('{"session":"')[1];
        session = session.split('","iat":')[0];

        const db = await client.connect();
        let checkSession = await db.query(`select from users where session=$1 and user_id=$2`,[session,user_pk])
        if(checkSession.rows[0]===undefined){
            await db.release();
            return res.send("fail2")
        }

        let date = new Date();

        let mana_pk = "";
        let random_pk = Math.floor(Math.random()*4398046511104);
        mana_pk = "t1"+btoa(random_pk);
        mana_pk = mana_pk.replace(/=/g,'_')
        let check_pk = await db.query("select rtem_t1_pk from rtem_t1 where rtem_t1_pk=$1;",[mana_pk]);
        if(check_pk.rows[0]!==undefined){
            let pk_check = false
            while(pk_check===true){
                random_pk = Math.floor(Math.random()*4398046511104);
                mana_pk = "t1"+btoa(random_pk);
                mana_pk = mana_pk.replace(/=/g,'_')
                check_pk = await db.query("select rtem_t1_pk from rtem_t1 where rtem_t1_pk=$1;",[mana_pk]);
                if(check_pk.rows[0]===undefined){
                    checkPk = true
                }
            }
        }

        let cover_type = "default"
        let cover_key = "default"
        if(req.files[0]!==undefined){
            if(req.files[0].fieldname === "t1image"){
                let name = "#t1" + date.getTime();
                cover_type=req.files[0].mimetype;
                cover_key=name;
                await uploadtoS3(req.files[0].buffer,name,req.files[0].mimetype)
            }
        }

        await db.query(`insert into rtem_t1(rtem_t1_pk,rtem_t1_name,rtem_t1_key,rtem_t1_type,rtem_t1_date) values ($1,$2,$3,$4,$5)`,[mana_pk,req.body.t1name,cover_key,cover_type,date])
        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on addcatet1")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/addcatet2", upload.any(),async(req,res)=>{
    try{
        if(req.body.token===null||req.body.token===undefined||req.body.session===null||req.body.session===undefined) return res.send("fail")
        jwt.verify(req.body.token,jwtConfig.key);
        jwt.verify(req.body.session,jwtConfig.key);
        let user_pk = req.body.token;
        user_pk = user_pk.split(".")[1];
        user_pk = user_pk.split(".")[0];
        user_pk = atob(user_pk);
        user_pk = user_pk.split('{"user_pk":"')[1];
        user_pk = user_pk.split('","iat":')[0];

        let session = req.body.session;
        session = session.split(".")[1];
        session = session.split(".")[0];
        session = atob(session);
        session = session.split('{"session":"')[1];
        session = session.split('","iat":')[0];

        const db = await client.connect();
        let checkSession = await db.query(`select from users where session=$1 and user_id=$2`,[session,user_pk])
        if(checkSession.rows[0]===undefined){
            await db.release();
            return res.send("fail")
        }

        let date = new Date();

        let mana_pk = "";
        let random_pk = Math.floor(Math.random()*4398046511104);
        mana_pk = "t2"+btoa(random_pk);
        mana_pk = mana_pk.replace(/=/g,'_')
        let check_pk = await db.query("select rtem_t2_pk from rtem_t2 where rtem_t2_pk=$1;",[mana_pk]);
        if(check_pk.rows[0]!==undefined){
            let pk_check = false
            while(pk_check===true){
                random_pk = Math.floor(Math.random()*4398046511104);
                mana_pk = "t2"+btoa(random_pk);
                mana_pk = mana_pk.replace(/=/g,'_')
                check_pk = await db.query("select rtem_t2_pk from rtem_t2 where rtem_t2_pk=$1;",[mana_pk]);
                if(check_pk.rows[0]===undefined){
                    checkPk = true
                }
            }
        }

        let cover_type = "default"
        let cover_key = "default"
        if(req.files[0]!==undefined){
            if(req.files[0].fieldname === "t2image"){
                let name = "#t2" + date.getTime();
                cover_type=req.files[0].mimetype;
                cover_key=name;
                await uploadtoS3(req.files[0].buffer,name,req.files[0].mimetype)
            }
        }

        await db.query(`insert into rtem_t2(rtem_t2_pk,rtem_desc,rtem_t2_name,rtem_t2_key,rtem_t2_type,rtem_t2_date) values ($1,$2,$3,$4,$5,$6)`,[mana_pk,req.body.t2body,req.body.t2name,cover_key,cover_type,date])
        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on addcatet2")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/addcatet3", upload.any(),async(req,res)=>{
    try{
        if(req.body.token===null||req.body.token===undefined||req.body.session===null||req.body.session===undefined) return res.send("fail")
        jwt.verify(req.body.token,jwtConfig.key);
        jwt.verify(req.body.session,jwtConfig.key);
        let user_pk = req.body.token;
        user_pk = user_pk.split(".")[1];
        user_pk = user_pk.split(".")[0];
        user_pk = atob(user_pk);
        user_pk = user_pk.split('{"user_pk":"')[1];
        user_pk = user_pk.split('","iat":')[0];

        let session = req.body.session;
        session = session.split(".")[1];
        session = session.split(".")[0];
        session = atob(session);
        session = session.split('{"session":"')[1];
        session = session.split('","iat":')[0];

        const db = await client.connect();
        let checkSession = await db.query(`select from users where session=$1 and user_id=$2`,[session,user_pk])
        if(checkSession.rows[0]===undefined){
            await db.release();
            return res.send("fail")
        }

        let date = new Date();
        let r1 = null;let r2 = null;let r3 = null;let r4 = null;let r5 = null;let r6 = null;let r7 = null;let r8 = null;let r9 = null;let r10 = null;
        if(req.body.t4r1==="true") r1 = req.body.t4r1txt
        if(req.body.t4r2==="true") r2 = req.body.t4r2txt
        if(req.body.t4r3==="true") r3 = req.body.t4r3txt
        if(req.body.t4r4==="true") r4 = req.body.t4r4txt
        if(req.body.t4r5==="true") r5 = req.body.t4r5txt
        if(req.body.t4r6==="true") r6 = req.body.t4r6txt
        if(req.body.t4r7==="true") r7 = req.body.t4r7txt
        if(req.body.t4r8==="true") r8 = req.body.t4r8txt
        if(req.body.t4r9==="true") r9 = req.body.t4r9txt
        if(req.body.t4r10==="true") r10 = req.body.t4r10txt

        let mana_pk = "";
        let random_pk = Math.floor(Math.random()*4398046511104);
        mana_pk = "t3"+btoa(random_pk);
        mana_pk = mana_pk.replace(/=/g,'_')
        let check_pk = await db.query("select rtem_t3_pk from rtem_t3 where rtem_t3_pk=$1;",[mana_pk]);
        if(check_pk.rows[0]!==undefined){
            let pk_check = false
            while(pk_check===true){
                random_pk = Math.floor(Math.random()*4398046511104);
                mana_pk = "t3"+btoa(random_pk);
                mana_pk = mana_pk.replace(/=/g,'_')
                check_pk = await db.query("select rtem_t3_pk from rtem_t3 where rtem_t3_pk=$1;",[mana_pk]);
                if(check_pk.rows[0]===undefined){
                    checkPk = true
                }
            }
        }
        

        let cover_type = "default"
        let cover_key = "default"
        if(req.files[0]!==undefined){
            if(req.files[0].fieldname === "t3image"){
                let name = "#t3" + date.getTime();
                cover_type=req.files[0].mimetype;
                cover_key=name;
                await uploadtoS3(req.files[0].buffer,name,req.files[0].mimetype)
            }
        }

        await db.query(`insert into rtem_t3(rtem_t3_pk,rtem_desc,rtem_desc2,rtem_t3_name,rtem_t3_key,rtem_t3_type,rtem_t3_date,rtem_desc3,rtem_t3_r1,rtem_t3_r2,rtem_t3_r3,rtem_t3_r4,rtem_t3_r5,rtem_t3_r6,rtem_t3_r7,rtem_t3_r8,rtem_t3_r9,rtem_t3_r10) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)`,[mana_pk,req.body.t3madeof,req.body.t3body,req.body.t3name,cover_key,cover_type,date,req.body.t4cmt,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10])
        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on addcatet2")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/mong_item_init",async(req,res)=>{
    try{
        if(req.body.secret!=="secret?") return res.send("fail")
        const db = await client.connect();
        let getT1 = await db.query(`select rtem_t1_pk,rtem_t1_name from rtem_t1 order by id asc`)
        let getT2 = await db.query(`select rtem_t2_pk,rtem_t2_name from rtem_t2 order by id asc`)
        let getT3 = await db.query(`select rtem_t3_pk,rtem_t3_name from rtem_t3 order by id asc`)
        let returnArray = {
            t1:getT1.rows,
            t2:getT2.rows,
            t3:getT3.rows
        }

        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on mong_item_init")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/rka_article_write",async(req,res)=>{
    try{
        if(req.body.token===null||req.body.token===undefined||req.body.session===null||req.body.session===undefined) return res.send("fail")
        jwt.verify(req.body.token,jwtConfig.key);
        jwt.verify(req.body.session,jwtConfig.key);
        let user_pk = req.body.token;
        user_pk = user_pk.split(".")[1];
        user_pk = user_pk.split(".")[0];
        user_pk = atob(user_pk);
        user_pk = user_pk.split('{"user_pk":"')[1];
        user_pk = user_pk.split('","iat":')[0];

        let session = req.body.session;
        session = session.split(".")[1];
        session = session.split(".")[0];
        session = atob(session);
        session = session.split('{"session":"')[1];
        session = session.split('","iat":')[0];

        const db = await client.connect();
        let checkSession = await db.query(`select from users where session=$1 and user_id=$2`,[session,user_pk])
        if(checkSession.rows[0]===undefined){
            await db.release();
            return res.send("fail")
        }
        let date = new Date();

        let mana_pk = "";
        let random_pk = Math.floor(Math.random()*4398046511104);
        mana_pk = "rka"+btoa(random_pk);
        mana_pk = mana_pk.replace(/=/g,'_')
        let check_pk = await db.query("select rka_pk from rka_article where rka_pk=$1;",[mana_pk]);
        if(check_pk.rows[0]!==undefined){
            let pk_check = false
            while(pk_check===true){
                random_pk = Math.floor(Math.random()*4398046511104);
                mana_pk = "rka"+btoa(random_pk);
                mana_pk = mana_pk.replace(/=/g,'_')
                check_pk = await db.query("select rka_pk from rka_article where rka_pk=$1;",[mana_pk]);
                if(check_pk.rows[0]===undefined){
                    checkPk = true
                }
            }
        }

        let cover_type = "default"
        let cover_key = "default"
        let attached_type = null
        let attached_key = null
        let img_key = [];
        let img_type = [];
        let img_cnt = 0;
        if(req.body.imgCnt!==undefined) img_cnt = req.body.imgCnt
        for(let i=0;i<req.files.length;i++){
            if(req.files[i]!==undefined){
                if(req.files[i].fieldname === "cover"){
                    let name = "#rka_c"+ I + date.getTime();
                    cover_type=req.files[i].mimetype;
                    cover_key=name;
                    await uploadtoS3(req.files[i].buffer,name,req.files[i].mimetype)
                }
                if(req.files[i].fieldname === "attached"){
                    let name = "#rka_a"+ i + date.getTime();
                    attached_type=req.files[i].mimetype;
                    attached_key=name;
                    await uploadtoS3(req.files[i].buffer,name,req.files[i].mimetype)
                }
                if(req.files[i].fieldname === "image"){
                    let name = "#rka_i"+ i + date.getTime();
                    img_key[i] = name;
                    img_type[i] = req.files[i].mimetype;
                    await uploadtoS3(req.files[i].buffer,name,req.files[i].mimetype);
                }
            }
        }

        await db.query(`insert into rka_article(rka_pk,rka_title,rka_tag,rka_content,rka_cover_key,rka_cover_type,rka_image_cnt,rka_image_key,rka_image_type,rka_file_key,rka_file_type,rka_date) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,[mana_pk,req.body.title,req.body.tag,req.body.content,cover_key,cover_type,img_cnt,img_key,img_type,attached_key,attached_type,date])

        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on mong_item_init")
        console.log(err)
        return res.send("fail")
    }
})

module.exports = router;