import React,{useEffect, useState} from "react";
import {Redirect,Link} from "react-router-dom"
import { getCookie,deleteCookie } from "../common/cookie";

const MongSidenavi = () => {
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
            <Link to="/rtem_recom">
                <span className="mong_rtem">알-템</span>
                <span>추천 아이템</span>
            </Link>
            <Link to="/rtende_article">
                <span className="mong_rka">알-까</span>
                <span>게시글 작성</span>
            </Link>
            <Link to="/rtende_articlelist">
                <span className="mong_rka">알-까</span>
                <span>게시글 관리</span>
            </Link>
            <Link to="/rtem_shopregistry">
                <span className="mong_shop">상-점</span>
                <span>상점 등록</span>
            </Link>
            {
                redirect?<Redirect to="/login" />:""
            }
        </div>
    )
}

export default MongSidenavi;