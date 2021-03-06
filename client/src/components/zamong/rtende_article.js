import React,{useEffect, useState} from "react";
import axios from "axios";
import {getCookie} from "./../common/cookie"
// quill
import ReactQuill,{Quill} from "react-quill";
import 'react-quill/dist/quill.snow.css';
import MongSidenavi from "./mong_sidenavi";

import ImageCompress from 'quill-image-compress';
Quill.register('modules/imageCompress', ImageCompress);



const Zamong = () => {
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

    const checkCate = () => {
        let string = ""
        if(document.getElementById("mong_rtende1").checked===true){string = string + "rtende,"}
        if(document.getElementById("mong_rtende2").checked===true){string = string + "rtem,"}
        if(document.getElementById("mong_rtende3").checked===true){string = string + "rka,"}
        if(document.getElementById("mong_rtende4").checked===true){string = string + "rmap,"}
        if(document.getElementById("mong_rtende5").checked===true){string = string + "docu,"}
        return string
    }

    const [blockClick,setBlockClick] = useState(false)
    const handleFormSubmit = async() => {
        if(blockClick===true) return alert("????????? ??????????????????.")
        setBlockClick(true)
        let token = getCookie('token');
        let session = getCookie('session');
        if(token === null||session===null) return alert("????????? ??? ??????????????????.")
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
            let cate = checkCate()
            formData.append("cate",cate);

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
            let cate = checkCate()
            formData.append("cate",cate);

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
        if(res.data==="success") return alert("?????????????????????.")
        if(res.data!=="success") return alert("????????? ???????????????.")
    }


    return (
        <div className="mong">
            <MongSidenavi />
            <div className="mong_body">
                <div>
                    <div className="mong_item">
                        <span>*??? ?????? ???????????????.</span>
                        <div>
                            <div className="mong_item_manager3">
                                <div className="mong_item_general">
                                    <div>
                                        <span>??????*</span>
                                        <span></span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handleTitle} />
                                    </div>
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>?????? ?????????*</span>
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
                                        <span>??????*</span>
                                        <span>,??? ??????????????????</span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handleTag} />
                                    </div>
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>????????????</span>
                                        <span></span>
                                    </div>
                                    <div className="general_input">
                                        <input type="file" multiple className="image" id="mong_rtende_file" />
                                    </div>
                                </div>
                            </div>
                            <div className="mong_item_general">
                                <div>
                                    <span>????????????*</span>
                                    <span></span>
                                </div>
                                <div>
                                    <div className="mong_item_general_element">
                                        <label for="mong_rtende1">???-?????? ?????????</label>
                                        <input type="checkbox" id="mong_rtende1" />
                                    </div>
                                    <div className="mong_item_general_element">
                                        <label for="mong_rtende2">???-??? ?????????</label>
                                        <input type="checkbox" id="mong_rtende2" />
                                    </div>
                                    <div className="mong_item_general_element">
                                        <label for="mong_rtende3">???-???</label>
                                        <input type="checkbox" id="mong_rtende3" />
                                    </div>
                                    <div className="mong_item_general_element">
                                        <label for="mong_rtende4">???-?????? ??????</label>
                                        <input type="checkbox" id="mong_rtende4" />
                                    </div>
                                    <div className="mong_item_general_element">
                                        <label for="mong_rtende5">??????</label>
                                        <input type="checkbox" id="mong_rtende5" />
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
                                <span onClick={handleFormSubmit}>????????????</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zamong