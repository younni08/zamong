import axios from "axios";
import React,{useState} from "react";
import MapNavi from "./map_navi"
import KoreaState from "./list/map16"

const MapState = () => {
    const [expand,setExpand] = useState(false)
    const [email,setEmail] = useState("")
    const [text,setText] = useState("")
    const [state,setState] = useState(1)
    const [click,setClicked] = useState(false)


    const handleExpand = () => {
        if(expand===false){
            document.getElementById("map_expand").style.height="513px";
            setExpand(true)
        }else{
            document.getElementById("map_expand").style.height="0px";
            setExpand(false)
        }
    }

    const mapPop = () => {
        console.log(document.getElementById("map_popupanimation"))
        document.getElementById("map_popupanimation").style.margin="-35vh 0px 0px 0px"
    }

    const oepnRegister = () => {
        window.scroll(0,0)
        document.getElementById("map_register1").style.padding="0px 0px 150vh 0vw"
        document.getElementById("map_register1").style.background="rgba(0,0,0,0.3)"
        document.getElementById("map_register1").style.zIndex="20"
    }

    const closeRegister = () => {
        document.getElementById("map_register1").style.padding="0px 0px 150vh 100vw"
        document.getElementById("map_register1").style.background="none"
        document.getElementById("map_register1").style.zIndex="0"
    }

    const handleInput1 = (e) => {
        return setEmail(e.target.value)
    }
    const handleInput2 = (e) => {
        return setText(e.target.value)
    }

    const register = async() => {
        if(click===true) return alert("잠시만 기다려주세요.")
        setClicked(true)
        let url = "/api/mong/maprequest";
        let location1 = document.getElementById("map_select1").value
        let location2 = document.getElementById("map_select2").value
        let check1 = document.getElementById("map_check1").checked
        if(check1===false){
            setClicked(false)
            return alert("개인정보 제공에 동의 후 진행해주세요.")
        }
        let check2 = document.getElementById("map_check2").checked
        let check3 = document.getElementById("map_check3").checked

        let params = {
            location1:location1,
            location2:location2,
            text:text,
            email:email,
            check1:check2,
            check2:check3
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }

        let res = await axios.post(url,params,config)
        setClicked(false)
        if(res.data==="success") return alert("등록되었습니다.")
        if(res.data!=="success") return alert("잘못된 경로입니다.")
    }

    const handleLocation1 = () => {
        let location1 = document.getElementById("map_select1").value
        if(location1==="서울특별시") return setState(1)
        if(location1==="부산광역시") return setState(2)
        if(location1==="제주특별자치도") return setState(3)
        if(location1==="대구광역시") return setState(4)
        if(location1==="인천광역시") return setState(5)
        if(location1==="광주광역시") return setState(6)
        if(location1==="대전광역시") return setState(7)
        if(location1==="울산광역시") return setState(8)
        if(location1==="세종특별자치시") return setState(9)
        if(location1==="경기도") return setState(10)
        if(location1==="강원도") return setState(11)
        if(location1==="충청남도") return setState(12)
        if(location1==="충청북도") return setState(13)
        if(location1==="전라남도") return setState(14)
        if(location1==="전라북도") return setState(15)
        if(location1==="경상남도") return setState(16)
        if(location1==="경상북도") return setState(17)
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
                <div className="map_main">
                    <div>
                        <span>충청남도</span>
                        <div className="map_state">
                            <KoreaState />
                        </div>
                        <div className="map_popup" onClick={mapPop} id="map_popupanimation">
                            <div>
                                <span>앗, 이런.</span>
                                <span>충청남도에는 제로웨이스트샵이 하나도 없어요</span>
                                <span>우리 지역에도 제로웨이스트샵이 생길 수 있도록 이루자몽에 요청해주세요.</span>
                            </div>
                        </div>
                        <div className="map_main_table">
                            <div className="normal">
                                <span>+</span>
                                <span>매장수</span>
                                <div>
                                    <span>충청남도</span>
                                    <span>/</span>
                                    <span>47</span>
                                </div>
                            </div>
                            <div className="map_list">
                                <div>
                                    <span>+</span>
                                    <div>
                                        <span>요청수</span>
                                        <span>193건</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <span>충청남도</span>
                                        <span>183건</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <span>+</span>
                                <span>지도 공유하기</span>
                                <img src="./pics/kakaotalk.png" alt="share with kakaotalk" />
                            </div>
                        </div>
                        <div className="map_state_level1">
                            <span>제로웨이스트샵이 필요해요</span>
                            <div>
                                <span>플라스틱과 배송 포장을 줄이기 위해서는 제로웨이스트 샵이 필요합니다.</span>
                                <span>내가 사는 지역에 아직 제로웨이스트샵이 없다면 이루자몽에 알려주세요</span>
                                <span>이렇게 모인 정보는 새로운 상점을 계획중인 사장님들께 도움이 될 수 있습니다.</span>
                            </div>
                        </div>
                        <div className="map_state_level2">
                            <span onClick={oepnRegister}>요청하기</span>
                        </div>
                        <div className="map_register" id="map_register1">
                            <div id="map_register2">
                                <div className="map_register_level1">
                                    <span onClick={closeRegister}>
                                        <i className="xi-close xi-x"></i>
                                    </span>
                                </div>
                                <div className="map_register_level2">
                                    <span>제로웨이스트샵이 필요해요</span>
                                </div>
                                <div className="map_register_level3">
                                    <span>내가 사는 곳 가까이 제로웨이스트샵이 생기기 바라거나 [알-지도]에 없는 새로운 매장을 찾았다면 이루자몽에 알려주세요.</span>
                                </div>
                                <div className="map_register_level4">
                                    <input type="checkbox" id="map_check1"/>
                                    <span>개인정보 제공에 동의합니다.</span>
                                </div>
                                <div className="map_register_level5">
                                    <div>
                                        <input type="text" placeholder="E-mail" onChange={handleInput1} />
                                    </div>
                                </div>
                                <div className="map_register_level6">
                                    <div>
                                        <select id="map_select1" onChange={handleLocation1}>
                                            <option value="" selected disabled hidden >지역 선택</option>
                                            <option value="서울특별시">서울특별시</option>
                                            <option value="부산광역시">부산광역시</option>
                                            <option value="제주특별자치도">제주특별자치도</option>
                                            <option value="대구광역시">대구광역시</option>
                                            <option value="인천광역시">인천광역시</option>
                                            <option value="광주광역시">광주광역시</option>
                                            <option value="대전광역시">대전광역시</option>
                                            <option value="울산광역시">울산광역시</option>
                                            <option value="세종특별자치시">세종특별자치시</option>
                                            <option value="경기도">경기도</option>
                                            <option value="강원도">강원도</option>
                                            <option value="충청남도">충청남도</option>
                                            <option value="충청북도">충청북도</option>
                                            <option value="전라남도">전라남도</option>
                                            <option value="전라북도">전라북도</option>
                                            <option value="경상남도">경상남도</option>
                                            <option value="경상북도">경상북도</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select id="map_select2">
                                            < option value="" selected disabled hidden >시/군/구</option>
                                            {
                                                function(s){
                                                    switch(s){
                                                        case 1:
                                                            return(
                                                                <>
                                                                    <option value="강남구">강남구</option>
                                                                    <option value="강동구">강동구</option>
                                                                    <option value="강북구">강북구</option>
                                                                    <option value="강서구">강서구</option>
                                                                    <option value="관악구">관악구</option>
                                                                    <option value="광진구">광진구</option>
                                                                    <option value="구로구">구로구</option>
                                                                    <option value="금천구">금천구</option>
                                                                    <option value="노원구">노원구</option>
                                                                    <option value="도봉구">도봉구</option>
                                                                    <option value="동대문구">동대문구</option>
                                                                    <option value="동작구">동작구</option>
                                                                    <option value="마포구">마포구</option>
                                                                    <option value="서대문구">서대문구</option>
                                                                    <option value="서초구">서초구</option>
                                                                    <option value="성동구">성동구</option>
                                                                    <option value="성북구">성북구</option>
                                                                    <option value="송파구">송파구</option>
                                                                    <option value="양천구">양천구</option>
                                                                    <option value="영등포구">영등포구</option>
                                                                    <option value="용산구">용산구</option>
                                                                    <option value="은평구">은평구</option>
                                                                    <option value="종로구">종로구</option>
                                                                    <option value="중구">중구</option>
                                                                    <option value="중랑구">중랑구</option>
                                                                </>
                                                            );
                                                        case 2:
                                                            return(
                                                                <>
                                                                    <option value="강서구">강서구</option>
                                                                    <option value="금정구">금정구</option>
                                                                    <option value="남구">남구</option>
                                                                    <option value="동구">동구</option>
                                                                    <option value="동래구">동래구</option>
                                                                    <option value="부산진구">부산진구</option>
                                                                    <option value="북구">북구</option>
                                                                    <option value="사상구">사상구</option>
                                                                    <option value="사하구">사하구</option>
                                                                    <option value="서구">서구</option>
                                                                    <option value="수영구">수영구</option>
                                                                    <option value="연제구">연제구</option>
                                                                    <option value="영도구">영도구</option>
                                                                    <option value="중구">중구</option>
                                                                    <option value="해운대구">해운대구</option>
                                                                </>
                                                            );
                                                        case 3:
                                                            return(
                                                                <>
                                                                    <option value="한림읍">한림읍</option>
                                                                    <option value="애월읍">애월읍</option>
                                                                    <option value="구좌읍">구좌읍</option>
                                                                    <option value="조천읍">조천읍</option>
                                                                    <option value="한경면">한경면</option>
                                                                    <option value="추자면">추자면</option>
                                                                    <option value="우도면">우도면</option>
                                                                    <option value="일도1동">일도1동</option>
                                                                    <option value="일도2동">일도2동</option>
                                                                    <option value="이도1동">이도1동</option>
                                                                    <option value="이도2동">이도2동</option>
                                                                    <option value="삼도1동">삼도1동</option>
                                                                    <option value="삼도2동">삼도2동</option>
                                                                    <option value="용담1동">용담1동</option>
                                                                    <option value="용담2동">용담2동</option>
                                                                    <option value="건입동">건입동</option>
                                                                    <option value="화북동">화북동</option>
                                                                    <option value="삼양동">삼양동</option>
                                                                    <option value="봉개동">봉개동</option>
                                                                    <option value="아라동">아라동</option>
                                                                    <option value="오라동">오라동</option>
                                                                    <option value="연동">연동</option>
                                                                    <option value="노형동">노형동</option>
                                                                    <option value="외도동">외도동</option>
                                                                    <option value="이호동">이호동</option>
                                                                    <option value="도두동">도두동</option>
                                                                </>
                                                            );
                                                        case 4:
                                                            return(
                                                                <>
                                                                    <option value="중구">중구</option>
                                                                    <option value="동구">동구</option>
                                                                    <option value="서구">서구</option>
                                                                    <option value="남구">남구</option>
                                                                    <option value="북구">북구</option>
                                                                    <option value="수성구">수성구</option>
                                                                    <option value="달서구">달서구</option>
                                                                </>
                                                            );
                                                        case 5:
                                                            return(
                                                                <>
                                                                    <option value="중구">중구</option>
                                                                    <option value="동구">동구</option>
                                                                    <option value="미추홀구">미추홀구</option>
                                                                    <option value="연수구">연수구</option>
                                                                    <option value="남동구">남동구</option>
                                                                    <option value="부평구">부평구</option>
                                                                    <option value="계양구">계양구</option>
                                                                    <option value="서구">서구</option>
                                                                    <option value="강화군">강화군</option>
                                                                    <option value="옹진군">옹진군</option>
                                                                </>
                                                            );
                                                        case 6:
                                                            return(
                                                                <>
                                                                    <option value="동구">동구</option>
                                                                    <option value="남구">남구</option>
                                                                    <option value="서구">서구</option>
                                                                    <option value="북구">북구</option>
                                                                    <option value="광산구">광산구</option>
                                                                </>
                                                            );
                                                        case 7:
                                                            return(
                                                                <>
                                                                    <option value="중구">중구</option>
                                                                    <option value="동구">동구</option>
                                                                    <option value="서구">서구</option>
                                                                    <option value="유성구">유성구</option>
                                                                    <option value="대덕구">대덕구</option>
                                                                </>
                                                            );
                                                        case 8:
                                                            return(
                                                                <>
                                                                    <option value="중구">중구</option>
                                                                    <option value="남구">남구</option>
                                                                    <option value="동구">동구</option>
                                                                    <option value="북구">북구</option>
                                                                    <option value="울주군">울주군</option>
                                                                </>
                                                            );
                                                        case 9:
                                                            return(
                                                                <>
                                                                    <option value="조치원읍">조치원읍</option>
                                                                    <option value="연기면">연기면</option>
                                                                    <option value="연동면">연동면</option>
                                                                    <option value="부강면">부강면</option>
                                                                    <option value="금남면">금남면</option>
                                                                    <option value="장군면">장군면</option>
                                                                    <option value="연서면">연서면</option>
                                                                    <option value="전의면">전의면</option>
                                                                    <option value="전동면">전동면</option>
                                                                    <option value="소정면">소정면</option>
                                                                    <option value="한솔동">한솔동</option>
                                                                    <option value="새롬동">새롬동</option>
                                                                    <option value="도담동">도담동</option>
                                                                    <option value="아름동">아름동</option>
                                                                    <option value="종촌동">종촌동</option>
                                                                    <option value="고운동">고운동</option>
                                                                    <option value="소담동">소담동</option>
                                                                    <option value="보람동">보람동</option>
                                                                    <option value="대평동">대평동</option>
                                                                    <option value="다정동">다정동</option>
                                                                </>
                                                            );
                                                        case 10:
                                                            return(
                                                                <>
                                                                    <option value="수원시">수원시</option>
                                                                    <option value="성남시">성남시</option>
                                                                    <option value="부천시">부천시</option>
                                                                    <option value="안양시">안양시</option>
                                                                    <option value="만안구">만안구</option>
                                                                    <option value="동안구">동안구</option>
                                                                    <option value="안산시">안산시</option>
                                                                    <option value="상록구">상록구</option>
                                                                    <option value="단원구">단원구</option>
                                                                    <option value="용인시">용인시</option>
                                                                    <option value="처인구">처인구</option>
                                                                    <option value="기흥구">기흥구</option>
                                                                    <option value="수지구">수지구</option>
                                                                    <option value="광명시">광명시</option>
                                                                    <option value="평택시">평택시</option>
                                                                    <option value="과천시">과천시</option>
                                                                    <option value="시흥시">시흥시</option>
                                                                    <option value="군포시">군포시</option>
                                                                    <option value="의왕시">의왕시</option>
                                                                    <option value="오산시">오산시</option>
                                                                    <option value="하남시">하남시</option>
                                                                    <option value="이천시">이천시</option>
                                                                    <option value="김포시">김포시</option>
                                                                    <option value="안성시">안성시</option>
                                                                    <option value="화성시">화성시</option>
                                                                    <option value="광주시">광주시</option>
                                                                    <option value="여주시">여주시</option>
                                                                    <option value="양평군">양평군</option>
                                                                    <option value="의정부시">의정부시</option>
                                                                    <option value="고양시">고양시</option>
                                                                    <option value="덕양구">덕양구</option>
                                                                    <option value="일산동구">일산동구</option>
                                                                    <option value="일산서구">일산서구</option>
                                                                    <option value="동두천시">동두천시</option>
                                                                    <option value="구리시">구리시</option>
                                                                    <option value="남양주시">남양주시</option>
                                                                    <option value="파주시">파주시</option>
                                                                    <option value="양주시">양주시</option>
                                                                    <option value="포천시">포천시</option>
                                                                    <option value="가평군">가평군</option>
                                                                    <option value="연천군">연천군</option>
                                                                </>
                                                            );
                                                        case 11:
                                                            return(
                                                                <>
                                                                    <option value="춘천시">춘천시</option>
                                                                    <option value="원주시">원주시</option>
                                                                    <option value="홍천군">홍천군</option>
                                                                    <option value="횡성군">횡성군</option>
                                                                    <option value="영월군">영월군</option>
                                                                    <option value="평창군">평창군</option>
                                                                    <option value="정선군">정선군</option>
                                                                    <option value="철원군">철원군</option>
                                                                    <option value="화천군">화천군</option>
                                                                    <option value="양구군">양구군</option>
                                                                    <option value="인제군">인제군</option>
                                                                    <option value="강릉시">강릉시</option>
                                                                    <option value="속초시">속초시</option>
                                                                    <option value="동해시">동해시</option>
                                                                    <option value="태백시">태백시</option>
                                                                    <option value="삼척시">삼척시</option>
                                                                    <option value="고성군">고성군</option>
                                                                    <option value="양양군">양양군</option>
                                                                </>
                                                            );
                                                        case 12:
                                                            return(
                                                                <>
                                                                    <option value="천안시">천안시</option>
                                                                    <option value="자치시">자치시</option>
                                                                    <option value="아산시">아산시</option>
                                                                    <option value="서산시">서산시</option>
                                                                    <option value="당진시">당진시</option>
                                                                    <option value="공주시">공주시</option>
                                                                    <option value="보령시">보령시</option>
                                                                    <option value="논산시">논산시</option>
                                                                    <option value="계룡시">계룡시</option>
                                                                    <option value="자치군">자치군</option>
                                                                    <option value="홍성군">홍성군</option>
                                                                    <option value="예산군">예산군</option>
                                                                    <option value="부여군">부여군</option>
                                                                    <option value="서천군">서천군</option>
                                                                    <option value="청양군">청양군</option>
                                                                    <option value="태안군">태안군</option>
                                                                    <option value="금산군">금산군</option>
                                                                </>
                                                            );
                                                        case 13:
                                                            return(
                                                                <>
                                                                    <option value="청주시">청주시</option>
                                                                    <option value="충주시">충주시</option>
                                                                    <option value="제천시">제천시</option>
                                                                    <option value="보은군">보은군</option>
                                                                    <option value="옥천군">옥천군</option>
                                                                    <option value="영동군">영동군</option>
                                                                    <option value="진천군">진천군</option>
                                                                    <option value="음성군">음성군</option>
                                                                    <option value="괴산군">괴산군</option>
                                                                    <option value="단양군">단양군</option>
                                                                    <option value="증평군">증평군</option>
                                                                </>
                                                            );
                                                            case 14:
                                                                return(
                                                                    <>
                                                                        <option value="목포시">목포시</option>
                                                                        <option value="여수시">여수시</option>
                                                                        <option value="순천시">순천시</option>
                                                                        <option value="나주시">나주시</option>
                                                                        <option value="광양시">광양시</option>
                                                                        <option value="담양군">담양군</option>
                                                                        <option value="곡성군">곡성군</option>
                                                                        <option value="구례군">구례군</option>
                                                                        <option value="고흥군">고흥군</option>
                                                                        <option value="보성군">보성군</option>
                                                                        <option value="화순군">화순군</option>
                                                                        <option value="장흥군">장흥군</option>
                                                                        <option value="강진군">강진군</option>
                                                                        <option value="해남군">해남군</option>
                                                                        <option value="영암군">영암군</option>
                                                                        <option value="무안군">무안군</option>
                                                                        <option value="함평군">함평군</option>
                                                                        <option value="영광군">영광군</option>
                                                                        <option value="장성군">장성군</option>
                                                                        <option value="완도군">완도군</option>
                                                                        <option value="진도군">진도군</option>
                                                                        <option value="신안군">신안군</option>
                                                                    </>
                                                                );
                                                            case 15:
                                                                return(
                                                                    <>
                                                                        <option value="전주시">전주시</option>
                                                                        <option value="군산시">군산시</option>
                                                                        <option value="익산시">익산시</option>
                                                                        <option value="정읍시">정읍시</option>
                                                                        <option value="남원시">남원시</option>
                                                                        <option value="김제시">김제시</option>
                                                                        <option value="완주군">완주군</option>
                                                                        <option value="진안군">진안군</option>
                                                                        <option value="무주군">무주군</option>
                                                                        <option value="장수군">장수군</option>
                                                                        <option value="임실군">임실군</option>
                                                                        <option value="순창군">순창군</option>
                                                                        <option value="고창군">고창군</option>
                                                                        <option value="부안군">부안군</option>
                                                                    </>
                                                                );
                                                            case 16:
                                                                return(
                                                                    <>
                                                                        <option value="창원시">창원시</option>
                                                                        <option value="진해구">진해구</option>
                                                                        <option value="진주시">진주시</option>
                                                                        <option value="김해시">김해시</option>
                                                                        <option value="양산시">양산시</option>
                                                                        <option value="거제시">거제시</option>
                                                                        <option value="통영시">통영시</option>
                                                                        <option value="사천시">사천시</option>
                                                                        <option value="밀양시">밀양시</option>
                                                                        <option value="의령군">의령군</option>
                                                                        <option value="함안군">함안군</option>
                                                                        <option value="창녕군">창녕군</option>
                                                                        <option value="고성군">고성군</option>
                                                                        <option value="남해군">남해군</option>
                                                                        <option value="하동군">하동군</option>
                                                                        <option value="산청군">산청군</option>
                                                                        <option value="함양군">함양군</option>
                                                                        <option value="거창군">거창군</option>
                                                                        <option value="합천군">합천군</option>
                                                                    </>
                                                                );
                                                            case 17:
                                                                return(
                                                                    <>
                                                                        <option value="포항시"></option>
                                                                        <option value="경주시"></option>
                                                                        <option value="안동시"></option>
                                                                        <option value="김천시"></option>
                                                                        <option value="구미시"></option>
                                                                        <option value="영주시"></option>
                                                                        <option value="영천시"></option>
                                                                        <option value="상주시"></option>
                                                                        <option value="문경시"></option>
                                                                        <option value="경산시"></option>
                                                                        <option value="군위군"></option>
                                                                        <option value="의성군"></option>
                                                                        <option value="청송군"></option>
                                                                        <option value="영양군"></option>
                                                                        <option value="영덕군"></option>
                                                                        <option value="청도군"></option>
                                                                        <option value="고령군"></option>
                                                                        <option value="성주군"></option>
                                                                        <option value="칠곡군"></option>
                                                                        <option value="예천군"></option>
                                                                        <option value="봉화군"></option>
                                                                        <option value="울진군"></option>
                                                                        <option value="울릉군"></option>
                                                                    </>
                                                                );
                                                            default:
                                                                return(
                                                                <>
                                                                <option value=""></option>
                                                                    <option value="강남구">강남구</option>
                                                                    <option value="강동구">강동구</option>
                                                                    <option value="강북구">강북구</option>
                                                                    <option value="강서구">강서구</option>
                                                                    <option value="관악구">관악구</option>
                                                                    <option value="광진구">광진구</option>
                                                                    <option value="구로구">구로구</option>
                                                                    <option value="금천구">금천구</option>
                                                                    <option value="노원구">노원구</option>
                                                                    <option value="도봉구">도봉구</option>
                                                                    <option value="동대문구">동대문구</option>
                                                                    <option value="동작구">동작구</option>
                                                                    <option value="마포구">마포구</option>
                                                                    <option value="서대문구">서대문구</option>
                                                                    <option value="서초구">서초구</option>
                                                                    <option value="성동구">성동구</option>
                                                                    <option value="성북구">성북구</option>
                                                                    <option value="송파구">송파구</option>
                                                                    <option value="양천구">양천구</option>
                                                                    <option value="영등포구">영등포구</option>
                                                                    <option value="용산구">용산구</option>
                                                                    <option value="은평구">은평구</option>
                                                                    <option value="종로구">종로구</option>
                                                                    <option value="중구">중구</option>
                                                                    <option value="중랑구">중랑구</option>
                                                                </>
                                                            );
                                                    }

                                                }(state)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="map_register_level7">
                                    <input type="checkbox" id="map_check2" />
                                    <span>제로웨이트스얍을 희망합니다</span>
                                </div>
                                <div className="map_register_level7">
                                    <input type="checkbox" id="map_check3"/>
                                    <span>우리 지역의 제로웨이스트샵을 소개합니다</span>
                                </div>
                                <div className="map_register_level8">
                                    <div>
                                        <textarea placeholder="요청사항" onChange={handleInput2} />
                                    </div>
                                </div>
                                <div className="map_register_level9">
                                    <span onClick={register}>요청 보내기</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapState;