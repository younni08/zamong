import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import Item from "./rtem_item"
import RtemPick from "./rtem_pick";
import RtemZamongPick from "./rtem_zamong_pick";
import RtemHeader from "./rtem_header";

const Rtem = () => {
    const [list,setList] = useState([])
    const [pick,setPick] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        init()
    },[])

    const init = async() => {
        setLoading(false)
        let url = "/api/mong/rteminit";
        let params = {
            key:"randomkey",
            shortcut:shortcut
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        if(res.data==="fail"){
            setShortCut("")
            setShortMode(false)
            window.location.reload();
        }
        console.log(res.data)
        setList(res.data.list)
        setPick(res.data.pick)
        if(res.data.shortcut===true) setShortMode(true)
        setLoading(true)
    }

    // page 넘기는거 만들어야함
    const [shortcut,setShortCut] = useState("")
    const [shortmode,setShortMode] = useState(false)
    const [searchResult,setSearchResult] = useState([])

    useEffect(()=>{
        if(shortcut==="") return 0
        init()
    },[shortcut])

    return (
        <div className="rtem">
            <div>
                <RtemHeader 
                    getShortcut={setShortCut}
                    getRtemResult={setSearchResult}
                />
                {
                    loading?shortmode?
                    <div className="rtem_main">
                        <span>검색 결과</span>

                    </div>:
                    <div className="rtem_main">
                        <RtemPick />
                        <div className="rtem_level3">
                            <span>이루자몽 PICK</span>
                            <div>
                                {
                                    pick?pick.map(c=>{
                                        console.log(c)
                                        return(
                                            <RtemZamongPick 
                                                key={c.rtem_t4_pk}
                                                rtem_t4_pk={c.rtem_t4_pk}
                                                rtem_t2_pk={c.rtem_t2_pk}
                                                rtem_t3_pk={c.rtem_t3_pk}
                                                rtem_t4_key={c.rtem_t4_key}
                                                rtem_t4_type={c.rtem_t4_type}
                                            />
                                        )
                                    }):""
                                }
                            </div>
                        </div>
                        {
                            list?list.map((c,index)=>{
                                return(
                                    <Item 
                                        key={"rtem"+index}
                                        data={c}
                                    />
                                )
                            }):""
                        }
                    </div>:<span>...</span>
                }
            </div>
        </div>
    )
}

export default Rtem;