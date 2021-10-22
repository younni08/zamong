import React from "react";
import {Link} from "react-router-dom"

const Map_navi = () => {
    return(
        <>
            <div>
                <Link to="/map">전국</Link>
            </div>
            <div>
                <Link to="/state?s=state8">서울특별시</Link>
            </div>
            <div>
                <Link to="/state?s=state2">경기도</Link>
            </div>
            <div>
                <Link to="/state?s=state9">세종특별자치시</Link>
            </div>
            <div>
                <Link to="/state?s=state6">대구광역시</Link>
            </div>
            <div>
                <Link to="/state?s=state10">울산광역시</Link>
            </div>
            <div>
                <Link to="/state?s=state12">부산광역시</Link>
            </div>
            <div>
                <Link to="/state?s=state11">인천광역시</Link>
            </div>
            <div>
                <Link to="/state?s=state5">광주광역시</Link>
            </div>
            <div>
                <Link to="/state?s=state7">대전광역시</Link>
            </div>
            <div>
                <Link to="/state?s=state15">제주도</Link>
            </div>
            <div>
                <Link to="/state?s=state1">강원도</Link>
            </div>
            <div>
                <Link to="/state?s=state4">경상북도</Link>
            </div>
            <div>
                <Link to="/state?s=state3">경상남도</Link>
            </div>
            <div>
                <Link to="/state?s=state16">충청남도</Link>
            </div>
            <div>
                <Link to="/state?s=state17">충청북도</Link>
            </div>
            <div>
                <Link to="/state?s=state13">전라남도</Link>
            </div>
            <div>
                <Link to="/state?s=state14">전라북도</Link>
            </div>
</>
    )
}

export default Map_navi;