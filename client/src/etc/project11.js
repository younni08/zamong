import axios from "axios";
import Parser from "html-react-parser";
import React, { useMemo, useState } from "react";

const Project11 = (props) => {
    const [sample,setSample] = useState("")

    const goto = () => {
        window.location.href="https://"+props.shop_address;
    }

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
        if(props.shop_cover_key===undefined) return 0
        getimage(props.shop_cover_key,props.shop_cover_type)
    },[props.shop_cover_key])

    return (
    <div className="project_11">
        {
            sample?Parser(sample):""
        }
        <span onClick={goto}>구매하기</span>
    </div>
    )
}

export default Project11;