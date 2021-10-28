import axios from "axios";
import React, { useEffect, useState } from "react";
import Project11 from "./project11";
import Project12 from "./project12";
import Project21 from "./project21";
import Project22 from "./project22";

const Sste = () => {
    const [list,setList] = useState([])
    const init = async() => {
        let url = "/api/mong/projectinit";
        let params = {

        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data!=="fail") return setList(res.data)
    }
    useEffect(()=>{
        init()
    },[])

    return (
        <div className="project">
            <div>
                <span>쓸-떼</span>
                <div className="project_main">
                    {
                        list?list.map(c=>{
                            if(c.cover_ratio==="22"){
                                return (
                                    <Project22 
                                        title={c.title}
                                        shop_cover_key={c.shop_cover_key}
                                        shop_cover_type={c.shop_cover_type}
                                        shop_address={c.shop_address}
                                        key={c.shop_cover_key}
                                    />
                                )
                            }
                            if(c.cover_ratio==="12"){
                                return (
                                    <Project12 
                                        title={c.title}
                                        shop_cover_key={c.shop_cover_key}
                                        shop_cover_type={c.shop_cover_type}
                                        shop_address={c.shop_address}
                                        key={c.shop_cover_key}
                                    />
                                )
                            }
                            if(c.cover_ratio==="21"){
                                return (
                                    <Project21
                                        title={c.title}
                                        shop_cover_key={c.shop_cover_key}
                                        shop_cover_type={c.shop_cover_type}
                                        shop_address={c.shop_address}
                                        key={c.shop_cover_key}
                                    />
                                )
                            }
                            if(c.cover_ratio==="11"){
                                return (
                                    <Project11
                                        title={c.title}
                                        shop_cover_key={c.shop_cover_key}
                                        shop_cover_type={c.shop_cover_type}
                                        shop_address={c.shop_address}
                                        key={c.shop_cover_key}
                                    />
                                )
                            }
                        }):""
                    }
                </div>
            </div>
        </div>
    )
}

export default Sste;