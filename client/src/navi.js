import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"

const Navi = () => {
    const [expand,setExpand] = useState(false)
    const expandmenu = () => {
        if(expand===false){
            setExpand(true)
            document.getElementById("navi_list").style.height = "360px";
            // document.getElementById("navi_list").style.height = "287px";
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
                <Link to="/"></Link>
                <span onClick={expandmenu}><i class="xi-bars xi-x"></i></span>
            </div>
            <div className="navi_level2" id="navi_list">
                <Link onClick={close} to="/visit"><span>알-텐데</span></Link>
                <Link onClick={close} to="/rtem"><span>알-템</span></Link>
                <Link onClick={close} to="/map"><span>알-지도</span></Link>
                <Link onClick={close} to="/Board"><span>알-까</span></Link>
                <Link onClick={close} to="/project"><span>쓸떼 프로젝트</span></Link>
                <Link onClick={close} to="/about"><span>ABOUT</span></Link>
            </div>
        </div>
    )
}

export default Navi;