import React,{useEffect, useState} from "react";
import MapNavi from "./../map/map_navi"
import Qrcode from "qrcode.react";
import axios from "axios";
import parser from "html-react-parser"
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'; 
import ItemElement3 from "./shop_article";
import { KakaoLinkDefault } from "react-kakao-link"

const Shop = () => {
    const [expand,setExpand] = useState(false)
    const [expand2,setExpand2] = useState(false)
    const [loading,setLoading] = useState(false)
    const [article,setArticle] = useState([])
    const [vote,setVote] = useState(0)
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
    const downloadQR = () => {
        const canvas = document.getElementById("getqr");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "qrcode.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };

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
        setShop(res.data.shop)
        setLoading(true)
        setVote(res.data.shop.shop_vote)
        getimage(res.data.shop.shop_cover_key,res.data.shop.shop_cover_type)
        setArticle(res.data.article)
        handleRefill(res.data.shop.shoptype)
    }

    
    const [clicked,setClick] = useState(false)
    const voteup = async() => {
        if(clicked===true) return alert("이미 투표하셨습니다.")
        setClick(true)
        setVote(vote+1)
        let url = "/api/mong/shopvote"
        let getpk = window.location.href.split("shop?s=")[1]
        let params = {
            pk:getpk
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
    },[])

    const handleRefill = (string) => {
        if(string.indexOf("세제")>-1) setRefill1on(true)
        if(string.indexOf("화장품")>-1) setRefill2on(true)
        if(string.indexOf("곡류")>-1) setRefill3on(true)
        if(string.indexOf("팝업")>-1) setRefill4on(true)
        if(string.indexOf("반려")>-1) setRefill5on(true)
        if(string.indexOf("비건")>-1) setRefill6on(true)
        if(string.indexOf("무포장")>-1) setRefill7on(true)
        if(string.indexOf("공작소")>-1) setRefill8on(true)
    }

    const [refill1,setRefill1] = useState(false)
    const [refill1on,setRefill1on] = useState(false)
    const [refill2,setRefill2] = useState(false)
    const [refill2on,setRefill2on] = useState(false)
    const [refill3,setRefill3] = useState(false)
    const [refill3on,setRefill3on] = useState(false)
    const [refill4,setRefill4] = useState(false)
    const [refill4on,setRefill4on] = useState(false)
    const [refill5,setRefill5] = useState(false)
    const [refill5on,setRefill5on] = useState(false)
    const [refill6,setRefill6] = useState(false)
    const [refill6on,setRefill6on] = useState(false)
    const [refill7,setRefill7] = useState(false)
    const [refill7on,setRefill7on] = useState(false)
    const [refill8,setRefill8] = useState(false)
    const [refill8on,setRefill8on] = useState(false)
    const handleRefillClick = (e) => {
        if(e.currentTarget.getAttribute("id")==="shop_refill1"){setRefill1(true);setExpand2(true);}
        if(e.currentTarget.getAttribute("id")==="shop_refill2"){setRefill2(true);setExpand2(true);}
        if(e.currentTarget.getAttribute("id")==="shop_refill3"){setRefill3(true);setExpand2(true);}
        if(e.currentTarget.getAttribute("id")==="shop_refill4"){setRefill4(true);setExpand2(true);}
        if(e.currentTarget.getAttribute("id")==="shop_refill5"){setRefill5(true);setExpand2(true);}
        if(e.currentTarget.getAttribute("id")==="shop_refill6"){setRefill6(true);setExpand2(true);}
        if(e.currentTarget.getAttribute("id")==="shop_refill7"){setRefill7(true);setExpand2(true);}
        if(e.currentTarget.getAttribute("id")==="shop_refill8"){setRefill8(true);setExpand2(true);}

        if(e.currentTarget.getAttribute("id")==="shop_refill1on"){setRefill1(false);setExpand2(false);}
        if(e.currentTarget.getAttribute("id")==="shop_refill2on"){setRefill2(false);setExpand2(false);}
        if(e.currentTarget.getAttribute("id")==="shop_refill3on"){setRefill3(false);setExpand2(false);}
        if(e.currentTarget.getAttribute("id")==="shop_refill4on"){setRefill4(false);setExpand2(false);}
        if(e.currentTarget.getAttribute("id")==="shop_refill5on"){setRefill5(false);setExpand2(false);}
        if(e.currentTarget.getAttribute("id")==="shop_refill6on"){setRefill6(false);setExpand2(false);}
        if(e.currentTarget.getAttribute("id")==="shop_refill7on"){setRefill7(false);setExpand2(false);}
        if(e.currentTarget.getAttribute("id")==="shop_refill8on"){setRefill8(false);setExpand2(false);}
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

    const template = {
        objectType: "feed",
        content: {
          title: "이루자몽",
          description: "#친환경 #제로웨이스트 #이루자몽",
          imageUrl:
            "https://www.iroozamong.com/pics/rtende.svg",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            }
        }
    ]}

    const onClicFacebook = () => {
        window.open('https://www.facebook.com/sharer/sharer.php?u='+window.location.href)
    }
    const shareTwitter = () => {
        var sendText = "이루자몽";
        window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + window.location.href);
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
                                <div onClick={voteup}>
                                    <span><i className="xi-heart"></i></span>
                                    <span>{vote}</span>
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
                        {
                            refill1on?refill1?<img src="./pics/refill1on.png" alt="refill" id="shop_refill1on" onClick={handleRefillClick} />:<img src="./pics/refill1.png" alt="refill" id="shop_refill1" onClick={handleRefillClick} />:""
                        }
                        {
                            refill2on?refill2?<img src="./pics/refill2on.png" alt="refill" id="shop_refill2on" onClick={handleRefillClick} />:<img src="./pics/refill2.png" alt="refill" id="shop_refill2" onClick={handleRefillClick} />:""
                        }
                        {
                            refill3on?refill3?<img src="./pics/refill3on.png" alt="refill" id="shop_refill3on" onClick={handleRefillClick} />:<img src="./pics/refill3.png" alt="refill" id="shop_refill3" onClick={handleRefillClick} />:""
                        }
                        {
                            refill4on?refill4?<img src="./pics/refill4on.png" alt="refill" id="shop_refill4on" onClick={handleRefillClick} />:<img src="./pics/refill4.png" alt="refill" id="shop_refill4" onClick={handleRefillClick} />:""
                        }
                        {
                            refill5on?refill5?<img src="./pics/refill5on.png" alt="refill" id="shop_refill5on" onClick={handleRefillClick} />:<img src="./pics/refill5.png" alt="refill" id="shop_refill5" onClick={handleRefillClick} />:""
                        }
                        {
                            refill6on?refill6?<img src="./pics/refill6on.png" alt="refill" id="shop_refill6on" onClick={handleRefillClick} />:<img src="./pics/refill6.png" alt="refill" id="shop_refill6" onClick={handleRefillClick} />:""
                        }
                        {
                            refill7on?refill7?<img src="./pics/refill7on.png" alt="refill" id="shop_refill7on" onClick={handleRefillClick} />:<img src="./pics/refill7.png" alt="refill" id="shop_refill7" onClick={handleRefillClick} />:""
                        }
                        {
                            refill8on?refill8?<img src="./pics/refill8on.png" alt="refill" id="shop_refill8on" onClick={handleRefillClick} />:<img src="./pics/refill8.png" alt="refill" id="shop_refill8" onClick={handleRefillClick} />:""
                        }
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
                            <KakaoLinkDefault
                                className="template"
                                template={template}
                                jsKey={"2da59c35d299ade57ddccd5fef4bb3a3"}
                                >
                                <img src="./pics/kakaotalk.png" alt="link" />
                            </KakaoLinkDefault>
                            <img src="./pics/facebook.png" alt="link" onClick={onClicFacebook} />
                            <img src="./pics/twitter.png" alt="link" onClick={shareTwitter} />
                        </div>
                        <div>
                            <Qrcode value={"https://www.iroozamong.com/#/shop"}
                                size={80}
                                id="getqr"
                                bgColor={"#FFFEF8"}
                            />
                            <span onClick={downloadQR}>QR코드 다운로드</span>
                        </div>
                    </div>
                    <div className="shop_level7">
                        <div>
                            <span>+</span>
                            <span>읽을 거리</span>
                        </div>
                        <div>
                            {
                                article?article.map(c=>{
                                    return (
                                        <ItemElement3
                                            key={c.rka_pk}
                                            rka_pk={c.rka_pk}
                                            rka_cover_key={c.rka_cover_key}
                                            rka_cover_type={c.rka_cover_type}
                                            rka_title={c.rka_title}
                                        />
                                    )
                                }):""
                            }
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