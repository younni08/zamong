import React,{ useEffect, useMemo,useState } from "react";
import parser from "html-react-parser"
import axios from "axios"

const Item_Element = (props) => {
    const [sample,setSample] = useState("")
    const [defaultImage,setDefaultImage] = useState(true)
    const [match,setMatch] = useState(false)

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
    
    const goto = () => {
        window.location.href="https://"+props.rtem_address;
    }

    useMemo(()=>{
        if(props.rtem_t4_key===undefined) return 0
        if(props.rtem_t4_key==="default") return setDefaultImage(true)
        getimage(props.rtem_t4_key,props.rtem_t4_type)
    },[props.rtem_t4_key])
    
    
    return (
        <div className="item_ex_level4_element" onClick={goto}>
            <div>
                {
                    defaultImage?"":parser(sample)
                }
            </div>
            <span>{props.rtem_t4_name}</span>
        </div>
    )
}

export default Item_Element