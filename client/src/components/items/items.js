import React, { useEffect, useState } from "react";
import Itembox from "./itembox"
import {Link} from "react-router-dom"
import axios from "axios";
import RtemPick from "../rtem/rtem_pick";

const Item = (props) => {
    const [cate,setCate] = useState("생활용품")
    const [list,setList] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        init();
    },[props])

    const init = async() => {
        setLoading(false)
        let getCate = window.location.href
        getCate = getCate.split("items?c=")[1]
        getCate = decodeURI(getCate)
        setCate(getCate)
        console.log(getCate)
        let url = "/api/mong/itemsinit";
        let params = {
            item:getCate
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data==="fail") return alert("잘못된 접근입니다.")
        setList(res.data)
        setLoading(true)
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
                <RtemPick />
                {
                    loading?
                    <div className="item_main">
                        <div>
                            <span>알-템 <i className="xi-angle-right-min"></i> {cate}</span>
                            <select>
                                <option>업로드순</option>
                            </select>
                        </div>
                        <div>
                            {
                                list?list.map(c=>{
                                    return(
                                        <Link to={"/item?c="+c.rtem_t2_pk} key={c.rtem_t2_pk} className="itembox">
                                            <Itembox 
                                                rtem_t2_key={c.rtem_t2_key}
                                                rtem_t2_type={c.rtem_t2_type}
                                            />
                                        </Link>
                                    )
                                }):""
                            }
                        </div>
                    </div>:<span>Loading...</span>
                }
                
            </div>
        </div>
    )
}

export default Item