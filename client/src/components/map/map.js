import React,{useState} from "react";
import MapNavi from "./map_navi"
import MapKorea from "./map_korea";

const Map = () => {
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
                        {/* <div className="map_popup" onClick={mapPop} id="map_popupanimation">
                            <div>
                                <span>전국에는 다양한 개성을 가진 제로웨이스트샵이 운영되고 있습니다.</span>
                                <span>지도를 클릭해 나에게 맞는 제로웨이트스샵을 찾아보세요.</span>
                            </div>
                        </div> */}
                        <div className="map_main_table">
                            <div className="normal">
                                <span>+</span>
                                <span>매장수</span>
                                <div>
                                    <span>전국</span>
                                    <span>/</span>
                                    <span>47</span>
                                </div>
                            </div>
                            <div className="normal">
                                <span>+</span>
                                <span>가장 많은 지역</span>
                                <div>
                                    <span>서울</span>
                                    <span>/</span>
                                    <span>12</span>
                                </div>
                            </div>
                            <div>
                                <span>+</span>
                                <span>지도 공유하기</span>
                                <img src="./pics/kakaotalk.png" alt="share with kakaotalk" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;