import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"

const Navi = () => {
    const [expand,setExpand] = useState(false)
    const expandmenu = () => {
        if(expand===false){
            setExpand(true)
            document.getElementById("navi_list").style.height = "287px";
        }else{
            setExpand(false)
            document.getElementById("navi_list").style.height = "0px";
        }
    }

    const close = () => {
        setExpand(false)
        document.getElementById("navi_list").style.height = "0px";
    }

    return (
        <div className="navi">
            <div className="navi_level1">
                <Link to="/">이루자몽</Link>
                <span onClick={expandmenu}>ㅁ</span>
            </div>
            <div className="navi_level2" id="navi_list">
                <Link onClick={close} to="/visit"><span>방문</span><span>map</span></Link>
                <Link onClick={close} to="/buy"><span>구매</span><span>item</span></Link>
                <Link onClick={close} to="/togather"><span>함께</span><span>company</span></Link>
                <Link onClick={close} to="/think"><span>생각</span><span>infomation</span></Link>
                <Link onClick={close} to="/talk"><span>교류</span><span>workshop</span></Link>
                <Link onClick={close} to="/about"><span>about</span><span>이루자몽</span></Link>
                <Link onClick={close} to="/hope"><span>희망</span><span></span></Link>
            </div>
        </div>
    )
}

export default Navi;