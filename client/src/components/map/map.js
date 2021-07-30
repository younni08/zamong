import React,{useState} from "react";

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
                    <div>
                        <span>전국</span>
                    </div>
                    <div>
                        <span>서울특별시</span>
                    </div>
                    <div>
                        <span>제주도</span>
                    </div>
                    <div>
                        <span>경상북도</span>
                    </div>
                    <div>
                        <span>경상남도</span>
                    </div>
                    <div>
                        <span>경상남도</span>
                    </div>
                    <div>
                        <span>울산광역시</span>
                    </div>
                    <div>
                        <span>부산광역시</span>
                    </div>
                    <div>
                        <span>광주광역시</span>
                    </div>
                    <div>
                        <span>강원도</span>
                    </div>
                    <div>
                        <span>전라남도</span>
                    </div>
                    <div>
                        <span>전라북도</span>
                    </div>
                    <div>
                        <span>대전, 세종</span>
                    </div>
                    <div>
                        <span>충청남도</span>
                    </div>
                    <div>
                        <span>충청북도</span>
                    </div>
                    <div>
                        <span>인천, 경기도</span>
                    </div>
                </div>
                <div className="map_main">
                    <img src="./pics/sample2.png" alt="map" />
                </div>
            </div>
        </div>
    )
}

export default Map;