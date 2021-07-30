import React, { useState, useEffect } from "react";
import axios from "axios";
import {getCookie} from "./../common/cookie"
// quill
import ReactQuill,{Quill} from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Redirect } from "react-router-dom";

import ImageCompress from 'quill-image-compress';
Quill.register('modules/imageCompress', ImageCompress);


const MongArticle = () => {
    const [body,setBody] = useState("");
    const [title,setTitle] = useState("");
    const [tag,setTag] = useState("");

    const handleBody = (html) => {
        setBody(html)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleTag = (e) => {
        setTag(e.target.value)
    }

    function base64ToBlob(base64, mime){
        mime = mime || '';
        let sliceSize = 1024;
        let byteChars = window.atob(base64);
        let byteArrays = [];

        for (let offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
            let slice = byteChars.slice(offset, offset + sliceSize);

            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            let byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }
        return new Blob(byteArrays, {type: mime});
    }

    const getImgType = (string) => {
        let header = string.split(",")[0];
        let getDataStart = header.indexOf(":")
        let getDataEnd = header.indexOf(";")
        let dataType = header.substring(getDataStart+1,getDataEnd);
        return dataType;
    } 

    const cutB64 = (string) => {
        let byteString = string.split("base64,")[1];
        let stringLength = byteString.length;
        let cutString = byteString.substring(0,stringLength-2)
        return cutString
    }

    const [blockClick,setBlockClick] = useState(false)
    const handleFormSubmit = async() => {
        if(blockClick===true) return alert("잠시만 기다려주세요.")
        setBlockClick(true)
        let token = getCookie('token');
        let session = getCookie('session');
        if(token === null||session===null) return alert("로그인 후 이용해주세요.")
        const url = "/api/mong/rka_article_write";
        const formData = new FormData();
        let imgCnt = 0;
        const config = {
            headers : {
                "content-type" : "multipart/form-data"
            }
        };

        if(body.match(/<img/g)!==null){
            imgCnt = body.match(/<img/g).length
            let temphtml = body;
            let temp = ""
            let substring = "";

            for(let i=0;i<imgCnt;i++){
                if(i === 0){
                    let begin = temphtml.indexOf("<img");
                    let end = temphtml.indexOf('">');
                    substring = temphtml.substring(begin,end+2)
                    temp = temphtml.replace(substring,"#imgLocation"+i);
                }else{
                    let begin = temp.indexOf("<img");
                    let end = temp.indexOf('">');
                    substring = temp.substring(begin,end+2)
                    temp = temp.replace(substring,"#imgLocation"+i);
                }
                let byteString = cutB64(substring)
                let imagetype = getImgType(substring)
                let fontImage = base64ToBlob(byteString,imagetype);
                formData.append('image',fontImage)
                formData.append('imgCnt',imgCnt)
            }
            formData.append("title",title);
            formData.append("tag",tag);
            formData.append("content",temp);
            formData.append("token",token);
            formData.append("session",session);

            let cover = document.getElementById("mong_rtende_image");
            if(cover.files.length!==0&&cover.files.length!==undefined){
                formData.append("cover",cover.files[0])
            }
            let attached = document.getElementById("mong_rtende_file");
            if(attached.files.length!==0&&attached.files.length!==undefined){
                for(let i=0;i<attached.files.length;i++){
                    formData.append("attached",attached.files[i])
                }
            }
        }else{
            // no image
            let temphtml = body;
            formData.append("title",title);
            formData.append("tag",tag);
            formData.append("content",temphtml);
            formData.append("token",token);
            formData.append("session",session);

            let cover = document.getElementById("mong_rtende_image");
            if(cover.files.length!==0&&cover.files.length!==undefined){
                formData.append("cover",cover.files[0])
            }
            let attached = document.getElementById("mong_rtende_file");
            if(attached.files.length!==0&&attached.files.length!==undefined){
                for(let i=0;i<attached.files.length;i++){
                    formData.append("attached",attached.files[i])
                }
            }
        }
        // for (let p of formData){
        //     console.log(p);
        // }
        let res = await axios.post(url, formData, config);
        console.log(res.data)
        setBlockClick(false)
        if(res.data==="success") return alert("등록되었습니다.")
        if(res.data!=="success") return alert("잘못된 경로입니다.")
    }

    return (
        <div className="mong_item">
            <span>*는 필수 항목입니다.</span>
            <div>
                <div className="mong_item_manager3">
                    <div className="mong_item_general">
                        <div>
                            <span>제목*</span>
                            <span></span>
                        </div>
                        <div className="general_input">
                            <input type="text" onChange={handleTitle} />
                        </div>
                    </div>
                    <div className="mong_item_general">
                        <div>
                            <span>커버 이미지*</span>
                            <span></span>
                        </div>
                        <div className="general_input">
                            <input type="file" className="image" id="mong_rtende_image" />
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
                            <input type="text" onChange={handleTag} />
                        </div>
                    </div>
                    <div className="mong_item_general">
                        <div>
                            <span>첨부파일</span>
                            <span></span>
                        </div>
                        <div className="general_input">
                            <input type="file" multiple className="image" id="mong_rtende_file" />
                        </div>
                    </div>
                </div>
                <div className="mong_write_article">
                    <ReactQuill 
                        onChange={handleBody}
                        modules={{
                            toolbar: {
                                container: [
                                    [{ header: [1,2,false]}],
                                    ['bold', 'italic', 'underline'],
                                    [{ color: [] }, { background: [] }],
                                    [{ list: 'ordered' }, { list: 'bullet' }],
                                    ['blockquote', 'image']
                                ]
                            },
                            imageCompress: {
                                quality: 0.7, // default
                                maxWidth: 1000, // default
                                maxHeight: 1000, // default
                                imageType: 'image/jpeg', // default
                                debug: true, // default
                            }
                        }}
                    />
                </div>
                <div className="mong_item_general_submit">
                    <span onClick={handleFormSubmit}>입력하기</span>
                </div>
            </div>
        </div>
    )
}
export default MongArticle;