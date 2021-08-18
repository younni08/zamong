import axios from "axios";
import React, { useState,useEffect } from "react";
import parser from "html-react-parser"

const Item = (props) => {
    const [item,setItem] = useState([])
    const [list,setList] = useState([])
    useEffect(()=>{
        init()
    },[])
    
    const init = async() => {
        let url = "/api/mong/iteminit";
        if(props.location.search.split("?")[1]===undefined) return alert("잘못된 접근입니다.")
        let item_pk = props.location.search.split("?")[1]
        let params = {
            item:item_pk
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        if(res.data==="fail") return alert("잘못된 접근입니다.")
        setItem(res.data.item)
        setList(res.data.list)
        console.log(res.data)
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
                            <img src="./pics/test.png" alt="test" />
                        </div>
                        <div className="item_ex_level2">
                            <span># 001 {item.rtem_t2_name}</span>
                        </div>
                        <div className="item_ex_level3">
                            {parser(item.rtem_desc)}
                        </div>
                        <div className="item_ex_level4">
                            <div>
                                <span><i className="xi-plus-min xi-x"></i></span>
                                <span>다양한 {item.rtem_t2_name}</span>
                            </div>
                            <div>
                                <div className="item_ex_level4_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span></span>
                                </div>
                                <div className="item_ex_level4_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span></span>
                                </div>
                                <div className="item_ex_level4_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span></span>
                                </div>
                                <div className="item_ex_level4_element">
                                    <div>
                                        <img src="./pics/test.png" alt="test" />
                                    </div>
                                    <span></span>
                                </div>
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
                                    <span>{parser(list.rtem_desc)}</span>
                                </div>
                            </div>
                            <div className="item_ex_level62">
                                <div>
                                    <span><i className="xi-plus xi-x"></i></span>
                                    <span>특징</span>
                                </div>
                                <div>
                                    <span>{parser(list.rtem_desc2)}</span>
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
                                                <span>Replace / 관계짓지</span>
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
                                                <span>Replace / 다시 생각하기</span>
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
                                                <span>Replace / 거절하기</span>
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
                                                <span>Replace / 줄이기</span>
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
                                                <span>Replace / 재사용하기</span>
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
                                                <span>Replace / 수리하기</span>
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
                                                <span>Replace / 새 용도 찾기</span>
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
                                                <span>Replace / 퇴비화하기</span>
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
                                                <span>Replace / 재활용하기</span>
                                                <div>
                                                    {parser(list.rtem_t3_r10)}
                                                </div>
                                            </div>
                                        </div>:""
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="item_ex_level7">
                            <div>
                                <div>
                                    {parser(list.rtem_desc3)}
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