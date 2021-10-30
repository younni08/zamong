import React,{ useEffect, useMemo,useState } from "react";
import parser from "html-react-parser"
import axios from "axios"
import {Link} from "react-router-dom"

const Item_Element = (props) => {
    const [sample,setSample] = useState("")
    const [defaultImage,setDefaultImage] = useState(true)

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
            setDefaultImage(false)
            return setSample(ttt)
        }else{
            return setDefaultImage(true)
        }
    }
    
    useMemo(()=>{
        if(props.rka_cover_key===undefined) return 0
        if(props.rka_cover_key==="default") return setDefaultImage(true)
        getimage(props.rka_cover_key,props.rka_cover_type)
    },[props.rka_cover_key])
    
    return (
        <Link className="item_ex_level9_element" to={"article?a="+props.rka_pk}>
            <div>
                {
                    defaultImage?"":parser(sample)
                }
            </div>
            <span>{props.rka_title}</span>
        </Link>
    )
}

export default Item_Element