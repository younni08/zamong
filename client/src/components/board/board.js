import axios from "axios";
import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import parser from "html-react-parser"

const Board = () => {
    const [expand,setExpand] = useState(false)
    const [page,setPage] = useState(1)
    const [pickpage,setPickpage] = useState(1)
    const [pick,setPick] = useState([])
    const [pickcate,setPickcate] = useState("")
    const [list,setList] = useState([])
    const handleExpand = () => {
        if(expand===false){
            document.getElementById("board_expand").style.height="385px";
            setExpand(true)
        }else{
            document.getElementById("board_expand").style.height="0px";
            setExpand(false)
        }
    }

    useEffect(()=>{
        init();
        getPick();
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
        console.log(res.data)
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    const getPick = async() => {
        let url = "/api/mong/getArticle_pick";
        let params = {
            page:pickpage
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        if(res.data==="fail") return alert("잘못된 접근입니다.")
        if(res.data.rka_cover_key!=="default"){
            getImage(res.data.rka_cover_key,res.data.rka_cover_type)
        }
        let temp = "알-템"
        if(res.data.rka_cate!==null&&res.data.rka_cate!==undefined&&res.data.rka_cate.split(",")!==undefined){
            if(res.data.rka_cate.split(",")[0]==="rtende"){
                temp="알-텐데"
            }
            if(res.data.rka_cate.split(",")[0]==="rtem"){
                temp="알-템"
            }
            if(res.data.rka_cate.split(",")[0]==="rka"){
                temp="알-까"
            }
            if(res.data.rka_cate.split(",")[0]==="rmap"){
                temp="지-도"
            }
            if(res.data.rka_cate.split(",")[0]==="docu"){
                temp="자-료"
            }
        }
        setPickcate(temp)
        setPick(res.data.pick)
    }

    const [sample,setSample] = useState("")
    const getImage = async(key,type) => {
        let url = "api/mana/coverimage"
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
            let ttt = '<img src="data:'+type.replace("#",'').replace(",",'')+';base64,'+ res.data.image + '">'
            setSample(ttt)
        }
    }

    return (
        <div className="board">
            <div>
                <div>
                    <span>알-까</span>
                    <span onClick={handleExpand}><i className="xi-caret-down-min"></i></span>
                </div>
                <div className="board_expand" id="board_expand">
                    <div>
                        <input type="text" />
                        <span><i className="xi-search"></i></span>
                    </div>
                    <div>
                        <span>알-텐데 이야기</span>
                        <span><i className="xi-arrow-up xi-rotate-45"></i></span>
                    </div>
                    <div>
                        <span>알-템 이야기</span>
                        <span><i className="xi-arrow-up xi-rotate-45"></i></span>
                    </div>
                    <div>
                        <span>알-까</span>
                        <span><i className="xi-arrow-up xi-rotate-45"></i></span>
                    </div>
                    <div>
                        <span>알-지도 소식</span>
                        <span><i className="xi-arrow-up xi-rotate-45"></i></span>
                    </div>
                    <div>
                        <span>자료</span>
                        <span><i className="xi-arrow-up xi-rotate-45"></i></span>
                    </div>
                </div>
                <div className="board_main">
                    <div className="board_level1">
                        <input type="text" placeholder="예) 대나무 칫솔" />
                        <span><i className="xi-search"></i></span>
                    </div>
                    <div className="board_level12">
                        <div>
                            <Link to={"/article?a="+pick.rka_pk} key={pick.rka_pk}>
                                <div>
                                    {
                                        parser(sample)
                                    }
                                </div>
                                <span>[{pickcate}] {pick.rka_title}</span>
                            </Link>
                        </div>
                        <div>
                            <span className="on"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="board_level2">
                        <div>
                            <div>
                                <span>업로드순</span>
                                <span><i className="xi-caret-down-min xi-2x"></i></span>
                            </div>
                            <div>
                                <span>분류</span>
                                <span><i className="xi-caret-down-min xi-2x"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="board_level3">
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
                                    <Link to={"/article?a="+c.rka_pk} key={c.rka_pk}>
                                        <span>[{temp}] {c.rka_title}</span>
                                    </Link>
                                )
                            }):""
                        }
                        <div>
                            <span onClick={nextPage}><i className="xi-angle-down-thin xi-2x"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board;