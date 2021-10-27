import React, { useState } from "react"

const Rtende = () => {
    const [rtype,setRtype] = useState(1)

    const handleClick = (e) => {
        setRtype(Number(e.currentTarget.getAttribute("id").split("rtende")[1]))
    }

    const hitest = () => {
        document.getElementById("temp2").style.opacity="1";
    }
    const hitest2 = () => {
        document.getElementById("temp3").style.opacity="1";
    }
    const hitest3 = () => {
        document.getElementById("temp2").style.opacity="0";
    }
    const hitest4 = () => {
        document.getElementById("temp2").style.opacity="1";
    }

    return(
        <div className="rtende">
            <div>
                <div className="rtende_navi">
                    <span>알-텐데</span>
                    {/* <span>< i className="xi-caret-down-min"></i></span> */}
                </div>
                <div className="rtende_main">
                    <div className="rtende_subnavi">
                        <div id="rtende1" onClick={handleClick}>
                            <img src="./pics/r1reverse.png" alt="rtede reverse" />
                            <span>관계짓기</span>
                        </div>
                        <div id="rtende2" onClick={handleClick}>
                            <img src="./pics/r2reverse.png" alt="rtede reverse" />
                            <span>다시 생각하기</span>
                        </div>
                        <div id="rtende3" onClick={handleClick}>
                            <img src="./pics/r3reverse.png" alt="rtede reverse" />
                            <span>거절하기</span>
                        </div>
                        <div id="rtende4" onClick={handleClick}>
                            <img src="./pics/r4reverse.png" alt="rtede reverse" />
                            <span>줄이기</span>
                        </div>
                        <div id="rtende5" onClick={handleClick}>
                            <img src="./pics/r5reverse.png" alt="rtede reverse" />
                            <span>재사용하기</span>
                        </div>
                        <div id="rtende6" onClick={handleClick}>
                            <img src="./pics/r6reverse.png" alt="rtede reverse" />
                            <span>수리하기</span>
                        </div>
                        <div id="rtende7" onClick={handleClick}>
                            <img src="./pics/r7reverse.png" alt="rtede reverse" />
                            <span>교체하기</span>
                        </div>
                        <div id="rtende8" onClick={handleClick}>
                            <img src="./pics/r8reverse.png" alt="rtede reverse" />
                            <span>새 용도찾기</span>
                        </div>
                        <div id="rtende9" onClick={handleClick}>
                            <img src="./pics/r9reverse.png" alt="rtede reverse" />
                            <span>퇴비화하기</span>
                        </div>
                        <div id="rtende10" onClick={handleClick}>
                            <img src="./pics/r10reverse.png" alt="rtede reverse" />
                            <span>재활용하기</span>
                        </div>
                    </div>
                    <div className="rtende_display">
                        {
                            function(rtype){
                                switch(rtype){
                                    case 1:
                                        return (
                                            <img src="./pics/r1.gif" alt="rtende" />
                                        )
                                    case 2:
                                        return (
                                            <img src="./pics/r2.gif" alt="rtende" />
                                        )
                                    case 3:
                                        return (
                                            <img src="./pics/r3.gif" alt="rtende" />
                                        )
                                    case 4:
                                        return (
                                            <img src="./pics/r4.gif" alt="rtende" />
                                        )
                                    case 5:
                                        return (
                                            <img src="./pics/r5.gif" alt="rtende" />
                                        )
                                    case 6:
                                        return (
                                            <img src="./pics/r6.gif" alt="rtende" />
                                        )
                                    case 7:
                                        return (
                                            <img src="./pics/r7.gif" alt="rtende" />
                                        )
                                    case 8:
                                        return (
                                            <img src="./pics/r8.gif" alt="rtende" />
                                        )
                                    case 9:
                                        return (
                                            <img src="./pics/r9.gif" alt="rtende" />
                                        )
                                    case 10:
                                        return (
                                            <img src="./pics/r10.gif" alt="rtende" />
                                        )
                                    
                                    default :
                                        return (
                                            <img src="./pics/r1.gif" alt="rtende" />
                                        )
                                }
                            }(rtype)
                        }
                    </div>
                    {
                        function(rtype){
                            switch(rtype){
                                case 1:
                                    return (
                                        <Rtende1 />
                                    )
                                case 2:
                                    return (
                                        <Rtende2 />
                                    )
                                case 3:
                                    return (
                                        <Rtende3 />
                                    )
                                case 4:
                                    return (
                                        <Rtende4 />
                                    )
                                case 5:
                                    return (
                                        <Rtende5 />
                                    )
                                case 6:
                                    return (
                                        <Rtende6 />
                                    )
                                case 7:
                                    return (
                                        <Rtende7 />
                                    )
                                case 8:
                                    return (
                                        <Rtende8 />
                                    )
                                case 9:
                                    return (
                                        <Rtende9 />
                                    )
                                case 10:
                                    return (
                                        <Rtende10 />
                                    )
                                
                                default :
                                    return (
                                        <Rtende1 />
                                    )
                            }
                        }(rtype)
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Rtende;

const Rtende1 = () => {
    return (
        <div className="rtende_info">
            <div>
                <div>
                    <img src="./pics/r1.png" alt="rtende symbol" />
                </div>
                <span>Relate</span>
                <span>관계짓기</span>
            </div>
            <div>
                <span>우리는 끊임없이 소비를 합니다. 소비하지 않는 삶은 쉽지 않지만 
                적게 소비하는 삶은 어떤가요? 어떤 물건이 아동, 여성, 노인, 
                장애인의 노동을 착취하여 만들어진다면 구매할 수 있나요? 
                기후위기, 해양쓰레기, 미세플라스틱, 환경호르몬은 내 삶의 어느 
                부분과 맞닿아 있을까요? 내가 버린 쓰레기가 과연 재활용이 
                제대로 되고 있을까요? 친환경 생활의 시작은 소비할 때 환경, 
                물건, 이웃, 사회 등의 주변과 관계를 고민하는 것에서 시작할 수 
                있습니다</span>
            </div>
        </div>
    )
}
const Rtende2 = () => {
    return (
        <div className="rtende_info">
            <div>
                <div>
                    <img src="./pics/r2.png" alt="rtende symbol" />
                </div>
                <span>Rethink</span>
                <span>다시 생각하기</span>
            </div>
            <div>
                <span>꼭 필요한 것인지생각해볼까요? 비슷한 물건을 가지고 있지 않나요?</span>
                <span>그 물건을 사면 얼마나 많은 쓰레기가 만들어질 수 있는지 
                생각해볼까요? 그 물건을 사기 위해 장바구니, 다회용 용기, 
                공동구매 등 쓰레기를 적게 만드는 방식으로 구매할 수 있는 
                방법을 생각해볼까요</span>
            </div>
        </div>
    )
}
const Rtende3 = () => {
    return (
        <div className="rtende_info">
            <div>
                <div>
                    <img src="./pics/r3.png" alt="rtende symbol" />
                </div>
                <span>Refuse</span>
                <span>거절하기</span>
            </div>
            <div>
                <span>불필요한 것은 거부해볼까요? 나는 과자를 샀지 질소를 산 건 아닙니다. 라는 말처럼. 과포장된 것을 거부해요.</span>
                <span>일회용 빨대, 수저, 젓가락 등은 받지 않는다고 말해보세요. 그리고 다회용품을 사용하는 모습을 보여주세요.</span>
            </div>
        </div>
    )
}
const Rtende4 = () => {
    return (
        <div className="rtende_info">
            <div>
                <div>
                    <img src="./pics/r4.png" alt="rtende symbol" />
                </div>
                <span>Reduce</span>
                <span>줄이기</span>
            </div>
            <div>
                <span>쓰레기 발생량을 줄이는 것입니다</span>
                <span>플라스틱을 덜 사용해서 줄이는 방법을 생각해 볼까요?</span>
                <span>더 적게 사용하거나 또는 대용량으로 구매하여 사용하는 것도 플라스틱을 줄이는 방법입니다</span>
                <span>이웃과 함께 사고 나누는 방법도 좋습니다</span>
            </div>
        </div>
    )
}
const Rtende5 = () => {
    return (
        <div className="rtende_info">
            <div>
                <div>
                    <img src="./pics/r5.png" alt="rtende symbol" />
                </div>
                <span>Reuse</span>
                <span>재사용하기</span>
            </div>
            <div>
                <span>재사용은 용도의 변화를 주지 않고 반복적으로 사용하는 
                것입니다. 불가피하게 일회용 컵을 사용했다면, 그 일회용 컵을 
                계속 쭉 사용하는 것입니다</span>
                <span>하지만 재사용이 가능한 튼튼한 텀블러나 머그컵을 쓰는 편이 좋겠습니다</span>
            </div>
        </div>
    )
}
const Rtende6 = () => {
    return (
        <div className="rtende_info">
            <div>
                <div>
                    <img src="./pics/r6.png" alt="rtende symbol" />
                </div>
                <span>Repair</span>
                <span>수리하기</span>
            </div>
            <div>
                <span>이미 가지고 있는 것을 고치는 일은 쓰레기를 만들지 않는 좋은 
                방법입니다. 우리는 고치기 전에 새로운 것을 사는 일이 
                익숙합니다. 교체하기 전에 수리를 먼저 생각해보는건 
                어떤가요</span>
            </div>
        </div>
    )
}
const Rtende7 = () => {
    return (
        <div className="rtende_info">
            <div>
                <div>
                    <img src="./pics/r7.png" alt="rtende symbol" />
                </div>
                <span>Replace</span>
                <span>교체하기</span>
            </div>
            <div>
                <span>이미 가지고 있는 것을 고치는 일은 쓰레기를 만들지 않는 좋은 
                방법입니다. 우리는 고치기 전에 새로운 것을 사는 일이 
                익숙합니다. 교체하기 전에 수리를 먼저 생각해보는건 
                어떤가요</span>
            </div>
        </div>
    )
}
const Rtende8 = () => {
    return (
        <div className="rtende_info">
            <div>
                <div>
                    <img src="./pics/r8.png" alt="rtende symbol" />
                </div>
                <span>Repurpose</span>
                <span>새 용도찾기</span>
            </div>
            <div>
                <span>원래의 목적에서 벗어난 새로운 용도를 찾는 것입니다. </span>
                <span>버리기 전에 창의력을 발휘해봅시다</span>
                <span>깨진 머그컵에 성인장을, 다 쓴 생수병을 새 먹이대로 쨈이 담겼던 유리컵은 머리끈 보관함으로</span>
            </div>
        </div>
    )
}
const Rtende9 = () => {
    return (
        <div className="rtende_info">
            <div>
                <div>
                    <img src="./pics/r9.png" alt="rtende symbol" />
                </div>
                <span>Rot</span>
                <span>퇴비화하기</span>
            </div>
            <div>
                <span>많은 사람들이 버린 거대한 양의 음식물 쓰레기를 자원으로 
                바꾸는 것은 결코 쉬운 일이 아닙니다. 비닐랩, 병조각 등 
                이물질이 분리하는 과정의 비용, 바이오 매스 생산 비용을 
                생각하면 차라리 매립이 가장 좋습니다. 이마저도 매립을 할 수 
                있는 땅을 찾기 어렵네요. 게다가 큰 비용을 들여 만든 퇴비지만 
                사람들은 기피하며 구매하지 않습니다 </span>
                <span>가정에서 퇴비 만드는 방법을 찾아볼까요?</span>
            </div>
        </div>
    )
}
const Rtende10 = () => {
    return (
        <div className="rtende_info">
            <div>
                <div>
                    <img src="./pics/r10.png" alt="rtende symbol" />
                </div>
                <span>Recycle</span>
                <span>재활용하기</span>
            </div>
            <div>
                <span>재활용은 앞의 R 실천의 가장 마지막 단계로 생각해주세요.</span>
                <span>우리가 버린 쓰레기의 대부분은 너무 작아서 또는 너무 커서, 
                여러 재질이 섞여있거나 너무 더러워서 등의 이유로 필요한 
                물질만 분리하는 비용, 세척, 재가공을 하는 비용이 많이 듭니다.
                </span>
                <span>때문에 많은 경우 소각이나 매립을 합니다. 이전에는 외국에 
                수출하기도 하였지만 이제는 받지 않는 나라가 많아졌습니다.</span>
            </div>
        </div>
    )
}