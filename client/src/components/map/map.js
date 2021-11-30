import React,{useEffect, useState} from "react";
import MapNavi from "./map_navi"
import MapKorea from "./map_korea";
import ShopListElement from "./shoplist_element";
import axios from "axios";

const Map = () => {
    const [expand,setExpand] = useState(false)
    const [type,setType] = useState("all")
    const [list,setList] = useState([])
    const [kstate,setKstate] = useState([])
    
    const handleExpand = () => {
        if(expand===false){
            document.getElementById("map_expand").style.height="513px";
            setExpand(true)
        }else{
            document.getElementById("map_expand").style.height="0px";
            setExpand(false)
        }
    }

    const mapPop = () => {
        document.getElementById("map_popupanimation").style.top="-500px"
    }

    const init = async() => {
        let url = "api/mong/mapinit";
        let params = {
            type:type,
            page:currentPage
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data==="fail") return 0
        setCurrentPage(currentPage)
        setTotalPage(Math.ceil(res.data.shopcnt/10))
        handlePage()
        setList(res.data.item)
        setKstate(res.data.map)
    }

    const [type1,setType1] = useState(true)
    const [type2,setType2] = useState(false)
    const [type3,setType3] = useState(false)
    const [type4,setType4] = useState(false)
    const [type5,setType5] = useState(false)
    const [type6,setType6] = useState(false)
    const [type7,setType7] = useState(false)
    const [type8,setType8] = useState(false)
    const [type9,setType9] = useState(false)

    const goReset = () => {
        setType1(false)
        setType2(false)
        setType3(false)
        setType4(false)
        setType5(false)
        setType6(false)
        setType7(false)
        setType8(false)
        setType9(false)
    }

    const handleTaglist = (e) => {
        goReset()
        if(e.currentTarget.getAttribute("id")==="all"){
            setType1(true)
        }
        if(e.currentTarget.getAttribute("id")==="세제"){
            setType2(true)
        }
        if(e.currentTarget.getAttribute("id")==="화장품"){
            setType3(true)
        }
        if(e.currentTarget.getAttribute("id")==="곡류"){
            setType4(true)
        }
        if(e.currentTarget.getAttribute("id")==="팝업"){
            setType5(true)
        }
        if(e.currentTarget.getAttribute("id")==="반려"){
            setType6(true)
        }
        if(e.currentTarget.getAttribute("id")==="비건"){
            setType7(true)
        }
        if(e.currentTarget.getAttribute("id")==="무포장"){
            setType8(true)
        }
        if(e.currentTarget.getAttribute("id")==="공작소"){
            setType9(true)
        }
        setType(e.currentTarget.getAttribute("id"))
    }

    const [totalPage,setTotalPage] = useState(1)
    const [currentPage,setCurrentPage] = useState(1)
    const [pageArray,setPageArray] = useState([])
    const handlePage = () => {
        let totalPagee = totalPage;
        let currentPagee = currentPage;
        let temp_viewArray = [];
        if(totalPagee < 7||currentPagee<4){
            for(let i=1;i<8;i++){
                if(i<totalPagee+1){
                    temp_viewArray[i] = i;
                }
            }
        }else{
            let limit = totalPagee-currentPagee;
            if(currentPagee>3&&limit>2){
                for(let i=(Number(currentPagee)-3);i<(Number(currentPagee)+4);i++){
                    temp_viewArray[i] = i;
                }
            }else{
                if(currentPagee>3&&limit>1){
                    for(let i=(Number(currentPagee)-4);i<(Number(currentPagee)+3);i++){
                        temp_viewArray[i] = i;
                    }
                }else{
                    if(Number(currentPagee)>3&&limit>0){
                        for(let i=(Number(currentPagee)-5);i<(Number(currentPagee)+2);i++){
                            temp_viewArray[i] = i;
                        }
                    }else{
                        if(Number(currentPagee)>3&&limit===0){
                            for(let i=(Number(currentPagee)-6);i<(Number(currentPagee)+1);i++){
                                temp_viewArray[i] = i;
                            }
                        }
                    }
                }   
            }
        }
        setPageArray(temp_viewArray)
    }

    const handlePageClick = (e) => {
        let curPage = e.currentTarget.getAttribute("id").split("map_page")[1]
        setCurrentPage(curPage)
    }

    useEffect(()=>{
        init()
    },[currentPage,type])

    return (
        <div className="map">
            <div>
                <div>
                    <span>알-지도</span>
                    <span onClick={handleExpand}><i className="xi-caret-down-min"></i></span>
                </div>
                <div className="map_expand" id="map_expand">
                    <MapNavi />
                </div>
                <div className="map_main">
                    <div>
                        <div>
                            <span className="title">전국</span>
                            <div className="map_popup" onClick={mapPop} id="map_popupanimation">
                                <div>
                                    <span>전국에는 다양한 개성을 가진 제로웨이스트샵이 운영되고 있습니다.</span>
                                    <span>지도를 클릭해 나에게 맞는 제로웨이트스샵을 찾아보세요.</span>
                                </div>
                            </div>
                            <MapKorea 
                                kstate={kstate}
                            />
                        </div>
                        <div>
                            <div className="map_main_navi">
                                <div>
                                    <div onClick={handleTaglist} id="all">
                                        <div>
                                            {
                                                type1?<div className="on"><i className="xi-star xi-2x"></i></div>:<div><i className="xi-star xi-2x"></i></div>
                                            }
                                            <span>전체</span>
                                        </div>
                                        <span></span>
                                    </div>
                                    <div onClick={handleTaglist} id="세제">
                                        <div>
                                            {
                                                type2?<img src="./pics/refill1on.png" alt="refill" />:<img src="./pics/refill1.png" alt="refill" />
                                            }
                                            <span>세제 리필</span>
                                        </div>
                                        <span></span>
                                    </div>
                                    <div onClick={handleTaglist} id="화장품">
                                        <div>
                                            {
                                                type3?<img src="./pics/refill2on.png" alt="refill" />:<img src="./pics/refill2.png" alt="refill" />
                                            }
                                            <span>화장품 리필</span>
                                        </div>
                                        <span></span>
                                    </div>
                                    <div onClick={handleTaglist} id="곡류">
                                        <div>
                                            {
                                                type4?<img src="./pics/refill3on.png" alt="refill" />:<img src="./pics/refill3.png" alt="refill" />
                                            }
                                            <span>곡류 리필</span>
                                        </div>
                                        <span></span>
                                    </div>
                                    <div onClick={handleTaglist} id="팝업">
                                        <div>
                                            {
                                                type5?<img src="./pics/refill4on.png" alt="refill" />:<img src="./pics/refill4.png" alt="refill" />
                                            }
                                            <span>팝업</span>
                                        </div>
                                        <span></span>
                                    </div>
                                    <div onClick={handleTaglist} id="반려">
                                        <div>
                                            {
                                                type6?<img src="./pics/refill5on.png" alt="refill" />:<img src="./pics/refill5.png" alt="refill" />
                                            }
                                            <span>반려용품</span>
                                        </div>
                                        <span></span>
                                    </div>
                                    <div onClick={handleTaglist} id="비건">
                                        <div>
                                            {
                                                type7?<img src="./pics/refill6on.png" alt="refill" />:<img src="./pics/refill6.png" alt="refill" />
                                            }
                                            <span>비건</span>
                                        </div>
                                        <span></span>
                                    </div>
                                    <div onClick={handleTaglist} id="무포장">
                                        <div>
                                            {
                                                type8?<img src="./pics/refill7on.png" alt="refill" />:<img src="./pics/refill7.png" alt="refill" />
                                            }
                                            <span>무포장</span>
                                        </div>
                                        <span></span>
                                    </div>
                                    <div onClick={handleTaglist} id="공작소">
                                        <div>
                                            {
                                                type9?<img src="./pics/refill8on.png" alt="refill" />:<img src="./pics/refill8.png" alt="refill" />
                                            }
                                            <span>공작소</span>
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="shoplist_page">
                                {
                                    pageArray ? pageArray.map(c=>{
                                        if(c==currentPage){
                                            return(
                                                <span className="on" key={c+"ee"} id={"map_page"+c} onClick={handlePageClick}>{c}</span>
                                            )
                                        }else{
                                            return(
                                                <span key={c+"ee"} id={"map_page"+c} onClick={handlePageClick}>{c}</span>
                                            )
                                        }
                                    }):""
                                }
                            </div>
                            <div className="map_main_list">
                                {
                                    list?list.map(c=>{
                                        return (
                                            <ShopListElement 
                                                key={c.shop_pk}
                                                shop_cover_type={c.shop_cover_type}
                                                shop_cover_key={c.shop_cover_key}
                                                shop_pk={c.shop_pk}
                                                shop_address={c.shop_address}
                                                oneline={c.oneline}
                                                title={c.title}
                                            />
                                        )
                                    }):""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;