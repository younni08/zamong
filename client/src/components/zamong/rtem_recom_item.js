import React,{useState,useMemo} from "react";
import axios from "axios"
import parser from "html-react-parser"

const RtemRecomItem = (props) => {
    const [sample,setSample] = useState("")
    const [pick,setPick] = useState(false)
    const getImage = async(key,type) => {
        if(key===undefined) return 0
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
        if(res.data!=="fail"){
            let ttt = '<img src="data:'+type.replace("#",'').replace(",",'')+';base64,'+ res.data + '">'
            setSample(ttt)
        }
    }

    useMemo(()=>{
        if(props.rtem_t4_key===undefined) return 0
        getImage(props.rtem_t4_key,props.rtem_t4_type)
        if(props.rtem_t4_zamong_pick===true) return setPick(true)
    },[props.rtem_t4_key])

    const addPick = () => {
        let url = "/api/mong/mong_rtem_add_pick"
    }

    return (
        <div className="mong_rtem_recom_item">
            <div>
                {
                    sample?parser(sample):<span>없음</span>
                }

            </div>
            <div>
                <span>{props.rtem_t4_name}</span>
                <span>{pick?"자몽픽":"aa"}</span>
            </div>
            <div>
                <span>pick</span>
                <span>삭제</span>
            </div>
        </div>
    )
}

export default RtemRecomItem