import React,{useState,useMemo} from "react";
import {Link} from "react-router-dom";
import axios from "axios"
import parser from "html-react-parser"

const RtemZamongPick = (props) => {
    const [sample,setSample] = useState("")

    const getimage = async(key,type) => {
        if(key===undefined||key===null||key===""||key==="default") return false
        let url = "/api/mong/singleimage"
        let params = {
            key:key
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config);
        if(res.data!=="fail"&&res.data!=="no key"){
            let ttt = '<img src="data:'+type.replace("#",'').replace(",",'')+';base64,'+ res.data + '">'
            return setSample(ttt)
        }
    }
    
    useMemo(()=>{
        if(props.rtem_t4_key===undefined) return 0
        getimage(props.rtem_t4_key,props.rtem_t4_type)
    },[props.rtem_t4_key])

    return (
        <Link to={"/items?c="+props.rtem_t4_pk}>
            {
                sample?parser(sample):""
            }
        </Link>
    )
}

export default RtemZamongPick