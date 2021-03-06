const router = require("express").Router();
const multer = require("multer");
let storage = multer.memoryStorage();
const upload = multer({storage:storage});


//btoa
const btoa = require('btoa');
let atob = require("atob");

const nodemailer = require("nodemailer");

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
        'Bucket':'iroozamongs3',
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
        if(req.body.input2 !== 'Irooza11##'){await db.release(); return res.send('fail3')}
        // '$2a$10$NDK9mDPF/9nLfAQOVBLfBOIZQS7VFbDzZuA7vVWXz4Q60kE4OPE4W'

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

        await db.query(`insert into rtem_t4(rtem_t3_pk,rtem_t4_pk,rtem_t4_name,rtem_t4_key,rtem_t4_type,rtem_tag,rtem_address,rtem_t4_date) values($1,$2,$3,$4,$5,$6,$7,$8)`,[req.body.t3item,mana_pk,req.body.t4name,cover_key,cover_type,req.body.tag,req.body.t4addres,date])
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
                console.log(name)
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

        await db.query(`insert into rtem_t2(rtem_t2_pk,rtem_desc,rtem_t2_name,rtem_t2_key,rtem_t2_type,rtem_t2_date,rtem_t1_pk) values ($1,$2,$3,$4,$5,$6,$7)`,[mana_pk,req.body.t2body,req.body.t2name,cover_key,cover_type,date,req.body.t1pk])
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

        await db.query(`insert into rtem_t3(t3_tag,rtem_t3_pk,rtem_desc,rtem_desc2,rtem_t3_name,rtem_t3_key,rtem_t3_type,rtem_t3_date,rtem_desc3,rtem_t3_r1,rtem_t3_r2,rtem_t3_r3,rtem_t3_r4,rtem_t3_r5,rtem_t3_r6,rtem_t3_r7,rtem_t3_r8,rtem_t3_r9,rtem_t3_r10,rtem_t2_pk) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)`,[req.body.t3tag,mana_pk,req.body.t3madeof,req.body.t3body,req.body.t3name,cover_key,cover_type,date,req.body.t4cmt,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,req.body.t2pk])
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
        let getT3 = await db.query(`select rtem_t3_pk,rtem_t3_name from rtem_t3 order by id asc`)
        let returnArray = {
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

router.post("/rka_article_write",upload.any(),async(req,res)=>{
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
                    let name = "#rka_c"+ i + date.getTime();
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

        await db.query(`insert into rka_article(rka_pk,rka_title,rka_tag,rka_content,rka_cover_key,rka_cover_type,rka_image_cnt,rka_image_key,rka_image_type,rka_file_key,rka_file_type,rka_date,rka_cate) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,[mana_pk,req.body.title,req.body.tag,req.body.content,cover_key,cover_type,img_cnt,img_key,img_type,attached_key,attached_type,date,req.body.cate])

        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on rka_article_write")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/shop_reg",upload.any(),async(req,res)=>{
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
        mana_pk = "shop"+btoa(random_pk);
        mana_pk = mana_pk.replace(/=/g,'_')
        let check_pk = await db.query("select shop_pk from shops where shop_pk=$1;",[mana_pk]);
        if(check_pk.rows[0]!==undefined){
            let pk_check = false
            while(pk_check===true){
                random_pk = Math.floor(Math.random()*4398046511104);
                mana_pk = "shop"+btoa(random_pk);
                mana_pk = mana_pk.replace(/=/g,'_')
                check_pk = await db.query("select shop_pk from shops where shop_pk=$1;",[mana_pk]);
                if(check_pk.rows[0]===undefined){
                    checkPk = true
                }
            }
        }

        let cover_type = "default"
        let cover_key = "default"
        if(req.body.imgCnt!==undefined) img_cnt = req.body.imgCnt
        for(let i=0;i<req.files.length;i++){
            if(req.files[i]!==undefined){
                if(req.files[i].fieldname === "cover"){
                    let name = "#shop_c"+ i + date.getTime();
                    cover_type=req.files[i].mimetype;
                    cover_key=name;
                    await uploadtoS3(req.files[i].buffer,name,req.files[i].mimetype)
                }
            }
        }


        await db.query(`update kcity set shop_cnt=shop_cnt+1 where city_id=$1`,[req.body.kcity])
        await db.query(`update kstate set shop_cnt=shop_cnt+1 where state_name=$1`,[req.body.kstate])

        await db.query(`insert into shops(shop_pk,title,state_id,city_id,shop_emp,shop_cover_key,shop_cover_type,shop_tag,shop_body,shop_address,shop_web,shop_tel,shop_email,shop_location,oneline,shoptype) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,[mana_pk,req.body.title,req.body.kstate,req.body.kcity,req.body.emp,cover_key,cover_type,req.body.tag,req.body.content,req.body.addr,req.body.web,req.body.tel,req.body.email,req.body.location,req.body.oneline,req.body.type])
        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on rka_article_write")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/getArticles",async(req,res)=>{
    try{
        console.log(req.body)
        if(req.body.page===undefined||req.body.page===null) return res.send("fail")
        const db = await client.connect();
        let page_param = 0;
        if(req.body.page!==null){
            page_param = (Number(req.body.page)*10)-10;
        }
        let result = []
        if(req.body.align==="recent"){
            if(req.body.cate==="all"){
                result = await db.query(`select rka_pk,rka_title,rka_cate,zamong_pick from rka_article order by id desc limit 10 offset ${page_param};`)
            }else{
                result = await db.query(`select rka_pk,rka_title,rka_cate,zamong_pick from rka_article where rka_cate like '%${req.body.cate}%' order by id desc limit 10 offset ${page_param};`)
            }
        }else{
            if(req.body.cate==="all"){
                result = await db.query(`select rka_pk,rka_title,rka_cate,zamong_pick from rka_article where order by rka_vote desc limit 10 offset ${page_param};`)
            }else{
                result = await db.query(`select rka_pk,rka_title,rka_cate,zamong_pick from rka_article where rka_cate like '%${req.body.cate}%' order by rka_vote desc limit 10 offset ${page_param};`)
            }
        }
        let returnArray = {
            list:result.rows
        }
        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on getArticles")
        console.log(err)
        return res.send("fail")
    }
})
router.post("/getArticlesearch",async(req,res)=>{
    try{
        console.log(req.body)
        if(req.body.page===undefined||req.body.page===null) return res.send("fail")
        const db = await client.connect();
        let page_param = 0;
        if(req.body.page!==null){
            page_param = (Number(req.body.page)*10)-10;
        }
        let result = []
        if(req.body.align==="recent"){
            if(req.body.cate==="all"){
                result = await db.query(`select rka_pk,rka_title,rka_cate,zamong_pick from rka_article where rka_title like '%${req.body.query}%' order by id desc limit 10 offset ${page_param};`)
            }else{
                result = await db.query(`select rka_pk,rka_title,rka_cate,zamong_pick from rka_article where rka_cate like '%${req.body.cate}%' and rka_title like '%${req.body.query}%' order by id desc limit 10 offset ${page_param};`)
            }
        }else{
            if(req.body.cate==="all"){
                result = await db.query(`select rka_pk,rka_title,rka_cate,zamong_pick from rka_article where rka_title like '%${req.body.query}%' order by rka_vote desc limit 10 offset ${page_param};`)
            }else{
                result = await db.query(`select rka_pk,rka_title,rka_cate,zamong_pick from rka_article where rka_cate like '%${req.body.cate}%' and rka_title like '%${req.body.query}%' order by rka_vote desc limit 10 offset ${page_param};`)
            }
        }
        let returnArray = {
            list:result.rows
        }
        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on getArticles")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/rka_addpick",async(req,res)=>{
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
        await db.query(`update rka_article set zamong_pick=true where rka_pk=$1`,[req.body.pk])
        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on rka_addpick")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/rka_delete",async(req,res)=>{
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
        await db.query(`delete from  rka_article where rka_pk=$1`,[req.body.pk])
        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on rka_addpick")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/getArticle_pick",async(req,res)=>{
    try{
        if(req.body.page===undefined||req.body.page===null) return res.send("fail")
        const db = await client.connect();
        let result = await db.query(`select rka_pk,rka_cate,rka_title,rka_cover_key,rka_cover_type from rka_article where zamong_pick=true order by id desc limit 4`)
        let temp = []
        for(let i=0;i<result.rowCount;i++){
            let cate = "?????????"
            if(result.rows[i].rka_cate==="rtende"){
                temp="???-??????"
            }
            if(result.rows[i].rka_cate==="rtem"){
                temp="???-???"
            }
            if(result.rows[i].rka_cate==="rka"){
                temp="???-???"
            }
            if(result.rows[i].rka_cate==="rmap"){
                temp="???-???"
            }
            if(result.rows[i].rka_cate==="docu"){
                temp="???-???"
            }
            temp[i] = {
                rka_pk:result.rows[i].rka_pk,
                rka_cate:cate,
                rka_title:result.rows[i].rka_title,
                rka_cover_key:result.rows[i].rka_cover_key,
                rka_cover_type:result.rows[i].rka_cover_type
            }
        }
        let returnArray = {
            picks:temp
        }
        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on getArticles")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/articlevote",async(req,res)=>{
    try{
        const db = await client.connect();
        await db.query(`update rka_article set rka_vote=rka_vote+1 where rka_pk=$1`,[req.body.article_pk])
        await db.release();
        return res.send("success")
    }catch(err){
        return res.send("fail")
    }
})

router.post("/getArticle", async(req,res)=>{
    try{
        if(req.body.article_pk===undefined||req.body.article_pk===null) return res.send("fail")
        console.log(req.body)
        const db = await client.connect();
        
        let result = await db.query(`select rka_pk,rka_title,rka_tag,rka_content,rka_cover_key,rka_cover_type,rka_image_cnt,rka_image_key,rka_image_type,rka_file_key,rka_file_type,rka_vote,rka_date,rka_cate from rka_article where rka_pk=$1`,[req.body.article_pk])
        let temp = "?????????"
        if(result.rows[0].rka_cate==="rtende"){
            temp="???-??????"
        }
        if(result.rows[0].rka_cate==="rtem"){
            temp="???-???"
        }
        if(result.rows[0].rka_cate==="rka"){
            temp="???-???"
        }
        if(result.rows[0].rka_cate==="rmap"){
            temp="???-???"
        }
        if(result.rows[0].rka_cate==="docu"){
            temp="???-???"
        }
        let returnArray = {
            rka_pk:result.rows[0].rka_pk,
            rka_title:result.rows[0].rka_title,
            rka_tag:result.rows[0].rka_tag,
            rka_content:result.rows[0].rka_content,
            rka_cover_key:result.rows[0].rka_cover_key,
            rka_cover_type:result.rows[0].rka_cover_type,
            rka_image_cnt:result.rows[0].rka_image_cnt,
            rka_image_key:result.rows[0].rka_image_key,
            rka_image_type:result.rows[0].rka_image_type,
            rka_file_key:result.rows[0].rka_file_key,
            rka_file_type:result.rows[0].rka_file_type,
            rka_vote:result.rows[0].rka_vote,
            rka_date:result.rows[0].rka_date,
            rka_cate:temp
        }

        // log
        let date = new Date();
        let ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
        await db.query(`insert into rka_article_history(rka_pk,date,ip) values($1,$2,$3)`,[req.body.article_pk,date,ip])
        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on getArticle")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/singleimage", async(req,res)=>{
    try{
        console.log(req.body)
        if(req.body.key===undefined) return res.send("fa2il")
        if(req.body.key === "default") return res.send("fail");
        let temp_key = req.body.key
        let params = {
            'Bucket' : 'iroozamongs3',
            'Key' : 'zamong/ ' + temp_key
        }
        await s3.getObject(params,async(err,data) => {
            if(err){console.log(err);return res.send("no key")};
            if(data.Body!==null){
                let sample = data.Body
                let back = sample.toString("base64");
                return res.send(back)
            }else{
                await db.release();
                return res.send("fail")
            }
        })
    }catch(err){
        console.log("error on singleimage")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/stateinit", async(req,res)=>{
    try{
        if(req.body.state===undefined||req.body.state===null) return res.send("fail")
        console.log(req.body)
        const db = await client.connect();
        let getState = await db.query(`select city_id,city_name,shop_cnt from kcity where state_id=$1 order by shop_cnt desc;`,[req.body.state])
        await db.release()
        return res.send(getState.rows)
    }catch(err){
        console.log("error on stateinit")
        console.log(err)
        return res.send("fail")
    }
})

router.post("/mongcateinit",async(req,res)=>{
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

        let result1 = await db.query(`select rtem_t1_pk,rtem_t1_name from rtem_t1`)
        let result2 = await db.query(`select rtem_t2_pk,rtem_t2_name from rtem_t2`)
        let returnArray = {
            rtem1:result1.rows,
            rtem2:result2.rows
        }

        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on mongcateinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/mong_rtem_add_pick",async(req,res)=>{
    try{
        console.log(req.body)
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

        await db.query(`update rtem_t4 set rtem_t4_zamong_pick=true where rtem_t4_pk=$1`,[req.body.rtem_pk])

        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on mong_rtem_add_pick");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/mong_rtem_delete",async(req,res)=>{
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

        await db.query(`update rtem_t4 set rtem_t4_zamong_pick=true where rtem_t4_pk=$1`,[req.body.rtem_pk])

        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on mong_rtem_delete");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/mong_rtem_recon",async(req,res)=>{
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

        let result = await db.query(`select rtem_t4_key,rtem_t4_type,rtem_t4_pk,rtem_t4_zamong_pick,rtem_t4_name from rtem_t4;`)

        let returnArray = {
            rtem4:result.rows
        }

        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on mongcateinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/mong_project", upload.any(),async(req,res)=>{
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

        let type = "default"
        let cover = "default"
        if(req.files[0]!==undefined){
            if(req.files[0].fieldname === "t4image"){
                let name = "#project" + date.getTime();
                type=req.files[0].mimetype;
                cover=name;
                await uploadtoS3(req.files[0].buffer,name,req.files[0].mimetype)
            }
        }
        
        await db.query(`insert into rproject(title,shop_cover_key,shop_cover_type,cover_ratio,shop_address) values($1,$2,$3,$4,$5)`,[req.body.title,cover,type,req.body.ratio,req.body.addr])

        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on mongcateinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/projectinit",async(req,res)=>{
    try{
        console.log(req.body)
        const db = await client.connect();
        let getpick = await db.query(`select title,shop_cover_key,shop_cover_type,cover_ratio,shop_address from rproject`)
        await db.release();
        return res.send(getpick.rows)
    }catch(err){
        console.log("error on projectinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/rteminit",async(req,res)=>{
    try{
        console.log(req.body)
        if(req.body.key!=="randomkey") return res.send("fail")
        const db = await client.connect();
        if(req.body.shortcut===""){
            let getpick = await db.query(`select (select rtem_t2_pk from rtem_t3 where rtem_t3_pk=rtem_t3_pk limit 1) as rtem_t2_pk,rtem_t3_pk,rtem_t4_key,rtem_t4_type,rtem_t4_pk from rtem_t4 where rtem_t4_zamong_pick order by id desc limit 4`)
            console.log(getpick.rows)
            let getrtem = await db.query(`select rtem_t1_pk,rtem_t1_name from rtem_t1 where rtem_t1_zamong_pick=false`)
            if(getrtem.rows[0]===undefined){
                await db.release();
                return res.send("fail")
            }
            let temp = []
            for(let i=0;i<getrtem.rowCount;i++){
                let result = await db.query(`select t2.rtem_t2_pk,t2.rtem_t2_name,t2.rtem_t2_key,t2.rtem_t2_type,t1.rtem_t1_name from rtem_t2 t2 inner join rtem_t1 t1 on t1.rtem_t1_pk=t2.rtem_t1_pk where t2.rtem_t1_pk=$1;`,[getrtem.rows[i].rtem_t1_pk])
                if(result.rowCount>0){
                    temp.push(result.rows)
                }
            }
            
            let returnArray = {
                pick:getpick.rows,
                list:temp,
                shortcut:false
            }
            await db.release();
            return res.send(returnArray)
        }else{
            let string = "%"+req.body.shortcut+"%"
            let getrtem = await db.query(`select rtem_t1_pk,rtem_t1_name from rtem_t1 where rtem_t1_name like $1`,[string])
            let result = await db.query(`select t2.rtem_t2_pk,t2.rtem_t2_name,t2.rtem_t2_key,t2.rtem_t2_type,t1.rtem_t1_name from rtem_t2 t2 inner join rtem_t1 t1 on t1.rtem_t1_pk=t2.rtem_t1_pk where t2.rtem_t1_pk=$1;`,[getrtem.rows[0].rtem_t1_pk])
            let returnArray = {
                list:result.rows,
                shortcut:true
            }
            await db.release();
            return res.send(returnArray)
        }
    }catch(err){
        console.log("error on rteminit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/itemsinit",async(req,res)=>{
    try{
        console.log(req.body)
        if(req.body.item===undefined||req.body.item===null||req.body.align===undefined||req.body.align===null) return res.send("fail")
        const db = await client.connect();
        let returnArray = []
        if(req.body.align==="recent"){
            let result = await db.query(`select rtem_t2_pk,rtem_t2_name,rtem_t2_key,rtem_t2_type from rtem_t2 where rtem_t1_pk=(select rtem_t1_pk from rtem_t1 where rtem_t1_name=$1) order by id ;`,[req.body.item])
            returnArray = result.rows
        }
        if(req.body.align==="pop"){
            let result = await db.query(`select rtem_t2_pk,rtem_t2_name,rtem_t2_key,rtem_t2_type from rtem_t2 where rtem_t1_pk=(select rtem_t1_pk from rtem_t1 where rtem_t1_name=$1) order by id;`,[req.body.item])
            returnArray = result.rows
        }
        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on itemsinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/rtemt1list",async(req,res)=>{
    try{
        console.log(req.body)
        if(req.body.item===undefined||req.body.item===null||req.body.align===undefined||req.body.align===null) return res.send("fail")
        const db = await client.connect();
        let returnArray = []
        if(req.body.align==="recent"){
            let result = await db.query(`select (select rtem_t1_name from rtem_t1 where rtem_t1_pk='${req.body.item}') as rtem_t1_name,rtem_t2_pk,rtem_t2_name,rtem_t2_key,rtem_t2_type from rtem_t2 where rtem_t1_pk=$1 order by id ;`,[req.body.item])
            returnArray = result.rows
        }
        if(req.body.align==="pop"){
            let result = await db.query(`select (select rtem_t1_name from rtem_t1 where rtem_t1_pk='${req.body.item}') as rtem_t1_name,rtem_t2_pk,rtem_t2_name,rtem_t2_key,rtem_t2_type from rtem_t2 where rtem_t1_pk=$1 order by id;`,[req.body.item])
            returnArray = result.rows
        }

        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on rtemt1list");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/searchrtem",async(req,res)=>{
    try{
        console.log(req.body)
        if(req.body.input===undefined||req.body.input===null) return res.send("fail")
        const db = await client.connect();
        let result2 = await db.query(`select rtem_t2_pk,rtem_t3_pk,rtem_t3_name,rtem_t3_key,rtem_t3_type from rtem_t3 where rtem_t3_name like '%${req.body.input}%';`)
        let returnArray = []
        returnArray = {
            t3:result2.rows
        }
        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on itemsinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/iteminit",async(req,res)=>{
    try{
        console.log(req.body)
        if(req.body.item===undefined||req.body.item===null) return res.send("fail")
        const db = await client.connect();
        let result2 = []
        if(req.body.t3==="default"){
            result2 = await db.query(`select t3_vote,t3_tag,rtem_t3_pk,rtem_t3_name,rtem_t3_key,rtem_t3_type,rtem_t3_r1,rtem_t3_r2,rtem_t3_r3,rtem_t3_r4,rtem_t3_r5,rtem_t3_r6,rtem_t3_r7,rtem_t3_r8,rtem_t3_r9,rtem_t3_r10,rtem_desc,rtem_desc2,rtem_desc3 from rtem_t3 where rtem_t2_pk=$1 order by t3_vote desc limit 1`,[req.body.item])
        }else{
            result2 = await db.query(`select t3_vote,t3_tag,rtem_t3_pk,rtem_t3_name,rtem_t3_key,rtem_t3_type,rtem_t3_r1,rtem_t3_r2,rtem_t3_r3,rtem_t3_r4,rtem_t3_r5,rtem_t3_r6,rtem_t3_r7,rtem_t3_r8,rtem_t3_r9,rtem_t3_r10,rtem_desc,rtem_desc2,rtem_desc3 from rtem_t3 where rtem_t2_pk=$1 and rtem_t3_pk=$2`,[req.body.item,req.body.t3])
        }
        let result = await db.query(`select rtem_t2_pk,rtem_t2_name,rtem_t2_key,rtem_t2_type,rtem_desc from rtem_t2 where rtem_t2_pk=$1`,[req.body.item])
        let result3 = await db.query(`select t3_vote,rtem_t3_name,rtem_t3_pk,rtem_t3_key,rtem_t3_type from rtem_t3 where rtem_t2_pk=$1 order by t3_vote desc`,[req.body.item])
        let result4 = await db.query(`select rtem_t3_pk,rtem_t3_name,rtem_t3_key,rtem_t3_type,rtem_t3_r1,rtem_t3_r2,rtem_t3_r3,rtem_t3_r4,rtem_t3_r5,rtem_t3_r6,rtem_t3_r7,rtem_t3_r8,rtem_t3_r9,rtem_t3_r10,rtem_desc,rtem_desc2,rtem_desc3 from rtem_t3 where rtem_t2_pk!=$1 order by id desc limit 1`,[req.body.item])
        let result5 = await db.query(`select rtem_t4_pk,rtem_t4_name,rtem_t4_key,rtem_t4_type,rtem_address from rtem_t4 where rtem_t3_pk=$1 order by id desc`,[req.body.t3])
        let tag = ""
        if(result2.rows[0].t3_tag!==null&&result2.rows[0].t3_tag!==undefined) tag = result2.rows[0].t3_tag
        let result6 = await db.query(`select rka_pk,rka_title,rka_cover_key,rka_cover_type from rka_article where rka_tag like '%${tag}%';`)
        if(result.rows[0]===undefined){
            await db.release();
            return res.send("fail")
        }
        let returnArray = {
            item:result.rows[0],
            detail:result2.rows[0],
            list:result3.rows,
            list2:result4.rows,
            pick:result5.rows,
            article:result6.rows
        }
        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on itemsinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/vote",async(req,res)=>{
    // item
    try{
        console.log(req.body)
        const db = await client.connect();
        await db.query(`update rtem_t2 set t2_vote=t2_vote+1 where rtem_t2_pk=$1`,[req.body.t2])
        if(req.body.t3==="default"){
            await db.query(`update rtem_t3 set t3_vote=t3_vote+1 where rtem_t3_pk=(select rtem_t3_pk from rtem_t3 order by t3_vote desc limit 1)`)
        }else{
            await db.query(`update rtem_t3 set t3_vote=t3_vote+1 where rtem_t3_pk=$1`,[req.body.t3])
        }
        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on itemsinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/shopvote",async(req,res)=>{
    try{
        console.log(req.body)
        const db = await client.connect();
        await db.query(`update shops set shop_vote=shop_vote+1 where shop_pk=$1`,[req.body.pk])
        await db.release();
        return res.send("success")
    }catch(err){
        console.log("error on itemsinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/rtemnaviinit",async(req,res)=>{
    try{
        console.log(req.body)
        const db = await client.connect();
        
        let result = await db.query(`select rtem_t1_pk,rtem_t1_name from rtem_t1;`)
        let returnArray = {
            list:result.rows
        }
        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on rtemnaviinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/mapinit",async(req,res)=>{
    try{
        if(req.body.type===undefined||req.body.type===null||req.body.page===undefined||req.body.page===null) return res.send("fail")
        const db = await client.connect();
        let result = [];
        let result2 = [];
        let page_param = 0;
        if(req.body.page>0){
            page_param = (Number(req.body.page)*10)-10;
        }
        let shopCnt = 1
        let map = await db.query(`select state_id,state_name,shop_cnt from kstate`)
        if(req.body.type==="all"){
            result = await db.query(`select shop_pk,title,oneline,shop_address,shop_cover_type,shop_cover_key from shops offset ${page_param} limit 10 ;`)
            result2 = await db.query(`select shop_pk from shops ;`)
            console.log(result.rows)
        }
        if(req.body.type!=="all"){
            result = await db.query(`select shop_pk,title,oneline,shop_address,shop_cover_type,shop_cover_key from shops where shoptype like '%${req.body.type}%' offset ${page_param} limit 10 ;`)
            result2 = await db.query(`select shop_pk from shops where shoptype like '%${req.body.type}%'`)
        }
        shopCnt = result2.rowCount
        let returnArray = {
            item:result.rows,
            map:map.rows,
            shopcnt:shopCnt
        }
        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on itemsinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/shoplistinit",async(req,res)=>{
    try{
        const db = await client.connect();
        let result = [];
        let result2 = [];
        let page_param = 0;
        if(req.body.page>0){
            page_param = (Number(req.body.page)*10)-10;
        }
        let shopCnt = 1
        if(req.body.type==="all"){
            result = await db.query(`select shop_pk,title,oneline,shop_address,shop_cover_type,shop_cover_key from shops where city_id=$1 offset ${page_param} limit 10 ;`,[req.body.city])
            result2 = await db.query(`select shop_pk from shops ;`)
            console.log(result.rows)
        }
        if(req.body.type!=="all"){
            result = await db.query(`select shop_pk,title,oneline,shop_address,shop_cover_type,shop_cover_key from shops where city_id=$1 and shoptype like '%${req.body.type}%' offset ${page_param} limit 10 ;`,[req.body.city])
            result2 = await db.query(`select shop_pk from shops where shoptype like '%${req.body.type}%'`)
        }
        shopCnt = result2.rowCount
        let returnArray = {
            item:result.rows,
            shopcnt:shopCnt
        }
        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on itemsinit");
        console.log(err)
        return res.send("fail")
    }
})

router.post("/shopinit",async(req,res)=>{
    try{
        console.log(req.body)
        const db = await client.connect();
        let result = await db.query(`select k1.state_id,s1.title,s1.shop_cover_key,s1.shop_cover_type,s1.shop_body,s1.shop_address,s1.shop_web,s1.shop_tel,s1.shop_email,s1.shop_location,s1.shop_vote,s1.shoptype from shops s1 inner join kstate k1 on s1.state_id=k1.state_name where shop_pk=$1;`,[req.body.shop_pk])
        // let tagArray = []
        let result2 = []
        if(result.rows[0].shop_tag!==undefined&&result.rows[0].shop_tag!==null){
            // tagArray = result.rows[0].split(",")
            result2 = await db.query(`select rka_pk,rka_title,rka_cover_key,rka_cover_type from rka_article where rka_tag like '%${result.rows[0].shop_tag}%';`)
        }
        // for(let i=0;i<tagArray.length;i++){
        // }
        let returnArray = {
            shop:result.rows[0],
            article:result2.rows
        }
        await db.release();
        return res.send(returnArray)
    }catch(err){
        console.log("error on shopinit");
        console.log(err)
        return res.send("fail")
    }
})



router.post("/maprequest",async(req,res)=>{
    try{
        if(req.body.location1===undefined||req.body.location2===undefined||req.body.text===undefined||req.body.email===undefined||req.body.check2===undefined||req.body.check1===undefined)
        console.log(req.body)
        const db = await client.connect();
        let date = new Date();
        let ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
        await db.query(`insert into shop_request(email,shop_state,shop_city,policy,check1,check2,text,date,ip) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,[req.body.email,req.body.location1,req.body.location2,true,req.body.check1,req.body.check2,req.body.text,date,ip])
        await db.release();

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: "iroomailer@gmail.com",
              pass: "dlfnwkahd123~",
            },
        });

        let txt = `<p>?????? ?????????: ${req.body.email}</p><br/><p>?????? ??????: ${req.body.location1}</p><br/><p>?????? ??????: ${req.body.location2}</p><br/><br/><p>?????? ??????: ${req.body.text}</p>`

        if(req.body.check1===true){
            let info = await transporter.sendMail({
                from: '"????????????" <iroozamong@iroozamong.com>', // sender address
                to: "iroozamong@naver.com", // list of receivers
                subject: "????????????????????? ???????????????.", // Subject line
                // text: "Hello world?", // plain text body
                html: txt, // html body
            });
            console.log("Message sent: %s", info.messageId);
        }else{
            let info = await transporter.sendMail({
                from: '"????????????" <iroozamong@iroozamong.com>', // sender address
                to: "iroozamong@naver.com", // list of receivers
                subject: "?????? ????????? ????????????????????? ????????? ???????????????. ", // Subject line
                // text: "Hello world?", // plain text body
                html: txt, // html body
            });
            console.log("Message sent: %s", info.messageId);
        }
 
    // ????????? ????????????????????? ?????????
        
        return res.send("success")
    }catch(err){
        console.log("error on maprequest")
        console.log(err)
        return res.send("fail")
    }
})

// router.post("/mong_rtem_add_pick",async(req,res)=>{
//     try{
//         if(req.body.token===null||req.body.token===undefined||req.body.session===null||req.body.session===undefined) return res.send("fail")
//         jwt.verify(req.body.token,jwtConfig.key);
//         jwt.verify(req.body.session,jwtConfig.key);
//         let user_pk = req.body.token;
//         user_pk = user_pk.split(".")[1];
//         user_pk = user_pk.split(".")[0];
//         user_pk = atob(user_pk);
//         user_pk = user_pk.split('{"user_pk":"')[1];
//         user_pk = user_pk.split('","iat":')[0];

//         let session = req.body.session;
//         session = session.split(".")[1];
//         session = session.split(".")[0];
//         session = atob(session);
//         session = session.split('{"session":"')[1];
//         session = session.split('","iat":')[0];

//         const db = await client.connect();
//         let checkSession = await db.query(`select from users where session=$1 and user_id=$2`,[session,user_pk])
//         if(checkSession.rows[0]===undefined){
//             await db.release();
//             return res.send("fail")
//         }

        

//         await db.release();
//         return res.send("success")
//     }catch(err){
//         console.log("error on mong_rtem_add_pick");
//         console.log(err)
//         return res.send("fail")
//     }
// })


module.exports = router;