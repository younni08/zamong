import React, { useEffect, useState } from "react";
import Itembox from "./itembox"
import {Link} from "react-router-dom"
import axios from "axios";

const Item = (props) => {
    const [cate,setCate] = useState("생활용품")

    useEffect(()=>{
        init();
    },[props])

    const init = async() => {
        let getCate = window.location.href
        getCate = getCate.split("items?c=")[1]
        getCate = decodeURI(getCate)
        setCate(getCate)
        console.log(getCate)
        let url = "/api/mong/getcate";
        let params = {
            item:getCate
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params.config)
    }

    return (
        <div className="item">
            <div>
                <div>
                    <span>알-템</span>
                    <span><i className="xi-caret-down-min"></i></span>
                </div>
                <div className="rtem_level1">
                    <input type="text" placeholder="예) 대나무 칫솔" />
                    <span><i className="xi-search"></i></span>
                </div>
                <div className="rtem_level2">
                    <div>
                        <span>광고 배너</span>
                    </div>
                    <div>
                        <span className="on"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="item_main">
                    <div>
                        <span>알-템 - {cate}</span>
                        <select>
                            <option>업로드순</option>
                        </select>
                    </div>
                    <div>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Link to="/item" className="itembox">
                            <div>
                                <img src="./pics/test.png" alt="test" />
                            </div>
                        </Link>
                        <Itembox />
                        <Itembox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item