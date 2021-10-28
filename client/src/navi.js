import React, { useState } from "react"
import {Link} from "react-router-dom"

const Navi = () => {
    const [expand,setExpand] = useState(false)
    const expandmenu = () => {
        if(expand===false){
            setExpand(true)
            if(window.innerWidth>1260){
                document.getElementById("navi_list").style.height = "auto";
            }else{
                document.getElementById("navi_list").style.height = "360px";
            }
            
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
            <div>
                <div className="navi_level1">
                    <Link to="/">
                        <img src="./pics/rtende.svg" alt="logo" />
                    </Link>
                    <span onClick={expandmenu}><i className="xi-bars xi-x"></i></span>
                </div>
                <div className="navi_level2" id="navi_list">
                    <Link onClick={close} to="/rtende"><span>알-텐데</span></Link>
                    <Link onClick={close} to="/rtem"><span>알-템</span></Link>
                    <Link onClick={close} to="/map"><span>알-지도</span></Link>
                    <Link onClick={close} to="/Board"><span>알-까</span></Link>
                    <Link onClick={close} to="/project"><span>쓸떼 프로젝트</span></Link>
                    <Link onClick={close} to="/about"><span>ABOUT</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Navi;