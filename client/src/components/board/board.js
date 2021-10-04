import axios from "axios";
import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import parser from "html-react-parser"
import PickItem from "./pick_item";

const Board = () => {
    const [expand,setExpand] = useState(false)
    const [page,setPage] = useState(1)
    const [pick,setPick] = useState([])
    const [list,setList] = useState([])
    const [align,setAlign] = useState("recent")
    const [cate,setCate] = useState("all")

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
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    const getPick = async() => {
        let url = "/api/mong/getArticle_pick";
        let params = {
            page:6974
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data==="fail") return alert("잘못된 접근입니다.")
        setPick(res.data.picks)
    }

    const boardPickShift = (e) => {
        for(let i=0;i<document.getElementById("board_pick_wrapper").childNodes.length;i++){
            document.getElementById("board_pick_wrapper").childNodes[i].className = ""
        }
        if(e.currentTarget.getAttribute("id")==="board_pick_id1"){
            document.getElementById("board_pick_id1").className="on"
            document.getElementById("board_pick").style.transform = "translateX(0px)";
            
        }
        if(e.currentTarget.getAttribute("id")==="board_pick_id2"){
            document.getElementById("board_pick_id2").className="on"
            let width = window.innerWidth
            document.getElementById("board_pick").style.transform = `translateX(-${width}px)`;

        }
        if(e.currentTarget.getAttribute("id")==="board_pick_id3"){
            document.getElementById("board_pick_id3").className="on"
            let width = window.innerWidth
            document.getElementById("board_pick").style.transform = `translateX(-${Number(width*2)}px)`;

        }
        if(e.currentTarget.getAttribute("id")==="board_pick_id4"){
            document.getElementById("board_pick_id4").className="on"
            let width = window.innerWidth
            document.getElementById("board_pick").style.transform = `translateX(-${Number(width*3)}px)`;

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
                            <div id="board_pick">
                                {
                                    pick?pick.map(c=>{
                                        return(
                                            <PickItem 
                                                key={c.rka_pk}
                                                rka_pk={c.rka_pk}
                                                rka_cate={c.rka_cate}
                                                rka_title={c.rka_title}
                                                rka_cover_key={c.rka_cover_key}
                                                rka_cover_type={c.rka_cover_type}
                                            />
                                        )
                                    }):""
                                }
                            </div>
                        </div>
                        <div id="board_pick_wrapper">
                            <span onClick={boardPickShift} id="board_pick_id1" className="on"></span>
                            <span onClick={boardPickShift} id="board_pick_id2"></span>
                            <span onClick={boardPickShift} id="board_pick_id3"></span>
                            <span onClick={boardPickShift} id="board_pick_id4"></span>
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