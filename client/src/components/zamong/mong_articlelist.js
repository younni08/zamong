import React,{useEffect,useState} from "react";
import axios from "axios";
import {getCookie} from "./../common/cookie"

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

    const handlePick = async(e) => {
        let url = "/api/mong/rka_addpick"
        let token = getCookie("token")
        let session = getCookie("session")
        let pk = e.currentTarget.getAttribute("id").split("pick")[0]
        let params = {
            token:token,
            session:session,
            pk:pk
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data==="success") return alert("변경되었습니다.")
        if(res.data!=="success") return alert("잘못된 접근입니다.")

    }

    const handleDelete = async(e) => {
        let url = "/api/mong/rka_delete"
        let token = getCookie("token")
        let session = getCookie("session")
        let pk = e.currentTarget.getAttribute("id").split("delete")[0]
        let params = {
            token:token,
            session:session,
            pk:pk
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data==="success") return alert("삭제되었습니다.")
        if(res.data!=="success") return alert("잘못된 접근입니다.")
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
                                        <span  id={c.rka_pk+"pick"} onClick={handlePick}>자몽 픽</span>
                                        <span  id={c.rka_pk+"delete"} onClick={handleDelete}>삭제</span>
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