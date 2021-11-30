import React, { useState } from "react";
import {Link} from "react-router-dom"
import YouTube from 'react-youtube';

const Index = () => {
    const [line1,setLine1] = useState("Relate")
    const [line2,setLine2] = useState("관계짓기")

    const [r1,setR1] = useState(false)
    const [r2,setR2] = useState(false)
    const [r3,setR3] = useState(false)
    const [r4,setR4] = useState(false)
    const [r5,setR5] = useState(false)
    const [r6,setR6] = useState(false)
    const [r7,setR7] = useState(false)
    const [r8,setR8] = useState(false)
    const [r9,setR9] = useState(false)
    const [r10,setR10] = useState(false)

    const reset = () => {
        setR1(false)
        setR2(false)
        setR3(false)
        setR4(false)
        setR5(false)
        setR6(false)
        setR7(false)
        setR8(false)
        setR9(false)
        setR10(false)
    }

    const handleClick1 = () => {reset();setR1(true);setLine1("Relate");setLine2("관계짓기");}
    const handleClick2 = () => {reset();setR2(true);setLine1("Rethink");setLine2("다시 생각하기");}
    const handleClick3 = () => {reset();setR3(true);setLine1("Refuse");setLine2("거절하기");}
    const handleClick4 = () => {reset();setR4(true);setLine1("Reduce");setLine2("줄이기");}
    const handleClick5 = () => {reset();setR5(true);setLine1("Reuse");setLine2("재사용하기");}
    const handleClick6 = () => {reset();setR6(true);setLine1("Repair");setLine2("수리하기");}
    const handleClick7 = () => {reset();setR7(true);setLine1("Replace");setLine2("교체하기");}
    const handleClick8 = () => {reset();setR8(true);setLine1("Repurpose");setLine2("새 용도찾기");}
    const handleClick9 = () => {reset();setR9(true);setLine1("Rot");setLine2("퇴비화하기");}
    const handleClick10 = () => {reset();setR10(true);setLine1("Recycle");setLine2("재활용하기");}

    const opts = {
        playerVars: {
          autoplay: 1,
        },
    };

    return (
        <div className="index2">
            <div>
                <div className="index2_video">
                    <YouTube videoId="bMM2yjkbdmU" opts={opts} className="index_youtube" />
                </div>
                <div className="index2_star">
                    <div className="index2_star0">
                        <span>{line1}</span>
                        <span>{line2}</span>
                    </div>
                    <div className="index2_star1" onClick={handleClick1}>
                        {
                            r1?<img src="./pics/r1.png" alt="rtende" />:<img src="./pics/R1.svg" alt="rtende" />
                        }
                    </div>
                    <div className="index2_star2" onClick={handleClick2}>
                        {
                            r2?<img src="./pics/r2.png" alt="rtende" />:<img src="./pics/R2.svg" alt="rtende" />
                        }
                    </div>
                    <div className="index2_star3" onClick={handleClick3}>
                        {
                            r3?<img src="./pics/r5.png" alt="rtende" />:<img src="./pics/R3.svg" alt="rtende" />
                        }
                    </div>
                    <div className="index2_star4" onClick={handleClick4}>
                        {
                            r4?<img src="./pics/r4.png" alt="rtende" />:<img src="./pics/R4.svg" alt="rtende" />
                        }
                    </div>
                    <div className="index2_star5" onClick={handleClick5}>
                        {
                            r5?<img src="./pics/r3.png" alt="rtende" />:<img src="./pics/R5.svg" alt="rtende" />
                        }
                    </div>
                    <div className="index2_star6" onClick={handleClick6}>
                        {
                            r6?<img src="./pics/r6.png" alt="rtende" />:<img src="./pics/R6.svg" alt="rtende" />
                        }
                    </div>
                    <div className="index2_star7" onClick={handleClick7}>
                        {
                            r7?<img src="./pics/r7.png" alt="rtende" />:<img src="./pics/R7.svg" alt="rtende" />
                        }
                    </div>
                    <div className="index2_star8" onClick={handleClick8}>
                        {
                            r8?<img src="./pics/r10.png" alt="rtende" />:<img src="./pics/R8.svg" alt="rtende" />
                        }
                    </div>
                    <div className="index2_star9" onClick={handleClick9}>
                        {
                            r9?<img src="./pics/r9.png" alt="rtende" />:<img src="./pics/R9.svg" alt="rtende" />
                        }
                    </div>
                    <div className="index2_star10" onClick={handleClick10}>
                        {
                            r10?<img src="./pics/r8.png" alt="rtende" />:<img src="./pics/R10.svg" alt="rtende" />
                        }
                    </div>
                </div>
                <div className="index2_memo">
                    <span>쓰레기를 발생시키는 플라스틱이나</span>
                    <span>일회용품을 여러번 사용가능하고</span>
                    <span>자연분해되는 소재로 대체해보세요.</span>
                </div>
                <div className="index2_plus">+</div>
                <div className="index_navi">
                    <Link to="/rtende">알-텐데</Link>
                    <Link to="/rtem">알-템</Link>
                    <Link to="/map">알-지도</Link>
                    <Link to="/rka">알-까</Link>
                </div>
            </div>
        </div>
    )
}

export default Index;