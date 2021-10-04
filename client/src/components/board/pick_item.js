import React,{useState,useMemo} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import parser from "html-react-parser"

const PickItem = (props) => {
    const [sample,setSample] = useState("")
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
        if(props.rka_cover_key===undefined) return 0
        getImage(props.rka_cover_key,props.rka_cover_type)
    },[props.rka_cover_key])

    return (
        <div className="board_pick_item">
            <Link to={"/article?a="+props.rka_pk}>
                <div>
                    {
                        parser(sample)
                    }
                </div>
                <span>[{props.rka_cate}] {props.rka_title}</span>
            </Link>:
        </div>
    )
}

export default PickItem