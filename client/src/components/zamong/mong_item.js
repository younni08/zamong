import React,{useState,useEffect} from "react";
import {getCookie} from "./../common/cookie"
import { Redirect } from "react-router-dom";
// quill
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const MongItem = () => {
    useEffect(()=>{
        
    },[])

    const [q00,setq00] = useState("")
    const [q0,setq0] = useState("")
    const [q1,setq1] = useState("")
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
    const handleBody00 = (html) => setq00(html)
    const handleBody0 = (html) => setq0(html)
    const handleBody1 = (html) => setq1(html)
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

    const [saddnewbig,setsaddnewbig] = useState(false)
    const addNewBig = () => {
        if(saddnewbig===false){
            setsaddnewbig(true)
            document.getElementById("mong_add_newbig").style.height = "67px"
        }else{
            setsaddnewbig(false)
            document.getElementById("mong_add_newbig").style.height = "0px"
        }
    }

    const [saddnewmedium,setsaddnewmedium] = useState(false)
    const addNewMedium = () => {
        if(saddnewmedium===false){
            setsaddnewmedium(true)
            document.getElementById("mong_add_newmedium").style.height = "343px"
        }else{
            setsaddnewmedium(false)
            document.getElementById("mong_add_newmedium").style.height = "0px"
        }
    }

    const [saddnewsmall,setsaddnewsmall] = useState(false)
    const addNewsmall = () => {
        if(saddnewsmall===false){
            setsaddnewsmall(true)
            document.getElementById("mong_add_newsmall").style.height = "355px"
        }else{
            setsaddnewsmall(false)
            document.getElementById("mong_add_newsmall").style.height = "0px"
        }
    }

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
    

    return (
        <div className="mong_item">
            <span>*는 필수 항목입니다.</span>
            <div>
                <div className="mong_item_general">
                    <div>
                        <span>대분류*</span>
                        <span className="addon" onClick={addNewBig}>추가하기</span>
                    </div>
                    <div>
                        <div className="mong_item_general_element">
                            <label for="dd">ㅁㅁㅁㅁㅁ</label>
                            <input type="checkbox" id="dd" />
                        </div>
                    </div>
                </div>
                <div className="mong_add_newbig" id="mong_add_newbig">
                    <div>
                        <span>이름</span>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <span>사진</span>
                        <div>
                            <input type="file" className="image" />
                        </div>
                    </div>
                </div>

                <div className="mong_item_general">
                    <div>
                        <span>중분류*</span>
                        <span className="addon" onClick={addNewMedium}>추가하기</span>
                    </div>
                    <div>
                        <div className="mong_item_general_element">
                            <label for="dd">ㅁㅁㅁㅁㅁ</label>
                            <input type="checkbox" id="dd" />
                        </div>
                        <div className="mong_item_general_element">
                            <label for="dd">ㄷㄷㄷㄷㄷ</label>
                            <input type="checkbox" id="dd" />
                        </div>
                        <div className="mong_item_general_element">
                            <label for="dd">ㄷㄷㄷㄷ</label>
                            <input type="checkbox" id="dd" />
                        </div>
                    </div>
                </div>
                <div className="mong_add_newmedium" id="mong_add_newmedium">
                    <div>
                        <div>
                            <span>이름</span>
                            <div>
                                <input type="text" />
                            </div>
                        </div>
                        <div>
                            <span>사진</span>
                            <div>
                                <input type="file" className="image" />
                            </div>
                        </div>
                    </div>
                    <div className="mong_item_general">
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
                <div className="mong_item_general">
                    <div>
                        <span>소분류*</span>
                        <span className="addon" onClick={addNewsmall}>추가하기</span>
                    </div>
                    <div>
                        <div className="mong_item_general_element">
                            <label for="dd">ㅁㅁㅁㅁㅁ</label>
                            <input type="checkbox" id="dd" />
                        </div>
                        <div className="mong_item_general_element">
                            <label for="dd">ㄷㄷㄷㄷㄷ</label>
                            <input type="checkbox" id="dd" />
                        </div>
                        <div className="mong_item_general_element">
                            <label for="dd">ㄷㄷㄷㄷ</label>
                            <input type="checkbox" id="dd" />
                        </div>
                    </div>
                </div>
                <div className="mong_add_newsmall" id="mong_add_newsmall">
                    <div>
                        <div>
                            <span>이름</span>
                            <div>
                                <input type="text" />
                            </div>
                        </div>
                        <div>
                            <span>사진</span>
                            <div>
                                <input type="file" className="image" />
                            </div>
                        </div>
                    </div>
                    <div className="mong_item_manager1">
                        <div className="mong_item_general">
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
                        <div className="mong_item_general">
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
                <div className="mong_item_manager3">
                    <div className="mong_item_general">
                        <div>
                            <span>아이템 이름*</span>
                            <span></span>
                        </div>
                        <div className="general_input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="mong_item_general">
                        <div>
                            <span>판매 사이트 주소*</span>
                            <span></span>
                        </div>
                        <div className="general_input">
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="mong_item_general">
                    <div>
                        <span>테그*</span>
                        <span>,로 분리해주세요</span>
                    </div>
                    <div className="general_input">
                        <input type="text" />
                    </div>
                </div>
                <div className="mong_item_general">
                    <div>
                        <span>자몽쌤의 한마디*</span>
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
                <div className="mong_item_general_submit">
                    <span>입력하기</span>
                </div>
            </div>
        </div>
    )
}

export default MongItem;