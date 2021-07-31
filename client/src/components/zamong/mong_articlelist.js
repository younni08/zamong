import React,{useEffect,useState} from "react";
import axios from "axios";

const MongPick = () => {
    const [page,setPage] = useState(1)
    const [list,setList] = useState([])
    useEffect(()=>{
        init();
    },[])

    useEffect(()=>{
        init();
    },[page])

    const init = async() => {
        let url = "/api/mong/getArticles";
        let params = {
            page:page
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        if(res.data==="fail") return alert("잘못된 접근입니다.")
        if(page===1){
            setList(res.data.list)
        }else{
            setList(p => [...p,...res.data.list])
        }
    }

    return (
        <div className="mong_article_pick">
            <div>
                <span>게시글 관리</span>
                <div>
                    {
                        list?list.map(c=>{
                            let temp = "알-템"
                            if(c.rka_cate!==null&&c.rka_cate.split(",")!==undefined){
                                if(c.rka_cate.split(",")[0]==="rtende"){
                                    temp="알-텐데"
                                }
                                if(c.rka_cate.split(",")[0]==="rtem"){
                                    temp="알-템"
                                }
                                if(c.rka_cate.split(",")[0]==="rka"){
                                    temp="알-까"
                                }
                                if(c.rka_cate.split(",")[0]==="rmap"){
                                    temp="지-도"
                                }
                                if(c.rka_cate.split(",")[0]==="docu"){
                                    temp="자-료"
                                }
                            }
                            return(
                                <div key={c.rka_pk} className="mong_article_picl_element">
                                    <div>
                                        <span>[{temp}]</span>
                                        <span>{c.rka_title}</span>
                                    </div>
                                    <div>
                                        <span>자몽 픽</span>
                                        <span>삭제</span>
                                    </div>
                                </div>
                            )
                        }):""
                    }
                </div>
            </div>
        </div>
    )
}

export default MongPick