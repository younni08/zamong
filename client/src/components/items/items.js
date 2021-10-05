import React, { useEffect, useState } from "react";
import Itembox from "./itembox"
import {Link} from "react-router-dom"
import axios from "axios";
import RtemPick from "../rtem/rtem_pick";
import RtemHeader from "../rtem/rtem_header";

const Item = (props) => {
    const [cate,setCate] = useState("생활용품")
    const [list,setList] = useState([])
    const [loading,setLoading] = useState(false)
    const [align,setAlign] = useState("recent")

    const handleSelect = () => {
        let getalign = document.getElementById("items_select").value;
        setAlign(getalign)
    }

    useEffect(()=>{
        init();
    },[props,align])

    const init = async() => {
        setLoading(false)
        let getCate = window.location.href
        getCate = getCate.split("items?c=")[1]
        getCate = decodeURI(getCate)
        setCate(getCate)
        let url = "/api/mong/itemsinit";
        let params = {
            item:getCate,
            align:align
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
                <RtemHeader />
                <RtemPick />
                {
                    loading?
                    <div className="item_main">
                        <div>
                            <span>알-템 <i className="xi-angle-right-min"></i> {cate}</span>
                            <select onChange={handleSelect} id="items_select">
                                <option value="recent">최신순</option>
                                <option value="pop">인기순</option>
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