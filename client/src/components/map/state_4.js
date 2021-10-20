import React,{useState} from "react";
import MapNavi from "./map_navi"
import KoreaState from "./list/map4"
import MapRegister from "./map_register";

const MapState = () => {
    const [expand,setExpand] = useState(false)

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

    const oepnRegister = () => {
        window.scroll(0,0)
        document.getElementById("map_register1").style.padding="0px 0px 150vh 0vw"
        document.getElementById("map_register1").style.background="rgba(0,0,0,0.3)"
        document.getElementById("map_register1").style.zIndex="20"
    }
    
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
                        <span>경상북도</span>
                        <div className="map_state">
                            <KoreaState />
                        </div>
                        <div className="map_popup" onClick={mapPop} id="map_popupanimation">
                            <div>
                                <span>앗, 이런.</span>
                                <span>경상북도에는 제로웨이스트샵이 하나도 없어요</span>
                                <span>우리 지역에도 제로웨이스트샵이 생길 수 있도록 이루자몽에 요청해주세요.</span>
                            </div>
                        </div>
                        <div className="map_main_table">
                            <div className="normal">
                                <span>+</span>
                                <span>매장수</span>
                                <div>
                                    <span>경상북도</span>
                                    <span>/</span>
                                    <span>47</span>
                                </div>
                            </div>
                            <div className="map_list">
                                <div>
                                    <span>+</span>
                                    <div>
                                        <span>요청수</span>
                                        <span>193건</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <span>경상북도</span>
                                        <span>183건</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <span>+</span>
                                <span>지도 공유하기</span>
                                <img src="./pics/kakaotalk.png" alt="share with kakaotalk" />
                            </div>
                        </div>
                        <div className="map_state_level1">
                            <span>제로웨이스트샵이 필요해요</span>
                            <div>
                                <span>플라스틱과 배송 포장을 줄이기 위해서는 제로웨이스트 샵이 필요합니다.</span>
                                <span>내가 사는 지역에 아직 제로웨이스트샵이 없다면 이루자몽에 알려주세요</span>
                                <span>이렇게 모인 정보는 새로운 상점을 계획중인 사장님들께 도움이 될 수 있습니다.</span>
                            </div>
                        </div>
                        <div className="map_state_level2">
                            <span onClick={oepnRegister}>요청하기</span>
                        </div>
                        <div className="map_register" id="map_register1">
                        <MapRegister />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapState;