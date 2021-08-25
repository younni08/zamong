import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import Item from "./rtem_item"

const Rtem = () => {
    const [list,setList] = useState([])
    useEffect(()=>{
        init()
    },[])

    const init = async() => {
        let url = "/api/mong/rteminit";
        let params = {
            key:"randomkey"
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        setList(res.data.list)
    }

    // page 넘기는거 만들어야함

    return (
        <div className="rtem">
            <div>
                <div>
                    <span>알-템</span>
                    <span><i className="xi-caret-down-min"></i></span>
                </div>
                <div className="rtem_main">
                    <div className="rtem_level1">   
                        <input type="text" placeholder="예) 대나무 칫솔" />
                        <span><i className="xi-search"></i></span>
                    </div>
                    <div className="rtem_level2">
                        <div>
                            <div className="on">
                                <img src="./pics/rtem-banner1.png" alt="banner1" />
                            </div>
                            <div>
                                <img src="./pics/rtem-banner2.png" alt="banner2" />
                            </div>
                        </div>
                        <div>
                            <span className="on"></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="rtem_level3">
                        <span>이루자몽 PICK</span>
                        <div>
                            <Link to="/items?c=부엌">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                            <Link to="/items?c=부엌">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
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
                </div>
            </div>
        </div>
    )
}

export default Rtem;