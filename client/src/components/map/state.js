import React,{ useEffect, useState} from "react";
import MapNavi from "./map_navi"
import KoreaState1 from "./list/map1"
import KoreaState2 from "./list/map2"
import KoreaState3 from "./list/map3"
import KoreaState4 from "./list/map4"
import KoreaState5 from "./list/map5"
import KoreaState6 from "./list/map6"
import KoreaState7 from "./list/map7"
import KoreaState8 from "./list/map8"
import KoreaState9 from "./list/map9"
import KoreaState10 from "./list/map10"
import KoreaState11 from "./list/map11"
import KoreaState12 from "./list/map12"
import KoreaState13 from "./list/map13"
import KoreaState14 from "./list/map14"
import KoreaState15 from "./list/map15"
import KoreaState16 from "./list/map16"
import KoreaState17 from "./list/map17"
import MapRegister from "./map_register";
import MapScale from "./map_scale";
import axios from "axios";

const MapState = () => {
    const [expand,setExpand] = useState(false)
    const [kstate,setKstate] = useState("")
    const [kstate2,setKstate2] = useState("")
    const [noshop,setNoshop] = useState(false)
    const [bigcity,setBigcity] = useState([])
    const [citylist,setCitylist] = useState([])

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

    const init = async() => {
        let getState = window.location.href;
        getState = getState.split("state?s=")[1]
        if(getState==="state1"){setKstate2("state1");setKstate("강원도")}
        if(getState==="state2"){setKstate2("state2");setKstate("경기도")}
        if(getState==="state3"){setKstate2("state3");setKstate("경상남도")}
        if(getState==="state4"){setKstate2("state4");setKstate("경상북도")}
        if(getState==="state5"){setKstate2("state5");setKstate("광주")}
        if(getState==="state6"){setKstate2("state6");setKstate("대구")}
        if(getState==="state7"){setKstate2("state7");setKstate("대전")}
        if(getState==="state8"){setKstate2("state8");setKstate("서울")}
        if(getState==="state9"){setKstate2("state9");setKstate("세종")}
        if(getState==="state10"){setKstate2("state10");setKstate("울산")}
        if(getState==="state11"){setKstate2("state11");setKstate("인천")}
        if(getState==="state12"){setKstate2("state12");setKstate("부산")}
        if(getState==="state13"){setKstate2("state13");setKstate("전라남도")}
        if(getState==="state14"){setKstate2("state14");setKstate("전라북도")}
        if(getState==="state15"){setKstate2("state15");setKstate("제주도")}
        if(getState==="state16"){setKstate2("state16");setKstate("충청남도")}
        if(getState==="state17"){setKstate2("state17");setKstate("충청북도")}

        let url = "api/mong/stateinit";
        let params = {
            state:getState
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
        init();
    },[])

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
                        <span>{kstate}</span>
                        <div className="map_state">
                            {
                                function(s){
                                        switch(s){
                                            case "state1":
                                                return(<KoreaState1 />);
                                            case "state2":
                                                return(<KoreaState2 />);
                                            case "state3":
                                                return(<KoreaState3 />);
                                            case "state4":
                                                return(<KoreaState4 />);
                                            case "state5":
                                                return(<KoreaState5 />);
                                            case "state6":
                                                return(<KoreaState6 />);
                                            case "state7":
                                                return(<KoreaState7 />);
                                            case "state8":
                                                return(<KoreaState8 />);
                                            case "state9":
                                                return(<KoreaState9 />);
                                            case "state10":
                                                return(<KoreaState10 />);
                                            case "state11":
                                                return(<KoreaState11 />);
                                            case "state12":
                                                return(<KoreaState12 />);
                                            case "state13":
                                                return(<KoreaState13 />);
                                            case "state14":
                                                return(<KoreaState14 />);
                                            case "state15":
                                                return(<KoreaState15 />);
                                            case "state16":
                                                return(<KoreaState16 />);
                                            case "state17":
                                                return(<KoreaState17 />);
                                            default:
                                                return(<KoreaState1 />);
                                        }
                                    }(kstate2)
                            }
                            
                        </div>
                        <MapScale />
                        {
                            noshop?<div className="map_popup" onClick={mapPop} id="map_popupanimation">
                                <div>
                                    <span>앗, 이런.</span>
                                    <span>{kstate}에는 제로웨이스트샵이 하나도 없어요</span>
                                    <span>우리 지역에도 제로웨이스트샵이 생길 수 있도록 이루자몽에 요청해주세요.</span>
                                </div>
                            </div>:""
                        }
                        <div className="map_main_table">
                            <div className="normal">
                                <span>+</span>
                                <span>매장수</span>
                                <div>
                                    <span>{kstate}</span>
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
                                        <span>{kstate}</span>
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