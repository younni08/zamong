import React,{useEffect, useState} from "react";
import MapNavi from "./../map/map_navi"
import Qrcode from "qrcode.react";
import axios from "axios";
import parser from "html-react-parser"
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'; 

const Shop = () => {
    const [expand,setExpand] = useState(false)
    const [expand2,setExpand2] = useState(false)
    const [loading,setLoading] = useState(false)
    const [shop,setShop] = useState([])
    const handleExpand = () => {
        if(expand===false){
            document.getElementById("map_expand").style.height="513px";
            setExpand(true)
        }else{
            document.getElementById("map_expand").style.height="0px";
            setExpand(false)
        }
    }

    const init = async() => {
        let getpk = window.location.href.split("shop?s=")[1]
        let url = "/api/mong/shopinit"
        let params = {
            shop_pk:getpk
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        setShop(res.data)
        setLoading(true)
        getimage(res.data.shop_cover_key,res.data.shop_cover_type)
    }



    useEffect(()=>{
        init()
    },[])

    const [refill1,setRefill1] = useState(false)
    const [refill2,setRefill2] = useState(false)
    const [refill3,setRefill3] = useState(false)
    const [refill4,setRefill4] = useState(false)
    const [refill5,setRefill5] = useState(false)
    const [refill6,setRefill6] = useState(false)
    const [refill7,setRefill7] = useState(false)
    const [refill8,setRefill8] = useState(false)
    const [refill9,setRefill9] = useState(false)
    const handleRefillClick = () => {

    }

    
    const [sample,setSample] = useState("")

    const getimage = async(key,type) => {
        if(key===undefined||key===null||key===""||key==="default") return false
        let url = "/api/mong/singleimage"
        let params = {
            key:key
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config);
        if(res.data!=="fail"&&res.data!=="no key"){
            let ttt = '<img src="data:'+type.replace("#",'').replace(",",'')+';base64,'+ res.data + '">'
            return setSample(ttt)
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
                    <div className="shop_tablet">
                        <div className="shop_level1tablet">
                            <span>{shop.state_id} <i className="xi-angle-right-min"></i> {shop.title}</span>
                            <div>
                                {
                                    sample?parser(sample):""
                                }
                            </div>
                        </div>
                        <div>
                            <div className="shop_level2tablet">
                                <span>{shop.title}</span>
                                <div>
                                    <span><i className="xi-heart"></i></span>
                                    <span>0</span>
                                </div>
                            </div>
                            <div className="shop_level4tablet">
                                {
                                    loading?parser(shop.shop_body):""
                                }
                            </div>
                        </div>
                    </div>
                    <div className="shop_level1">
                        <span>{shop.state_id} <i className="xi-angle-right-min"></i> {shop.title}</span>
                        <div>
                            {
                                sample?parser(sample):""
                            }
                        </div>
                    </div>
                    <div className="shop_level2">
                        <span>{shop.title}</span>
                        <div>
                            <span><i className="xi-heart"></i></span>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="shop_level3">
                        <img src="./pics/refill1.png" alt="refill" id="shop_refill1" onClick={handleRefillClick} />
                        <img src="./pics/refill2.png" alt="refill" id="shop_refill2" onClick={handleRefillClick} />
                        <img src="./pics/refill3.png" alt="refill" id="shop_refill3" onClick={handleRefillClick} />
                        <img src="./pics/refill4.png" alt="refill" id="shop_refill4" onClick={handleRefillClick} />
                        <img src="./pics/refill5.png" alt="refill" id="shop_refill5" onClick={handleRefillClick} />
                    </div>
                    {
                        expand2?<div className="shop_level33">
                            <div>
                                <span>리필스테이션 (세제)</span>
                                <span>다회용 용기를 준비해보세요.</span>
                                <span>없다면, 매장에 문의하고 방문해요.</span>
                            </div>
                        </div>:""
                    }
                    <div className="shop_level4">
                        {
                            loading?parser(shop.shop_body):""
                        }
                    </div>
                    <div className="shop_level5">
                        <div>
                        <RenderAfterNavermapsLoaded
                            ncpClientId={'59ggdfmhb3'} // 자신의 네이버 계정에서 발급받은 Client ID
                            error={<p>Maps Load Error</p>}
                            loading={<p>Maps Loading...</p>}
                            >
                            <NaverMapAPI />
                        </RenderAfterNavermapsLoaded>
                        </div>
                    </div>
                    <div className="shop_level6">
                        <div>
                            <span>+</span>
                            <span>주소</span>
                            <span>{shop.shop_address}</span>
                        </div>
                        <div>
                            <span>+</span>
                            <span>연락처</span>
                            <span>{shop.shop_tel}</span>
                        </div>
                        <div>
                            <span>+</span>
                            <span>이메일</span>
                            <span>{shop.shop_email}</span>
                        </div>
                        <div>
                            <span>+</span>
                            <span>사이트</span>
                            <span>{shop.shop_web}</span>
                        </div>
                    </div>
                    <div className="item_ex_level_qr">
                        <div>
                            <img src="./pics/kakaotalk.png" alt="link" />
                            <img src="./pics/facebook.png" alt="link" />
                            <img src="./pics/insta.png" alt="link" />
                            <img src="./pics/link.png" alt="link" />
                        </div>
                        <div>
                            <Qrcode value={"https://www.iroozamong.com/#/shop"}
                                size={80}
                                bgColor={"#FFFEF8"}
                            />
                            <span>QR코드 복사</span>
                        </div>
                    </div>
                    <div className="shop_level7">
                        <div>
                            <span>+</span>
                            <span>읽을 거리</span>
                        </div>
                        <div>
                            <img src="./pics/test.png" alt="link" />
                            <span>test</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NaverMapAPI() {
    return (
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '30vh' // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
        defaultZoom={13} // 지도 초기 확대 배율
      />
    );
}
  
export default Shop;