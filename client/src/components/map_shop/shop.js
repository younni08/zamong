import React,{useState} from "react";
import MapNavi from "./../map/map_navi"

const Shop = () => {
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
                <div className="shop">
                    <div className="shop_level1">
                        <span>대전 <i className="xi-angle-right-min"></i> 초록상점</span>
                        <div>
                            <img src="./pics/test.png" alt="aa"/>
                        </div>
                    </div>
                    <div className="shop_level2">
                        <span>초록 상점</span>
                        <div>
                            <span><i className="xi-heart"></i></span>
                            <span>15</span>
                        </div>
                    </div>
                    <div className="shop_level3">
                        <img src="./pics/refill1.png" alt="refill" />
                        <img src="./pics/refill2.png" alt="refill" />
                        <img src="./pics/refill3.png" alt="refill" />
                        <img src="./pics/refill4.png" alt="refill" />
                        <img src="./pics/refill5.png" alt="refill" />
                    </div>
                    <div className="shop_level4">
                        2019년 문을 연 초록상점은 대전의 중심지 유성구에 위치하고 있습니다. 각종 아기자기한 생활용품과 식료품을 판매하며 각종 액체 세제를 리필용기에 담아갈 수 있는 매장입니다. 또 정기적으로 환경문제, 패미니즘 등의 다양한 주제로 독서모임이 진행되어 환경에 관심이 있는 다양한 사람들과 만날 수 있는 공간도 제공하고 있습니다.
                    </div>
                    <div className="shop_level5">
                        <div>
                        </div>
                    </div>
                    <div className="shop_level6">
                        <div>
                            <span>+</span>
                            <span>주소</span>
                            <span>충남 서천군 우리집</span>
                        </div>
                        <div>
                            <span>+</span>
                            <span>연락처</span>
                            <span>010 2222 8888</span>
                        </div>
                        <div>
                            <span>+</span>
                            <span>이메일</span>
                            <span>test@test.com</span>
                        </div>
                        <div>
                            <span>+</span>
                            <span>사이트</span>
                            <span>없음</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;