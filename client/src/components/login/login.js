import React,{useState} from "react";
import axios from "axios"
import {Redirect} from "react-router-dom"

// const bcrypt = require('bcryptjs');
// const saltRounds = 10;
const setCookie = (name, value, exp) => {
    var date = new Date();
    date.setTime(date.getTime() + exp*60*60*1000*2);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

const Login = () => {
    const [input1,setInput1] = useState("")
    const [input2,setInput2] = useState("")
    const [redirect,setRedirect] = useState(false)
    
    const handleinput1 = (e) => {setInput1(e.target.value)}
    const handleinput2 = (e) => {setInput2(e.target.value)}
    // const handleinput2 = (e) => {
    //     bcrypt.hash(e.target.value, saltRounds, (err,hash) => {
    //         setInput2(hash)
    //     })
    // }

    const loginSubmit = async() => {
        let url = "/api/mong/login"
        let params = {
            input1:input1,
            input2:input2
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        if(res.data==="fail") return alert("로그인 정보가 일치하지 않습니다.")
        await setCookie('token',res.data.token,2);
        await setCookie('session',res.data.session,2);
        if(res.data!=="fail") return setRedirect(true)
    }

    return(
        <div className="login">
            <div>
                <div className="login_level0">
                    <span>환영합니다</span>
                </div>
                <div className="login_level1">
                    <span>아이디</span>
                    <div>
                        <input type="text" onChange={handleinput1} />
                    </div>
                </div>
                <div className="login_level1">
                    <span>비밀번호</span>
                    <div>
                        <input type="password" onChange={handleinput2} />
                    </div>
                </div>
                <div className="login_level2" onClick={loginSubmit}>
                    <span>로그인</span>
                </div>
            </div>
            {
                redirect?<Redirect to="/zamong" />:""
            }
        </div>
    )
}

export default Login;