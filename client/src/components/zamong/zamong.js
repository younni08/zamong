import React,{useState} from "react";
import MongItem from "./mong_item";

const Zamong = () => {
    return (
        <div className="mong">
            <div className="mong_sidenavi">
                <div>
                    <span className="mong_rtem">알-템</span>
                    <span>아이템 추가</span>
                </div>
                <div>
                    <span className="mong_rka">알-까</span>
                    <span>게시글 작성</span>
                </div>
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