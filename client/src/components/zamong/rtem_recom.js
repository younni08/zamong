import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie } from "../common/cookie";
import MongSidenavi from "./mong_sidenavi";
import RtemRecomItem from "./rtem_recom_item";

const Rtem_recom = () => {
    const [list,setList] = useState([])

    const init = async() => {
        let url = "/api/mong/mong_rtem_recon";
        let token = getCookie("token")
        let session = getCookie("session")
        let params = {
            token:token,
            session:session
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        if(res.data==="fail") return alert("잘못된 접근입니다.")
        setList(res.data.rtem4)
        console.log(res.data)
    }
    
    useEffect(()=>{
        init();
    },[])
    return (
        <div className="mong">
            <MongSidenavi />
            <div className="mong_body">
                <div>
                    <div className="mong_rtem_recom">
                        {
                            list?list.map(c=>{
                                console.log(c)
                                return(
                                    <RtemRecomItem 
                                        key={c.rtem_t4_pk}
                                        rtem_pk={c.rtem_t4_pk}
                                        rtem_t4_name={c.rtem_t4_name}
                                        rtem_t4_zamong_pick={c.rtem_t4_zamong_pick}
                                        rtem_t4_key={c.rtem_t4_key}
                                        rtem_t4_type={c.rtem_t4_type}
                                    />
                                )
                            }):""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rtem_recom