import React,{useState} from "react";
import MongItem from "./mong_item";

const Zamong = () => {
    return (
        <div className="mong">
            <div className="mong_sidenavi">
                <div>
                    <span>아이템 추가</span>
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