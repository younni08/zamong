import React,{useState, useMemo} from "react";
import axios from "axios"
import {Link} from "react-router-dom";
import parser from "html-react-parser"

const ShopListElement = (props) => {
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
        if(props.shop_cover_key===undefined) return 0
        if(props.shop_cover_key==="default") return 0
        getimage(props.shop_cover_key,props.shop_cover_type)
    },[props.shop_cover_key])
    return (
        <Link to={"/shop?s="+props.shop_pk} className="map_main_list_element">
            <div>
                {
                    sample?parser(sample):""
                }
            </div>
            <div>
                <div>
                    <span>{props.title}</span>
                </div>
                <span>{props.oneline}</span>
                <span>{props.shop_address}</span>
            </div>
        </Link>
    )
}

export default ShopListElement;