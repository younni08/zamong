import React, { useState } from "react";
import MongSidenavi from "./mong_sidenavi";
import axios from "axios"
import { getCookie } from "../common/cookie";

const RtemProject = () => {
    const [title,setTitle] = useState("")
    const [addr,serAddr] = useState("")
    const [ratio,setRatio] = useState("")

    const handle1 = (e) => {setTitle(e.target.value)}
    const handle2 = (e) => {serAddr(e.target.value)}
    const handle3 = (e) => {setRatio(e.target.value)}

    const handleSubmit = async() => {
        let url = "/api/mong/mong_project";
        const formData = new FormData();
        let token = getCookie("token")
        let session = getCookie("session")
        if(token===null||session===null) return alert("로그인 후 이용하세요")
        formData.append("token",token);
        formData.append("session",session);
        formData.append("title",title);
        formData.append("addr",addr);
        formData.append("ratio",ratio);

        let t4_image = document.getElementById("mong_project_image");
        if(t4_image.files.length!==0&&t4_image.files.length!==undefined){
            formData.append("t4image",t4_image.files[0])
        }else{
            return alert("사진을 추가해주세요.")
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
        <div className="mong">
            <MongSidenavi />
            <div className="mong_body">
                <div>
                <div className="mong_item">
                        <span>*는 필수 항목입니다.</span>
                        <div>
                            <div className="mong_item_manager3">
                                <div className="mong_item_general">
                                    <div>
                                        <span>이름*</span>
                                        <span></span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handle1} />
                                    </div>
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>판매 사이트 주소*</span>
                                        <span></span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handle2} />
                                    </div>
                                </div>
                            </div>
                            <div className="mong_item_manager3">
                                <div className="mong_item_general">
                                    <div>
                                        <span>사진 비율</span>
                                        <span>22,21,12,11 중 택 1</span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handle3} />
                                    </div>
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>판매 아이템 사진*</span>
                                        <span></span>
                                    </div>
                                    <div className="general_input">
                                        <input type="file" className="image" id="mong_project_image" />
                                    </div>
                                </div>
                            </div>
                            <div className="mong_item_general_submit">
                                <span onClick={handleSubmit}>입력하기</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RtemProject