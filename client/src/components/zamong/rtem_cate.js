import React,{useState,useEffect} from "react";
import {getCookie} from "./../common/cookie"
// quill
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from "axios";

import MongSidenavi from "./mong_sidenavi";
const Zamong = () => {
    const [t1list,setT1list] = useState([])
    const [t2list,setT2list] = useState([])
    useEffect(()=>{
        init();
    },[])

    const [t3tag,setT3tag] = useState("")
    const handleT3tag = (e) => {setT3tag(e.target.value)}

    const init = async() => {
        let token = getCookie("token")
        let session = getCookie("session")
        if(token===null||session===null) return alert("로그인 후 이용하세요")
        let url = "/api/mong/mongcateinit";
        let params = {
            token:token,
            session:session
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        setT1list(res.data.rtem1)
        setT2list(res.data.rtem2)
    }
    const [q00,setq00] = useState("")
    const [q0,setq0] = useState("")
    const [q1,setq1] = useState("")
    const handleBody00 = (html) => setq00(html)
    const handleBody0 = (html) => setq0(html)
    const handleBody1 = (html) => setq1(html)

    const [t1name,setT1name] = useState("")
    const handleT1 = (e) => {setT1name(e.target.value)}

    const [t2name,setT2name] = useState("")
    const handleT2 = (e) => {setT2name(e.target.value)}

    const [t3name,setT3name] = useState("")
    const handleT3 = (e) => {setT3name(e.target.value)}

    //t3
    const handleBody2 = (html) => setq2(html)
    const handleBody3 = (html) => setq3(html)
    const handleBody4 = (html) => setq4(html)
    const handleBody5 = (html) => setq5(html)
    const handleBody6 = (html) => setq6(html)
    const handleBody7 = (html) => setq7(html)
    const handleBody8 = (html) => setq8(html)
    const handleBody9 = (html) => setq9(html)
    const handleBody10 = (html) => setq10(html)
    const handleBody11 = (html) => setq11(html)
    const handleBody12 = (html) => setq12(html)
    const [q2,setq2] = useState("")
    const [q3,setq3] = useState("")
    const [q4,setq4] = useState("")
    const [q5,setq5] = useState("")
    const [q6,setq6] = useState("")
    const [q7,setq7] = useState("")
    const [q8,setq8] = useState("")
    const [q9,setq9] = useState("")
    const [q10,setq10] = useState("")
    const [q11,setq11] = useState("")
    const [q12,setq12] = useState("")
    const [smong_r1,setsmong_r1] = useState(false)
    const mong_r1 = () => {
        if(smong_r1===false){
            setsmong_r1(true)
        }else{
            setsmong_r1(false)
        }
    }
    const [smong_r2,setsmong_r2] = useState(false)
    const mong_r2 = () => {
        if(smong_r2===false){
            setsmong_r2(true)
        }else{
            setsmong_r2(false)
        }
    }
    const [smong_r3,setsmong_r3] = useState(false)
    const mong_r3 = () => {
        if(smong_r3===false){
            setsmong_r3(true)
        }else{
            setsmong_r3(false)
        }
    }
    const [smong_r4,setsmong_r4] = useState(false)
    const mong_r4 = () => {
        if(smong_r4===false){
            setsmong_r4(true)
        }else{
            setsmong_r4(false)
        }
    }
    const [smong_r5,setsmong_r5] = useState(false)
    const mong_r5 = () => {
        if(smong_r5===false){
            setsmong_r5(true)
        }else{
            setsmong_r5(false)
        }
    }
    const [smong_r6,setsmong_r6] = useState(false)
    const mong_r6 = () => {
        if(smong_r6===false){
            setsmong_r6(true)
        }else{
            setsmong_r6(false)
        }
    }
    const [smong_r7,setsmong_r7] = useState(false)
    const mong_r7 = () => {
        if(smong_r7===false){
            setsmong_r7(true)
        }else{
            setsmong_r7(false)
        }
    }
    const [smong_r8,setsmong_r8] = useState(false)
    const mong_r8 = () => {
        if(smong_r8===false){
            setsmong_r8(true)
        }else{
            setsmong_r8(false)
        }
    }
    const [smong_r9,setsmong_r9] = useState(false)
    const mong_r9 = () => {
        if(smong_r9===false){
            setsmong_r9(true)
        }else{
            setsmong_r9(false)
        }
    }
    const [smong_r10,setsmong_r10] = useState(false)
    const mong_r10 = () => {
        if(smong_r10===false){
            setsmong_r10(true)
        }else{
            setsmong_r10(false)
        }
    }


    const handleSubmitT1 = async() => {
        let url = "/api/mong/addcatet1"
        const formData = new FormData();

        let token = getCookie("token")
        let session = getCookie("session")
        if(token===null||session===null) return alert("로그인 후 이용하세요")
        formData.append("token",token);
        formData.append("session",session);
        // t1
        formData.append("t1name",t1name)
        let t1_image = document.getElementById("mong_t1_image");
        if(t1_image.files.length!==0&&t1_image.files.length!==undefined){
            formData.append("t1image",t1_image.files[0])
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

    const handleSubmitT2 = async() => {
        let url = "/api/mong/addcatet2"
        const formData = new FormData();

        let token = getCookie("token")
        let session = getCookie("session")
        if(token===null||session===null) return alert("로그인 후 이용하세요")
        formData.append("token",token);
        formData.append("session",session);

        // t2
        formData.append("t2name",t2name)
        formData.append("t2body",q00)
        let t2_image = document.getElementById("mong_t2_image");
        if(t2_image.files.length!==0&&t2_image.files.length!==undefined){
            formData.append("t2image",t2_image.files[0])
        }

        let parentpk = document.getElementById("mongselect_cate2").value
        formData.append("t1pk",parentpk)

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

    const handleSubmitT3 = async() => {
        let url = "/api/mong/addcatet3"
        const formData = new FormData();

        let token = getCookie("token")
        let session = getCookie("session")
        if(token===null||session===null) return alert("로그인 후 이용하세요")
        formData.append("token",token);
        formData.append("session",session);
        // t3
        formData.append("t3name",t3name)
        formData.append("t3madeof",q0)
        formData.append("t3body",q1)
        formData.append("t3tag",t3tag)

        formData.append("t4cmt",q12);
        formData.append("t4r1",smong_r1);
        formData.append("t4r2",smong_r2);
        formData.append("t4r3",smong_r3);
        formData.append("t4r4",smong_r4);
        formData.append("t4r5",smong_r5);
        formData.append("t4r6",smong_r6);
        formData.append("t4r7",smong_r7);
        formData.append("t4r8",smong_r8);
        formData.append("t4r9",smong_r9);
        formData.append("t4r10",smong_r10);

        formData.append("t4r1txt",q2);
        formData.append("t4r2txt",q3);
        formData.append("t4r3txt",q4);
        formData.append("t4r4txt",q5);
        formData.append("t4r5txt",q6);
        formData.append("t4r6txt",q7);
        formData.append("t4r7txt",q8);
        formData.append("t4r8txt",q9);
        formData.append("t4r9txt",q10);
        formData.append("t4r10txt",q11);

        let t3_image = document.getElementById("mong_t3_image");
        if(t3_image.files.length!==0&&t3_image.files.length!==undefined){
            formData.append("t3image",t3_image.files[0])
        }
        const config = {
            headers:{
                "content-type":"application/mu"
            }
        }

        let parentpk = document.getElementById("mongselect_cate3").value
        formData.append("t2pk",parentpk)

        let res = await axios.post(url,formData,config)
        console.log(res.data)
        if(res.data==="success") return alert("등록되었습니다.")
        if(res.data!=="success") return alert("잘못된 경로입니다.")
    }

    const handleCateNavi = (e) => {
        if(e.currentTarget.getAttribute("id")==="mong_cate1"){
            setCate1(true)
            setCate2(false)
            setCate3(false)
            document.getElementById("mong_cate1").className="on"
            document.getElementById("mong_cate2").className=""
            document.getElementById("mong_cate3").className=""
        }
        if(e.currentTarget.getAttribute("id")==="mong_cate2"){
            setCate2(true)
            setCate1(false)
            setCate3(false)
            document.getElementById("mong_cate2").className="on"
            document.getElementById("mong_cate1").className=""
            document.getElementById("mong_cate3").className=""
        }
        if(e.currentTarget.getAttribute("id")==="mong_cate3"){
            setCate3(true)
            setCate2(false)
            setCate1(false)
            document.getElementById("mong_cate3").className="on"
            document.getElementById("mong_cate1").className=""
            document.getElementById("mong_cate2").className=""
        }
    }

    const [cate1,setCate1] = useState(true)
    const [cate2,setCate2] = useState(false)
    const [cate3,setCate3] = useState(false)

    return (
        <div className="mong">
            <MongSidenavi />
            <div className="mong_body">
                <div>
                    <div className="mong_item2">
                        <div>
                            <span onClick={handleCateNavi} id="mong_cate1" className="on">대분류</span>
                            <span onClick={handleCateNavi} id="mong_cate2" >중분류</span>
                            <span onClick={handleCateNavi} id="mong_cate3" >소분류</span>
                        </div>
                        {
                            cate1?
                            <div>
                                <div className="mong_item_general2">
                                    <div>
                                        <span>대분류*</span>
                                        <span className="addon" onClick={handleSubmitT1}>등록하기</span>
                                    </div>
                                </div>
                                <div className="mong_add_newbig" id="mong_add_newbig">
                                    <div>
                                        <span>이름</span>
                                        <div>
                                            <input type="text" onChange={handleT1} />
                                        </div>
                                    </div>
                                    <div>
                                        <span>사진</span>
                                        <div>
                                            <input type="file" className="image" id="mong_t1_image" />
                                        </div>
                                    </div>
                                </div>
                            </div>:""
                        }
                        {
                            cate2?
                            <div>
                                <div className="mong_item_general2">
                                    <div>
                                        <span>중분류*</span>
                                        <span className="addon" onClick={handleSubmitT2} >등록하기</span>
                                    </div>
                                </div>
                                <div className="mong_add_newmedium" id="mong_add_newmedium">
                                    <div className="mong_cate_list">
                                        <span>분류</span>
                                        <div>
                                            <select id="mongselect_cate2">
                                                <option disabled selected>대분류를 선택해주세요</option>
                                                {
                                                    t1list?t1list.map(c=>{
                                                        return(
                                                            <option key={c.rtem_t1_pk} value={c.rtem_t1_pk}>{c.rtem_t1_name}</option>
                                                        )
                                                    }):""
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mong_add_newmedium_first">
                                        <div>
                                            <span>이름</span>
                                            <div>
                                                <input type="text" onChange={handleT2}/>
                                            </div>
                                        </div>
                                        <div>
                                            <span>사진</span>
                                            <div>
                                                <input type="file" className="image" id="mong_t2_image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mong_item_general2">
                                        <div>
                                            <span>중분류 아이템 소재*</span>
                                            <span></span>
                                        </div>
                                        <div className="mong_genenal_quill">
                                            <ReactQuill 
                                            onChange={handleBody00}
                                            modules={{
                                                toolbar: {
                                                    container: [
                                                        [{ header: [1,2,false]}],
                                                        ['bold', 'italic', 'underline'],
                                                        [{ color: [] }, { background: [] }],
                                                    ]
                                                }
                                            }}
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :""
                        }
                        {
                            cate3?
                            <div>
                                <div className="mong_item_general2">
                                    <div>
                                        <span>소분류*</span>
                                        <span className="addon" onClick={handleSubmitT3} >등록하기</span>
                                    </div>
                                </div>
                                <div className="mong_add_newsmall" id="mong_add_newsmall">
                                    <div className="mong_cate_list">
                                        <span>분류</span>
                                        <div>
                                            <select id="mongselect_cate3">
                                                <option disabled selected>중분류를 선택해주세요</option>
                                                {
                                                    t2list?t2list.map(c=>{
                                                        return(
                                                            <option key={c.rtem_t2_pk} value={c.rtem_t2_pk}>{c.rtem_t2_name}</option>
                                                        )
                                                    }):""
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mong_add_newsmall_first">
                                        <div>
                                            <span>이름</span>
                                            <div>
                                                <input type="text" onChange={handleT3} />
                                            </div>
                                        </div>
                                        <div>
                                            <span>사진</span>
                                            <div>
                                                <input type="file" className="image" id="mong_t3_image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mong_item_manager1">
                                        <div className="mong_item_general2">
                                            <div>
                                                <span>소분류 아이템 소재*</span>
                                                <span></span>
                                            </div>
                                            <div className="mong_genenal_quill">
                                                <ReactQuill 
                                                onChange={handleBody0}
                                                modules={{
                                                    toolbar: {
                                                        container: [
                                                            [{ header: [1,2,false]}],
                                                            ['bold', 'italic', 'underline'],
                                                            [{ color: [] }, { background: [] }],
                                                        ]
                                                    }
                                                }}
                                            />
                                            </div>
                                        </div>
                                        <div className="mong_item_general2">
                                            <div>
                                                <span>소분류 아이템 특징*</span>
                                                <span></span>
                                            </div>
                                            <div className="mong_genenal_quill">
                                                <ReactQuill 
                                                onChange={handleBody1}
                                                modules={{
                                                    toolbar: {
                                                        container: [
                                                            [{ header: [1,2,false]}],
                                                            ['bold', 'italic', 'underline'],
                                                            [{ color: [] }, { background: [] }],
                                                        ]
                                                    }
                                                }}
                                            />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mong_item_manager3">
                                <div className="mong_item_general">
                                    <div>
                                        <span>태그*</span>
                                        <span>,로 분리해주세요</span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handleT3tag} />
                                    </div>
                                </div>
                                {/* <div className="mong_item_general">
                                    <div>
                                        <span>판매 아이템 사진*</span>
                                        <span></span>
                                    </div>
                                    <div className="general_input">
                                        <input type="file" className="image" id="mong_t4_image" />
                                    </div>
                                </div> */}
                            </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>R10*</span>
                                        <span>선택해주세요</span>
                                    </div>
                                    <div className="r10">
                                        <div className="mong_item_general_element">
                                            <label for="mong_r1">관계짓기</label>
                                            <input type="checkbox" id="mong_r1" onClick={mong_r1} />
                                        </div>
                                        <div className="mong_item_general_element">
                                            <label for="mong_r2">다시 생각하기</label>
                                            <input type="checkbox" id="mong_r2" onClick={mong_r2} />
                                        </div>
                                        <div className="mong_item_general_element">
                                            <label for="mong_r3">거절하기</label>
                                            <input type="checkbox" id="mong_r3" onClick={mong_r3} />
                                        </div>
                                        <div className="mong_item_general_element">
                                            <label for="mong_r4">줄이기</label>
                                            <input type="checkbox" id="mong_r4" onClick={mong_r4} />
                                        </div>
                                        <div className="mong_item_general_element">
                                            <label for="mong_r5">재사용하기</label>
                                            <input type="checkbox" id="mong_r5" onClick={mong_r5} />
                                        </div>
                                        <div className="mong_item_general_element">
                                            <label for="mong_r6">수리하기</label>
                                            <input type="checkbox" id="mong_r6" onClick={mong_r6} />
                                        </div>
                                        <div className="mong_item_general_element">
                                            <label for="mong_r7">교체하기</label>
                                            <input type="checkbox" id="mong_r7" onClick={mong_r7} />
                                        </div>
                                        <div className="mong_item_general_element">
                                            <label for="mong_r8">새 용도 찾기</label>
                                            <input type="checkbox" id="mong_r8" onClick={mong_r8} />
                                        </div>
                                        <div className="mong_item_general_element">
                                            <label for="mong_r9">퇴비화하기</label>
                                            <input type="checkbox" id="mong_r9" onClick={mong_r9} />
                                        </div>
                                        <div className="mong_item_general_element">
                                            <label for="mong_r10">재활용하기</label>
                                            <input type="checkbox" id="mong_r10" onClick={mong_r10} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mong_item_manager2">
                                    {
                                        smong_r1?
                                        <div className="mong_item_general">
                                        <div>
                                            <span>관계짓기</span>
                                            <span></span>
                                        </div>
                                        <div className="mong_genenal_quill">
                                            <ReactQuill 
                                            onChange={handleBody2}
                                            modules={{
                                                toolbar: {
                                                    container: [
                                                        [{ header: [1,2,false]}],
                                                        ['bold', 'italic', 'underline'],
                                                        [{ color: [] }, { background: [] }],
                                                    ]
                                                }
                                            }}
                                        />
                                        </div>
                                        </div>:""
                                    }
                                    {
                                        smong_r2?<div className="mong_item_general">
                                        <div>
                                            <span>다시 생각하기</span>
                                            <span></span>
                                        </div>
                                        <div className="mong_genenal_quill">
                                            <ReactQuill 
                                            onChange={handleBody3}
                                            modules={{
                                                toolbar: {
                                                    container: [
                                                        [{ header: [1,2,false]}],
                                                        ['bold', 'italic', 'underline'],
                                                        [{ color: [] }, { background: [] }],
                                                    ]
                                                }
                                            }}
                                        />
                                        </div>
                                        </div>:""
                                    }
                                    {
                                        smong_r3?<div className="mong_item_general">
                                        <div>
                                            <span>거절하기</span>
                                            <span></span>
                                        </div>
                                        <div className="mong_genenal_quill">
                                            <ReactQuill 
                                            onChange={handleBody4}
                                            modules={{
                                                toolbar: {
                                                    container: [
                                                        [{ header: [1,2,false]}],
                                                        ['bold', 'italic', 'underline'],
                                                        [{ color: [] }, { background: [] }],
                                                    ]
                                                }
                                            }}
                                        />
                                        </div>
                                        </div>:""
                                    }
                                    {
                                        smong_r4?<div className="mong_item_general">
                                        <div>
                                            <span>줄이기</span>
                                            <span></span>
                                        </div>
                                        <div className="mong_genenal_quill">
                                            <ReactQuill 
                                            onChange={handleBody5}
                                            modules={{
                                                toolbar: {
                                                    container: [
                                                        [{ header: [1,2,false]}],
                                                        ['bold', 'italic', 'underline'],
                                                        [{ color: [] }, { background: [] }],
                                                    ]
                                                }
                                            }}
                                        />
                                        </div>
                                        </div>:""
                                    }
                                    {
                                        smong_r5?<div className="mong_item_general">
                                        <div>
                                            <span>재사용하기</span>
                                            <span></span>
                                        </div>
                                        <div className="mong_genenal_quill">
                                            <ReactQuill 
                                            onChange={handleBody6}
                                            modules={{
                                                toolbar: {
                                                    container: [
                                                        [{ header: [1,2,false]}],
                                                        ['bold', 'italic', 'underline'],
                                                        [{ color: [] }, { background: [] }],
                                                    ]
                                                }
                                            }}
                                        />
                                        </div>
                                        </div>:""
                                    }
                                    {
                                        smong_r6?<div className="mong_item_general">
                                        <div>
                                            <span>수리하기</span>
                                            <span></span>
                                        </div>
                                        <div className="mong_genenal_quill">
                                            <ReactQuill 
                                            onChange={handleBody7}
                                            modules={{
                                                toolbar: {
                                                    container: [
                                                        [{ header: [1,2,false]}],
                                                        ['bold', 'italic', 'underline'],
                                                        [{ color: [] }, { background: [] }],
                                                    ]
                                                }
                                            }}
                                        />
                                        </div>
                                        </div>:""
                                    }
                                    {
                                        smong_r7?<div className="mong_item_general">
                                        <div>
                                            <span>교체하기</span>
                                            <span></span>
                                        </div>
                                        <div className="mong_genenal_quill">
                                            <ReactQuill 
                                            onChange={handleBody8}
                                            modules={{
                                                toolbar: {
                                                    container: [
                                                        [{ header: [1,2,false]}],
                                                        ['bold', 'italic', 'underline'],
                                                        [{ color: [] }, { background: [] }],
                                                    ]
                                                }
                                            }}
                                        />
                                        </div>
                                        </div>:""
                                    }
                                    {
                                        smong_r8?<div className="mong_item_general">
                                        <div>
                                            <span>새 용도 찾기</span>
                                            <span></span>
                                        </div>
                                        <div className="mong_genenal_quill">
                                            <ReactQuill 
                                            onChange={handleBody9}
                                            modules={{
                                                toolbar: {
                                                    container: [
                                                        [{ header: [1,2,false]}],
                                                        ['bold', 'italic', 'underline'],
                                                        [{ color: [] }, { background: [] }],
                                                    ]
                                                }
                                            }}
                                        />
                                        </div>
                                        </div>:""
                                    }
                                    {
                                        smong_r9?<div className="mong_item_general">
                                        <div>
                                            <span>퇴비화하기</span>
                                            <span></span>
                                        </div>
                                        <div className="mong_genenal_quill">
                                            <ReactQuill 
                                            onChange={handleBody10}
                                            modules={{
                                                toolbar: {
                                                    container: [
                                                        [{ header: [1,2,false]}],
                                                        ['bold', 'italic', 'underline'],
                                                        [{ color: [] }, { background: [] }],
                                                    ]
                                                }
                                            }}
                                        />
                                        </div>
                                        </div>:""
                                    }
                                    {
                                        smong_r10?<div className="mong_item_general">
                                        <div>
                                            <span>재활용하기</span>
                                            <span></span>
                                        </div>
                                        <div className="mong_genenal_quill">
                                            <ReactQuill 
                                            onChange={handleBody11}
                                            modules={{
                                                toolbar: {
                                                    container: [
                                                        [{ header: [1,2,false]}],
                                                        ['bold', 'italic', 'underline'],
                                                        [{ color: [] }, { background: [] }],
                                                    ]
                                                }
                                            }}
                                        />
                                        </div>
                                        </div>:""
                                    }
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>feat 이루자몽*</span>
                                        <span></span>
                                    </div>
                                    <div className="mong_genenal_quill">
                                        <ReactQuill 
                                        onChange={handleBody12}
                                        modules={{
                                            toolbar: {
                                                container: [
                                                    [{ header: [1,2,false]}],
                                                    ['bold', 'italic', 'underline'],
                                                    [{ color: [] }, { background: [] }],
                                                ]
                                            }
                                        }}
                                    />
                                    </div>
                                </div>
                            </div>:""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zamong