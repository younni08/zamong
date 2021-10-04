import axios from "axios";
import React, { useState,useEffect } from "react";
import parser from "html-react-parser"
import ItemElement from "./item_element";
import Qrcode from "qrcode.react";

const Item = (props) => {
    const [sample,setSample] = useState("")
    const [defaultImage,setDefaultImage] = useState(true)
    const [item,setItem] = useState([])
    const [list,setList] = useState([])
    const [items,setItems] = useState([])
    const [des1,setDes1] = useState("")
    const [des2,setDes2] = useState("")
    const [des3,setDes3] = useState("")
    const [des4,setDes4] = useState("")
    const [itempk,setitempk] = useState("")

    useEffect(()=>{
        init()
    },[props])
    
    const init = async() => {
        let url = "/api/mong/iteminit";
        if(window.location.href.split("?c=")[1]===undefined) return alert("잘못된 접근입니다.")
        let item_pk = window.location.href.split("?c=")[1]
        setitempk(item_pk)
        let params = {
            item:item_pk
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
        setList(res.data.detail)
        setItems(res.data.list)
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
                        <div className="item_ex_level1">
                            {
                                defaultImage?"":parser(sample)
                            }
                        </div>
                        <div className="item_ex_level2">
                            <span># 001 {item.rtem_t2_name}</span>
                        </div>
                        <div className="item_ex_level3">
                            {parser(des1)}
                        </div>
                        <div className="item_ex_level4">
                            <div>
                                {
                                    items?items.map(c=>{
                                        return (
                                            <ItemElement
                                                key={c.rtem_t3_pk}
                                                pk={c.rtem_t3_pk}
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
                            <span>#001-1</span>
                            <span>{list.rtem_t3_name}</span>
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
                                        list.rtem_t3_r1?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r1.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Relate / 관계짓지</span>
                                                <div>
                                                    {parser(list.rtem_t3_r1)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        list.rtem_t3_r2?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r2.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Rethink / 다시 생각하기</span>
                                                <div>
                                                    {parser(list.rtem_t3_r2)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        list.rtem_t3_r3?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r3.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Refuse / 거절하기</span>
                                                <div>
                                                    {parser(list.rtem_t3_r3)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        list.rtem_t3_r4?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r4.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Reduce / 줄이기</span>
                                                <div>
                                                    {parser(list.rtem_t3_r4)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        list.rtem_t3_r5?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r5.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Reuse / 재사용하기</span>
                                                <div>
                                                    {parser(list.rtem_t3_r5)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        list.rtem_t3_r6?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r6.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Repair / 수리하기</span>
                                                <div>
                                                    {parser(list.rtem_t3_r6)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        list.rtem_t3_r7?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r7.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Replace / 교체하기</span>
                                                <div>
                                                    {parser(list.rtem_t3_r7)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        list.rtem_t3_r8?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r8.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Repurpose / 새 용도 찾기</span>
                                                <div>
                                                    {parser(list.rtem_t3_r8)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        list.rtem_t3_r9?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r9.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Rot / 퇴비화하기</span>
                                                <div>
                                                    {parser(list.rtem_t3_r9)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                    {
                                        list.rtem_t3_r10?
                                        <div className="item_ex_level63_element">
                                            <div>
                                                <img src="./pics/r10.png" alt="r10" />
                                            </div>
                                            <div>
                                                <span>Recycle / 재활용하기</span>
                                                <div>
                                                    {parser(list.rtem_t3_r10)}
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
                                <img src="./pics/twitter.png" alt="link" />
                                <img src="./pics/insta.png" alt="link" />
                                <img src="./pics/email.png" alt="link" />
                                <img src="./pics/link.png" alt="link" />
                            </div>
                            <div>
                                <Qrcode value={"https://www.iroozamong.com/#/item?c="+itempk}
                                    size={100}
                                    bgColor={"#FFFEF8"}
                                />
                                <span>QR코드 복사</span>
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
                                <div className="item_ex_level8_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span>지구샵 대나무 칫솔</span>
                                </div>
                                <div className="item_ex_level8_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span>지구샵 대나무 칫솔</span>
                                </div>
                                <div className="item_ex_level8_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span>지구샵 대나무 칫솔</span>
                                </div>
                            </div>
                        </div>
                        <div className="item_ex_level8">
                            <div>
                                <span><i className="xi-plus xi-x"></i></span>
                                <span>함께쓰면 좋은 알-템</span>
                            </div>
                            <div>
                                <div className="item_ex_level8_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span>지구샵 대나무 칫솔</span>
                                </div>
                                <div className="item_ex_level8_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span>지구샵 대나무 칫솔</span>
                                </div>
                                <div className="item_ex_level8_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span>지구샵 대나무 칫솔</span>
                                </div>
                            </div>
                        </div>
                        <div className="item_ex_level9">
                            <div>
                                <span><i className="xi-plus xi-x"></i></span>
                                <span>읽어볼만한 알-까</span>
                            </div>
                            <div>
                                <div className="item_ex_level9_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span>[알-까] 재활용 안되는 예쁜 쓰레기 …</span>
                                </div>
                                <div className="item_ex_level9_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span>[알-까] ESG 기업이 떠오른다…</span>
                                </div>
                                <div className="item_ex_level9_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span>[알-까] ESG 기업이 떠오른다…</span>
                                </div>
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