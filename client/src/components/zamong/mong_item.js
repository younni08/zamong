import React,{useState,useEffect} from "react";
import {getCookie} from "./../common/cookie"
import { Redirect } from "react-router-dom";
// quill
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from "axios";

const MongItem = () => {
    const [t1list,setT1list] = useState([])
    const [t2list,setT2list] = useState([])
    const [t3list,setT3list] = useState([])
    useEffect(()=>{
        init();
    },[])

    const init = async() => {
        let url = "/api/mong/mong_item_init";
        let params = {
            secret:"secret?"
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data==="fail") return alert("잘못된 접근입니다.")
        setT1list(res.data.t1)
        setT2list(res.data.t2)
        setT3list(res.data.t3)
    }

    const [t4name,setT4name] = useState("")
    const handleT4 = (e) => {setT4name(e.target.value)}
    const [t4tag,setT4tag] = useState("")
    const handleT4tag = (e) => {setT4tag(e.target.value)}
    const [t4addr,setT4addr] = useState("")
    const handleT4ddr = (e) => {setT4addr(e.target.value)}

    const handleT1checkbox = () => {
        let tempString = ""
        for(let i=0;i<t1list.length;i++){
            if(document.getElementById(t1list[i].rtem_t1_pk).checked===true){tempString = tempString + t1list[i].rtem_t1_pk +","}
        }
        return tempString
    }
    const handleT2checkbox = () => {
        let tempString = ""
        for(let i=0;i<t2list.length;i++){
            if(document.getElementById(t2list[i].rtem_t2_pk).checked===true){tempString = tempString + t2list[i].rtem_t2_pk +","}
        }
        return tempString
    }
    const handleT3checkbox = () => {
        let tempString = ""
        for(let i=0;i<t3list.length;i++){
            if(document.getElementById(t3list[i].rtem_t3_pk).checked===true){tempString = tempString + t3list[i].rtem_t3_pk +","}
        }
        return tempString
    }

    const handleSubmit = async() => {
        let url = "/api/mong/additem"
        const formData = new FormData();
        let token = getCookie("token")
        let session = getCookie("session")
        if(token===null||session===null) return alert("로그인 후 이용하세요")
        formData.append("token",token);
        formData.append("session",session);
        // t4
        formData.append("t4name",t4name);
        formData.append("t4addres",t4addr);
        formData.append("t4tag",t4tag);

        let checkt1 = handleT1checkbox();
        let checkt2 = handleT2checkbox();
        let checkt3 = handleT3checkbox();

        formData.append("t1item",checkt1)
        formData.append("t2item",checkt2)
        formData.append("t3item",checkt3)

        let t4_image = document.getElementById("mong_t4_image");
        if(t4_image.files.length!==0&&t4_image.files.length!==undefined){
            formData.append("t4image",t4_image.files[0])
        }

        const config = {
            headers:{
                "content-type":"application/mu"
            }
        }

        let res = await axios.post(url,formData,config)
        console.log(res.data)
        if(res.data==="success") return alert("등록되었습니다.")
        if(res.data!=="success") return alert("잘못된 경로입니다.")
    }

    return (
        <div className="mong_item">
            <span>*는 필수 항목입니다.</span>
            <div>
                <div className="mong_item_general">
                    <div>
                        <span>대분류*</span>
                        <span></span>
                    </div>
                    <div>
                        {
                            t1list?t1list.map(c=>{
                                return (
                                <div className="mong_item_general_element" key={c.rtem_t1_pk}>
                                    <label for={c.rtem_t1_pk}>{c.rtem_t1_name}</label>
                                    <input type="checkbox" id={c.rtem_t1_pk} />
                                </div>
                                )
                            }):""
                        }
                    </div>
                </div>
                <div className="mong_item_general">
                    <div>
                        <span>중분류*</span>
                        <span></span>
                    </div>
                    <div>
                        {
                            t2list?t2list.map(c=>{
                                return (
                                <div className="mong_item_general_element" key={c.rtem_t2_pk}>
                                    <label for={c.rtem_t2_pk}>{c.rtem_t2_name}</label>
                                    <input type="checkbox" id={c.rtem_t2_pk} />
                                </div>
                                )
                            }):""
                        }
                    </div>
                </div>
                <div className="mong_item_general">
                    <div>
                        <span>소분류*</span>
                        <span></span>
                    </div>
                    <div>
                        {
                            t3list?t3list.map(c=>{
                                return (
                                <div className="mong_item_general_element" key={c.rtem_t3_pk}>
                                    <label for={c.rtem_t3_pk}>{c.rtem_t3_name}</label>
                                    <input type="checkbox" id={c.rtem_t3_pk} />
                                </div>
                                )
                            }):""
                        }
                    </div>
                </div>
                
                
                <div className="mong_item_manager3">
                    <div className="mong_item_general">
                        <div>
                            <span>아이템 이름*</span>
                            <span></span>
                        </div>
                        <div className="general_input">
                            <input type="text" onChange={handleT4} />
                        </div>
                    </div>
                    <div className="mong_item_general">
                        <div>
                            <span>판매 사이트 주소*</span>
                            <span></span>
                        </div>
                        <div className="general_input">
                            <input type="text" onChange={handleT4ddr} />
                        </div>
                    </div>
                </div>
                <div className="mong_item_manager3">
                    <div className="mong_item_general">
                        <div>
                            <span>테그*</span>
                            <span>,로 분리해주세요</span>
                        </div>
                        <div className="general_input">
                            <input type="text" onChange={handleT4tag} />
                        </div>
                    </div>
                    <div className="mong_item_general">
                        <div>
                            <span>판매 아이템 사진*</span>
                            <span></span>
                        </div>
                        <div className="general_input">
                            <input type="file" className="image" id="mong_t4_image" />
                        </div>
                    </div>
                </div>
                
                
                <div className="mong_item_general_submit">
                    <span onClick={handleSubmit}>입력하기</span>
                </div>
            </div>
        </div>
    )
}

export default MongItem;