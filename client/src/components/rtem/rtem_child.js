import React,{ useMemo,useState } from "react";
import parser from "html-react-parser"
import axios from "axios"

const RtemChild = (props) => {
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
        if(props.rtem_t2_key===undefined) return 0
        if(props.rtem_t2_key==="default") return setDefaultImage(true)
        getimage(props.rtem_t2_key,props.rtem_t2_type)
    },[props.rtem_t2_key])

    return (
        <>
            {
                defaultImage?<img src="./pics/test.png" alt="text" />:parser(sample)
            }
        </>
    )
}

export default RtemChild;