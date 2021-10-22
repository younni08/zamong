import React,{useEffect, useState} from "react";
import MapNavi from "./map_navi"
import MapKorea from "./map_korea";
import ShopListElement from "./shoplist_element";
import axios from "axios";

const Map = () => {
    const [expand,setExpand] = useState(false)
    const [type,setType] = useState("all")
    const [page,setPage] = useState(1)
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
        console.log(document.getElementById("map_popupanimation"))
        document.getElementById("map_popupanimation").style.margin="-35vh 0px 0px 0px"
    }

    const init = async() => {
        let url = "api/mong/mapinit";
        let params = {
            type:type,
            page:page
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
    }

    useEffect(()=>{
        init()
    },[page,type])

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
                        <span>전국</span>
                        <MapKorea />
                        <div className="map_popup" onClick={mapPop} id="map_popupanimation">
                            <div>
                                <span>전국에는 다양한 개성을 가진 제로웨이스트샵이 운영되고 있습니다.</span>
                                <span>지도를 클릭해 나에게 맞는 제로웨이트스샵을 찾아보세요.</span>
                            </div>
                        </div>
                        <div className="map_main_navi">
                            <div>
                                <div>
                                    <div>
                                        <img src="./pics/refill1.png" alt="refill" />
                                        <span>서제 리필</span>
                                    </div>
                                    <span></span>
                                </div>
                                <div>
                                    <div>
                                        <img src="./pics/refill2.png" alt="refill" />
                                        <span>화장품 리필</span>
                                    </div>
                                    <span></span>
                                </div>
                                <div>
                                    <div>
                                        <img src="./pics/refill3.png" alt="refill" />
                                        <span>곡류 리필</span>
                                    </div>
                                    <span></span>
                                </div>
                                <div>
                                    <div>
                                        <img src="./pics/refill4.png" alt="refill" />
                                        <span>팝업 리필</span>
                                    </div>
                                    <span></span>
                                </div>
                                <div>
                                    <div>
                                        <img src="./pics/refill5.png" alt="refill" />
                                        <span>반려용품 리필</span>
                                    </div>
                                    <span></span>
                                </div>
                                <div>
                                    <div>
                                        <img src="./pics/refill6.png" alt="refill" />
                                        <span>비건 리필</span>
                                    </div>
                                    <span></span>
                                </div>
                                <div>
                                    <div>
                                        <img src="./pics/refill7.png" alt="refill" />
                                        <span>무포장 리필</span>
                                    </div>
                                    <span></span>
                                </div>
                                <div>
                                    <div>
                                        <img src="./pics/refill8.png" alt="refill" />
                                        <span>공작소 리필</span>
                                    </div>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="map_main_list">
                            <ShopListElement />
                            <ShopListElement />
                            <ShopListElement />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;