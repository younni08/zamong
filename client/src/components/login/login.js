import React,{useState} from "react";
import axios from "axios"

const Login = () => {
    const [input1,setInput1] = useState("")
    const [input2,setInput2] = useState("")
    
    const handleinput1 = (e) => {setInput1(e.target.value)}
    const handleinput2 = (e) => {setInput2(e.target.value)}

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
        console.log(res.data)
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
        </div>
    )
}

export default Login;