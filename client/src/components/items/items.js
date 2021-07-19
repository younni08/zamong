import React from "react";
import Itembox from "./itembox"
import {Link} from "react-router-dom"

const Item = () => {
    return (
        <div className="item">
            <div>
                <div>
                    <span>알-템</span>
                    <span><i className="xi-caret-down-min"></i></span>
                </div>
                <div className="item_main">
                    <Link to="/item" className="itembox">
                        <div>
                            <img src="./pics/test.png" alt="test" />
                        </div>
                    </Link>
                    <Itembox />
                    <Itembox />
                    <Itembox />
                    <Itembox />
                    <Itembox />
                    <Itembox />
                    <Itembox />
                    <Itembox />
                    <Itembox />
                    <Itembox />
                    <Itembox />
                    <Itembox />
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