import axios from "axios";
import React, { useState,useEffect } from "react";
import parser from "html-react-parser"
import ItemElement from "./item_element";
import ItemElement2 from "./item_element_t4";
import ItemElement3 from "./item_element_article";
import Qrcode from "qrcode.react";

const Item = (props) => {
    const [sample,setSample] = useState("")
    const [defaultImage,setDefaultImage] = useState(true)
    const [item,setItem] = useState([])
    const [detail,setDetail] = useState([])
    const [items,setItems] = useState([])
    const [des1,setDes1] = useState("")
    const [des2,setDes2] = useState("")
    const [des3,setDes3] = useState("")
    const [des4,setDes4] = useState("")
    const [itempk,setitempk] = useState("")
    const [list2,setList2] = useState([])
    const [pick,setPick] = useState([])
    const [article,setArticle] = useState([])
    const [vote,setVote] = useState(0)

    useEffect(()=>{
        init()
    },[props])

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

    const [clicked,setClick] = useState(false)
    const voteup = async() => {
        setClick(true)
        if(clicked===true) return alert("이미 좋아요를 누르셨어요.")
        setVote(vote+1)
        let url = "/api/mong/vote";
        let t2 = window.location.href.split("item?t2=")[1].split("&t3=")[0]
        let t3 = window.location.href.split("&t3=")[1]
        let params = {
            t2:t2,
            t3:t3
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
    }
    
    const init = async() => {
        window.scroll(0,0)
        let url = "/api/mong/iteminit";
        if(window.location.href.split("?t2=")[1]===undefined) return alert("잘못된 접근입니다.")
        let item_pk = window.location.href.split("item?t2=")[1].split("&t3=")[0]
        let getitem = window.location.href.split("&t3=")[1]
        setitempk(item_pk)
        let params = {
            item:item_pk,
            t3:getitem
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data==="fail") return alert("잘못된 접근입니다.")
        getimage(res.data.detail.rtem_t3_key,res.data.detail.rtem_t3_type)
        setItem(res.data.item)
        setDes1(res.data.item.rtem_desc)
        setDes2(res.data.detail.rtem_desc)
        setDes3(res.data.detail.rtem_desc2)
        setDes4(res.data.detail.rtem_desc3)
        setDetail(res.data.detail)
        setItems(res.data.list)
        setList2(res.data.list2)
        setPick(res.data.pick)
        setArticle(res.data.article)
        setVote(res.data.detail.t3_vote)
    }

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
            setDefaultImage(false)
            return setSample(ttt)
        }else{
            return setDefaultImage(true)
        }
    }

    return (
        <div className="item">
            <div>
                <div>
                    <span>알-템</span>
                    <span><i className="xi-caret-down-min"></i></span>
                </div>
                <div className="item_ex">
                    <div>
                        <div>
                            <div className="item_ex_level1">
                                {
                                    defaultImage?"":parser(sample)
                                }
                            </div>
                            <div>
                                <div className="item_ex_level2">
                                    <span># 001 {item.rtem_t2_name}</span>
                                </div>
                                <div className="item_ex_level3">
                                    {parser(des1)}
                                </div>
                            </div>
                        </div>
                        <div className="item_ex_level4">
                            <div>
                                {
                                    items?items.map(c=>{
                                        return (
                                            <ItemElement
                                                key={c.rtem_t3_pk}
                                                rtem_t3_pk={c.rtem_t3_pk}
                                                rtem_t2_pk={item.rtem_t2_pk}
                                                itempk={detail.rtem_t3_pk}
                                                rtem_t3_key={c.rtem_t3_key}
                                                rtem_t3_type={c.rtem_t3_type}
                                                rtem_t3_name={c.rtem_t3_name}
                                            />
                                        )
                                    }):""
                                }
                            </div>
                        </div>
                        <div className="item_ex_level5">
                            <div>
                                <span>#001-1</span>
                                <span>{detail.rtem_t3_name}</span>
                            </div>
                            <div onClick={voteup}>
                                <span><i className="xi-heart xi-x"></i></span>
                                <span>{vote}</span>
                            </div>
                        </div>
                        <div className="item_ex_level6">
                            <div className="item_ex_level61">
                                <div>
                                    <span><i className="xi-plus xi-x"></i></span>
                                    <span>소재</span>
                                    <span>{parser(des2)}</span>
                                </div>
                            </div>
                            <div className="item_ex_level62">
                                <div>
                                    <span><i className="xi-plus xi-x"></i></span>
                                    <span>특징</span>
                                </div>
                                <div>
                                    <span>{parser(des3)}</span>
                                </div>
                            </div>
                            <div className="item_ex_level63">
                                <div>
                                    <span><i className="xi-plus xi-x"></i></span>
                                    <span>알텐데</span>
                                </div>
                                <div>
                                    {
                                        detail.rtem_t3_r1?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r1.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Relate / 관계짓지</span>
                                                <div>
                                                    {parser(detail.rtem_t3_r1)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        detail.rtem_t3_r2?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r2.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Rethink / 다시 생각하기</span>
                                                <div>
                                                    {parser(detail.rtem_t3_r2)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        detail.rtem_t3_r3?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r3.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Refuse / 거절하기</span>
                                                <div>
                                                    {parser(detail.rtem_t3_r3)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        detail.rtem_t3_r4?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r4.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Reduce / 줄이기</span>
                                                <div>
                                                    {parser(detail.rtem_t3_r4)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        detail.rtem_t3_r5?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r5.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Reuse / 재사용하기</span>
                                                <div>
                                                    {parser(detail.rtem_t3_r5)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        detail.rtem_t3_r6?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r6.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Repair / 수리하기</span>
                                                <div>
                                                    {parser(detail.rtem_t3_r6)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        detail.rtem_t3_r7?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r7.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Replace / 교체하기</span>
                                                <div>
                                                    {parser(detail.rtem_t3_r7)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        detail.rtem_t3_r8?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r8.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Repurpose / 새 용도 찾기</span>
                                                <div>
                                                    {parser(detail.rtem_t3_r8)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        detail.rtem_t3_r9?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r9.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Rot / 퇴비화하기</span>
                                                <div>
                                                    {parser(detail.rtem_t3_r9)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        detail.rtem_t3_r10?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r10.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Recycle / 재활용하기</span>
                                                <div>
                                                    {parser(detail.rtem_t3_r10)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                </div>
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
                                <Qrcode value={"https://www.iroozamong.com/#/item?c="+itempk}
                                    size={100}
                                    id="getqr"
                                    bgColor={"#FFFEF8"}
                                />
                                <span onClick={downloadQR}>QR코드 다운로드</span>
                            </div>
                        </div>
                        <div className="item_ex_level7">
                            <div>
                                <div>
                                    {parser(des4)}
                                </div>
                                <span>feat. 자몽</span>
                            </div>
                        </div>
                        <div className="item_ex_level8">
                            <div>
                                <span><i className="xi-plus xi-x"></i></span>
                                <span>이루자몽 PICK</span>
                            </div>
                            <div>
                                {
                                    pick?pick.map(c=>{
                                        return (
                                            <ItemElement2
                                                key={c.rtem_t4_pk}
                                                rtem_t4_pk={c.rtem_t4_pk}
                                                rtem_address={c.rtem_address}
                                                rtem_t4_key={c.rtem_t4_key}
                                                rtem_t4_type={c.rtem_t4_type}
                                                rtem_t4_name={c.rtem_t4_name}
                                            />
                                        )
                                    }):""
                                }
                            </div>
                        </div>
                        <div className="item_ex_level8">
                            <div>
                                <span><i className="xi-plus xi-x"></i></span>
                                <span>함께쓰면 좋은 알-템</span>
                            </div>
                            <div>
                                {
                                    list2?list2.map(c=>{
                                        return (
                                            <ItemElement
                                                key={c.rtem_t3_pk}
                                                rtem_t3_pk={c.rtem_t3_pk}
                                                rtem_t2_pk={item.rtem_t2_pk}
                                                itempk={detail.rtem_t3_pk}
                                                rtem_t3_key={c.rtem_t3_key}
                                                rtem_t3_type={c.rtem_t3_type}
                                                rtem_t3_name={c.rtem_t3_name}
                                            />
                                        )
                                    }):""
                                }
                            </div>
                        </div>
                        <div className="item_ex_level9">
                            <div>
                                <span><i className="xi-plus xi-x"></i></span>
                                <span>읽어볼만한 알-까</span>
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
                        <div className="item_ex_level10">
                            <div>
                                <div>
                                    택배로 주문하는 것보다 매장에서 직접 사면 많은 양의 포장 쓰레기와 탄소배출을 줄일 수 있어요.
                                </div>
                                <div>
                                    <span>내 주변 제로웨이스트샵 찾기</span>
                                    <span><i className="xi-plus xi-x"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item