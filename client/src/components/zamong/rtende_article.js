import React,{useEffect, useState} from "react";
import MongItem from "./mong_article";
import {Redirect,Link} from "react-router-dom"
import { getCookie,deleteCookie } from "../common/cookie";

const Zamong = () => {
    const [redirect,setRedirect] = useState(false)

    useEffect(()=>{
        init();
    },[])

    const init = () => {
        let token = getCookie("token")
        let session = getCookie("session")
        if(token===null||session===null){
            alert("로그인 후 이용해주세요.")
            return setRedirect(true)
        }
    }

    const logout = () => {
        deleteCookie("token")
        deleteCookie("session")
        alert("로그아웃 되었습니다.")
        return setRedirect(true)
    }

    return (
        <div className="mong">
            <div className="mong_sidenavi">
                <div onClick={logout}>
                    <span className="out">중-요</span>
                    <span>로그아웃</span>
                </div>
                <Link to="/rtem_cate">
                    <span className="mong_rtem">알-템</span>
                    <span>분류 추가</span>
                </Link>
                <Link to="/rtem_item">
                    <span className="mong_rtem">알-템</span>
                    <span>아이템 추가</span>
                </Link>
                <Link to="/rtende_article">
                    <span className="mong_rka">알-까</span>
                    <span>게시글 작성</span>
                </Link>
                {
                    redirect?<Redirect to="/login" />:""
                }
            </div>
            <div className="mong_body">
                <div>
                    <MongItem />
                </div>
            </div>
        </div>
    )
}

export default Zamong