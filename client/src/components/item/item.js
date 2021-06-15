import React from "react";
import Itembox from "./itembox"

const Item = () => {
    return (
        <div className="item">
            <div>
                <span>아이템 헤더</span>
                <div className="item_main">
                    <Itembox />
                    <Itembox />
                    <Itembox />
                    <Itembox />
                </div>
            </div>
        </div>
    )
}

export default Item