import React,{useState,useMemo} from "react";
import axios from "axios"
import parser from "html-react-parser"
import { getCookie } from "../common/cookie";

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

    const addPick = async() => {
        let url = "/api/mong/mong_rtem_add_pick";
        let token = getCookie("token")
        let session = getCookie("session")
        let params = {
            token:token,
            session:session,
            rtem_pk:props.rtem_pk
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        console.log(params)
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data==="fail") return alert("잘못된 경로입니다.")
        if(res.data==="success") return alert("자몽픽으로 변경되었습니다.")
    }

    const deleteRtem = async() => {
        let url = "/api/mong/mong_rtem_delete";
        let token = getCookie("token")
        let session = getCookie("session")
        let params = {
            token:token,
            session:session,
            rtem_pk:props.rtem_pk
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data==="fail") return alert("잘못된 경로입니다.")
        if(res.data==="success") return alert("삭제되었습니다.")
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
                <span>{pick?"자몽 Pick":""}</span>
            </div>
            <div>
                <span onClick={addPick}>pick</span>
                <span onClick={deleteRtem}>삭제</span>
            </div>
        </div>
    )
}

export default RtemRecomItem