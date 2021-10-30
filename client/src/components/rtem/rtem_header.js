import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,Redirect } from "react-router-dom";

const RtemHeader = (props) => {
    const [input,setInput] = useState("")
    const [redirect,setRedirect] = useState(false)
    const [expand,setExpand] = useState(false)
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const goSearch = () => {
        setRedirect(true)
    }
    
    const handleExpand = () => {
        if(expand===false){
            setExpand(true)
            document.getElementById("rtem_expand").style.height="540px"
        }else{
            setExpand(false)
            document.getElementById("rtem_expand").style.height="0px"
        }
    }

    const [list,setList] = useState([])
    const init = async() => {
        let url ="/api/mong/rtemnaviinit";
        let params = {

        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config);
        console.log(res.data.list)
        setList(res.data.list)
    }

    useEffect(()=>{
        init()
    },[])
    
    return (
        <>
            <div className="rtem_level0">
                <span>알-템</span>
                <span onClick={handleExpand}><i className="xi-caret-down-min"></i></span>
            </div>
            <form className="rtem_level1">
                <input type="text" placeholder="예) 대나무 칫솔" onChange={handleInput} />
                <button onClick={goSearch}><i className="xi-search"></i></button>
            </form>
            {
                redirect?<Redirect to={"/rtem_search?q="+input} />:""
            }
            <div className="rtem_level01" id="rtem_expand">
                {
                    list?list.map(c=>{
                        return (
                            <Link key={c.rtem_t1_pk} to={"rtemlist?t1="+c.rtem_t1_pk}>
                                <span>{c.rtem_t1_name}</span>
                            </Link>
                        )
                    }):""
                }
            </div>
        </>
    )
}

export default RtemHeader;