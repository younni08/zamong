import React,{useState} from "react";
import Map_korea from "./map_korea";
import Map_navi from "./map_navi"

const Map = () => {
    const [expand,setExpand] = useState(false)
    const handleExpand = () => {
        console.log(document.getElementById("map_expand"))
        if(expand===false){
            console.log("aa")
            document.getElementById("map_expand").style.height="513px";
            setExpand(true)
        }else{
            document.getElementById("map_expand").style.height="0px";
            setExpand(false)
        }
    }
    return (
        <div className="map">
            <div>
                <div>
                    <span>알-지도</span>
                    <span onClick={handleExpand}><i className="xi-caret-down-min"></i></span>
                </div>
                <div className="map_expand" id="map_expand">
                    <Map_navi />
                </div>
                <div className="map_main">
                    <div>
                        <span>전국</span>
                        <Map_korea />
                        <div className="map_main_table">
                            <div className="normal">
                                <span>+</span>
                                <span>매장수</span>
                                <span>전국</span>
                                <span>/</span>
                                <span>47</span>
                            </div>
                            <div className="normal">
                                <span>+</span>
                                <span>가장 많은 지역</span>
                                <span>서울</span>
                                <span>/</span>
                                <span>12</span>
                            </div>
                            <div>
                                <span>+</span>
                                <span>지도 공유하기</span>
                                <div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;