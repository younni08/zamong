import React from "react"
import {Link} from "react-router-dom"
import YouTube from 'react-youtube';

const About = () => {
    const opts = {
        playerVars: {
          autoplay: 1,
        },
    };

    return (
        <div className="about">
            <div>
                <span>About</span>
                <div className="about_video">
                    <YouTube videoId="TFmAyR1G_Vw" opts={opts} className="about_youtube" />
                </div>
                <div className="about_main">
                    <div className="about_element">
                        <span>기후 위기</span>
                        <div>
                            <span>어른들이 말합니다. “2050년까지 탄소중립을 실현합시다.!”라고 
                            말입니다. 탄소중립을 실현하지 않으면 우리에게 닥칠 미래가 
                            좋지 않다고 합니다. 화가 납니다. 어른들은 내가 살아갈 미래를 
                            생각하지 않고 무한한 경쟁으로 부를 축적하여 성장과 개발만 
                            하였습니다. 그래서 저는 견딜 수 없는 폭염, 쉽게 꺼지지 않는 
                            산불, 길고 강한 장마, 갑자기 추워지는 한파, 널을 뛰는 재해를 
                            당해야만 합니다. 가만히 있을 수가 없습니다. 기후위기는 이제 
                            제 생존의 문제입니다.</span>
                            <span>제 목소리를 내며 제 말을 들어주고 저와 함께 실천할 친구들을 
                            찾고자 합니다.</span>
                        </div>
                        <span className="sep">저는 Z(ero-waste)-generation입니다.</span>
                    </div>
                    <div className="about_element">
                        <span>Z-generation</span>
                        <div>
                            <span>Z-generation은 Zero-waste을 일상으로 실천하는 세대입니다. 
                            나이불문, 성별과 상관없습니다. 우리는 소비를 하지 않는 삶을 
                            살 순 없습니다. 하지만 필요한 것만 가지는 삶, 필요하지 않는 
                            것은 필요한 사람에게 나누는 삶을 살아갑니다. 즉, 물건이 
                            탄생하여 쓰레기가 아닌 쓸모를 계속 찾아가는 물건이 되길 
                            바라는 삶을 살아갑니다.
                            </span>
                        </div>
                        <span className="sep">이루자몽은 함께할 Z-generation을 찾고 그들의 삶을 지지합니다</span>
                        <span className="sep">Z-generation의 구체적인 삶의 모습은 R-10입니다</span>
                        <Link to="/rtende" className="sep">R-10 더 알아보기(R-10) 페이지로 이동</Link>
                    </div>
                    <div className="about_element">
                        <span>1. 즐겁고 유쾌하게 Z-generation이 되는 방법을 안내합니다.</span>
                        <div>
                            <span>현세대와 미래세대의 징검다리 역할을 할 수 있는 다양한 읽기 
                            자료, 교재, 교구 등을 개발합니다. 미래세대에게 전달하고자 
                            하는 의미있는 가치, 지식, 생각을 쉽게 전달할 수 있는 
                            매체입니다. 예측할 수 없는 불안한 미래에 대한 막연한 모습보다 
                            즐겁고 유쾌하고 우리만의 방식으로 풀어가는 미래를 꿈꿀 수 
                            있도록 돕습니다
                            </span>
                        </div>
                        <Link className="sep">알지 페이지로 이동</Link>
                        <Link className="sep">구매: 이루자몽 스토어로 이동</Link>
                    </div>
                    <div className="about_element">
                        <span>2. 물건의 쓸모를 계속 찾는 노력을 합니다</span>
                        <div>
                            <span>더 이상 쓸 때가 없나요? 더 쓸모를 생각하고 버리는 건 
                                어떤가요? 약간의 노력으로 나만의 물건을 만들 수 있다면 
                                어떠할까요? 빨대, 패트병 뚜껑, 일회용들 소소해서 재활용이 
                                어려운 물건들의 다양한 쓸모를 생각하여 재탄생한 작품을 
                                소개하고자 합니다.
                            </span>
                        </div>
                        <Link to="/project" className="sep">쓸떼 페이지로 이동</Link>
                        <Link to="/project" className="sep">구매: 이루자몽 스토어로 이동</Link>
                    </div>
                    <div className="about_element">
                        <span>3. 친환경 상품 생산, 제조업체를 찾습니다</span>
                        <div>
                            <span>이루자몽은 친환경 상품의 생산업체와 소비자를 연결하여 중간 
                            거점을 없애 유통 과정에서 발생하는 낭비를 줄이고자 합니다. 
                            또한 친환경 상품을 탄소저감기업에 소개하고 생산물량을 
                            확보합니다. 이 과정은 생산업체는 판매 이익을 올리고 
                            탄소저감기업은 경제적 부담을 줄이면서 친환경 상품을 쓸 수 
                            있는 기회가 될 수 있습니다.</span>
                        </div>
                        <Link to="/rtem" className="sep">알템 페이지로 이동</Link>
                    </div>
                    <div className="about_element">
                        <span>4. 기후 위기에 공감하는 기업을 찾습니다. </span>
                        <div>
                            <span>이루자몽은 탄소저감을 실천하고자 노력하는 기업을 
                            소개합니다. 좋은 사람이 모인 곳에는 좋은 사람들이 모입니다. 
                            기업의 최대 목적은 이윤추구지만 사회와 환경을 위한 가치도 
                            중시하는 기업을 찾습니다. 음식점부터 사무실까지 우리는 
                            나비의 작은 날개짓을 찾아 사회와 지구의 변화를 이끌어 낼 수 
                            있도록 알리겠습니다.</span>
                        </div>
                        <Link className="sep">탄소저감기업 페이지로 이동</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;