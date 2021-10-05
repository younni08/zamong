import axios from "axios";
import React, { useState } from "react";

const RtemHeader = (props) => {
    const [input,setInput] = useState("")
    const [expand,setExpand] = useState(false)
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const goSearch = async() => {
        let url = "/api/mong/searchrtem";
        let params = {
            input:input
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        console.log(params)
        let res = await axios.post(url,params,config)
        props.getRtemResult(res.data)
        console.log(res.data)
    }

    const handleExpand = () => {
        if(expand===false){
            setExpand(true)
            document.getElementById("rtem_expand").style.height="540px"
        }else{
            setExpand(false)
            document.getElementById("rtem_expand").style.height="0px"
        }
    }

    const handlecate = (e) => {
        let temp = document.getElementById(e.currentTarget.getAttribute("id")).innerHTML
        temp = temp.split("<span>")[1].split("</span>")[0]
        props.getShortcut(temp)
    }

    return (
        <>
            <div className="rtem_level0">
                <span>알-템</span>
                <span onClick={handleExpand}><i className="xi-caret-down-min"></i></span>
            </div>
            <form className="rtem_level1">
                <input type="text" placeholder="예) 대나무 칫솔" onChange={handleInput} />
                <button onClick={goSearch}><i className="xi-search"></i></button>
            </form>
            <div className="rtem_level01" id="rtem_expand">
                <div onClick={handlecate} id="rtem_header_navi1">
                    <span>생활/가정</span>
                </div>
                <div onClick={handlecate} id="rtem_header_navi2">
                    <span>욕실/화장실</span>
                </div>
                <div onClick={handlecate} id="rtem_header_navi3">
                    <span>부엌</span>
                </div>
                <div onClick={handlecate} id="rtem_header_navi4">
                    <span>여행/캠핑</span>
                </div>
                <div onClick={handlecate} id="rtem_header_navi5">
                    <span>사무/도서</span>
                </div>
                <div onClick={handlecate} id="rtem_header_navi6">
                    <span>반려 동식물</span>
                </div>
                <div onClick={handlecate} id="rtem_header_navi7">
                    <span>여성/유아</span>
                </div>
                <div onClick={handlecate} id="rtem_header_navi8">
                    <span>비건</span>
                </div>
                <div onClick={handlecate} id="rtem_header_navi9">
                    <span>미용/화장품</span>
                </div>
                <div onClick={handlecate} id="rtem_header_navi10">
                    <span>인테리어/포장</span>
                </div>
            </div>
        </>
    )
}

export default RtemHeader;