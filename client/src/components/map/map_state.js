import axios from "axios";
import React,{useState} from "react";
import MapNavi from "./map_navi"

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
        document.getElementById("map_register1").style.padding="0px 0px 50vh 0vw"
        document.getElementById("map_register1").style.background="rgba(0,0,0,0.3)"
        document.getElementById("map_register1").style.zIndex="20"
    }

    const closeRegister = () => {
        document.getElementById("map_register1").style.padding="0px 0px 50vh 100vw"
        document.getElementById("map_register1").style.background="none"
        document.getElementById("map_register1").style.zIndex="0"
    }

    const register = async() => {
        let url = "/api/mong/maprequest"
        let params = {

        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
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
                        <span>충청남도</span>
                        <div className="map_state">

                        </div>
                        <div className="map_popup" onClick={mapPop} id="map_popupanimation">
                            <div>
                                <span>앗, 이런.</span>
                                <span>충청남도에는 제로웨이스트샵이 하나도 없어요</span>
                                <span>우리 지역에도 제로웨이스트샵이 생길 수 있도록 이루자몽에 요청해주세요.</span>
                            </div>
                        </div>
                        <div className="map_main_table">
                            <div className="normal">
                                <span>+</span>
                                <span>매장수</span>
                                <div>
                                    <span>충청남도</span>
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
                                        <span>충청남도</span>
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
                            <div id="map_register2">
                                <div className="map_register_level1">
                                    <span onClick={closeRegister}>
                                        <i className="xi-close xi-x"></i>
                                    </span>
                                </div>
                                <div className="map_register_level2">
                                    <span>제로웨이스트샵이 필요해요</span>
                                </div>
                                <div className="map_register_level3">
                                    <span>내가 사는 곳 가까이 제로웨이스트샵이 생기기 바라거나 [알-지도]에 없는 새로운 매장을 찾았다면 이루자몽에 알려주세요.</span>
                                </div>
                                <div className="map_register_level4">
                                    <input type="checkbox"/>
                                    <span>개인정보 제공에 동의합니다.</span>
                                </div>
                                <div className="map_register_level5">
                                    <div>
                                        <input type="text" placeholder="E-mail"/>
                                    </div>
                                </div>
                                <div className="map_register_level6">
                                    <div>
                                        <select>
                                            <option value="" selected disabled hidden >지역 선택</option>
                                            <option value="서울특별시">서울특별시</option>
                                            <option value="부산광역시">부산광역시</option>
                                            <option value="제주특별자치도">제주특별자치도</option>
                                            <option value="대구광역시">대구광역시</option>
                                            <option value="인천광역시">인천광역시</option>
                                            <option value="광주광역시">광주광역시</option>
                                            <option value="대전광역시">대전광역시</option>
                                            <option value="울산광역시">울산광역시</option>
                                            <option value="세종특별자치시">세종특별자치시</option>
                                            <option value="경기도">경기도</option>
                                            <option value="강원도">강원도</option>
                                            <option value="충청남도">충청남도</option>
                                            <option value="충청북도">충청북도</option>
                                            <option value="전라남도">전라남도</option>
                                            <option value="전라북도">전라북도</option>
                                            <option value="경상남도">경상남도</option>
                                            <option value="경상북도">경상북도</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select>
                                            < option value="" selected disabled hidden >시/군/구</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="map_register_level7">
                                    <input type="checkbox"/>
                                    <span>제로웨이트스얍을 희망합니다</span>
                                </div>
                                <div className="map_register_level7">
                                    <input type="checkbox"/>
                                    <span>우리 지역의 제로웨이스트샵을 소개합니다</span>
                                </div>
                                <div className="map_register_level8">
                                    <div>
                                        <textarea placeholder="요청사항" />
                                    </div>
                                </div>
                                <div className="map_register_level9">
                                    <span onClick={register}>요청 보내기</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapState;