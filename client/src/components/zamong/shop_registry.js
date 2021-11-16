import React,{useEffect, useState} from "react";
import axios from "axios";
import {getCookie} from "./../common/cookie"
// quill
import ReactQuill,{Quill} from "react-quill";
import 'react-quill/dist/quill.snow.css';
import MongSidenavi from "./mong_sidenavi";

import ImageCompress from 'quill-image-compress';
Quill.register('modules/imageCompress', ImageCompress);

const ShopRegistry = () => {
    const [body,setBody] = useState("");
    const [title,setTitle] = useState("");
    const [tag,setTag] = useState("");
    const [emp,setEmp] = useState("");
    const [kstate,setKstate] = useState("")
    const [kcity,setKcity] = useState("")
    const [citylist,setCitylist] = useState([])
    const [email,setEmail] = useState("")
    const [tel,setTel] = useState("")
    const [addr,setAddr] = useState("")
    const [web,setWeb] = useState("")
    const [location,setLocation] = useState("")
    const [oneline,setOneline] = useState("")
    const [type,setType] = useState("")
    

    const handleBody = (html) => {
        setBody(html)
    }

    const handleOneLIne = (e) => {
        setOneline(e.target.value)
    }

    const handleType = (e) => {
        setType(e.target.value)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleEmp = (e) => {
        setEmp(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleTel = (e) => {
        setTel(e.target.value)
    }
    const handleAddr = (e) => {
        setAddr(e.target.value)
    }
    const handleWeb = (e) => {
        setWeb(e.target.value)
    }
    const handleLocation = (e) => {
        setLocation(e.target.value)
    }
    
    const handleTag = (e) => {
        setTag(e.target.value)
    }

    const [blockClick,setBlockClick] = useState(false)
    const handleFormSubmit = async() => {
        if(blockClick===true) return alert("잠시만 기다려주세요.")
        setBlockClick(true)
        let token = getCookie('token');
        let session = getCookie('session');
        if(token === null||session===null) return alert("로그인 후 이용해주세요.")
        const url = "/api/mong/shop_reg";
        const formData = new FormData();
        const config = {
            headers : {
                "content-type" : "multipart/form-data"
            }
        };
        
        let temphtml = body;
        formData.append("title",title);
        formData.append("tag",tag);
        formData.append("location",location);
        formData.append("web",web);
        formData.append("tel",tel);
        formData.append("addr",addr);
        formData.append("email",email);
        formData.append("kcity",kcity);
        formData.append("kstate",kstate);
        formData.append("oneline",oneline);
        formData.append("type",type);
        formData.append("emp",emp);
        formData.append("content",temphtml);
        formData.append("token",token);
        formData.append("session",session);

        let cover = document.getElementById("mong_shop_image");
        if(cover.files.length!==0&&cover.files.length!==undefined){
            formData.append("cover",cover.files[0])
        }
        
        // for (let p of formData){
        //     console.log(p);
        // }
        let res = await axios.post(url, formData, config);
        console.log(res.data)
        setBlockClick(false)
        if(res.data==="success") return alert("등록되었습니다.")
        if(res.data!=="success") return alert("잘못된 경로입니다.")
    }

    const handleState = (e) => {
        setKstate(e.target.value)
    }
    const handleCity = (e) => {
        setKcity(e.target.value)
    }

    const handleCitylist = () => {
        if(kstate==="state1"){
            let temp = [
                {code:"a1",name:"인제군"},
                {code:"a2",name:"고성군"},
                {code:"a3",name:"속초시"},
                {code:"a4",name:"양영군"},
                {code:"a5",name:"강릉시"},
                {code:"a6",name:"양구군"},
                {code:"a7",name:"평창군"},
                {code:"a8",name:"횡성군"},
                {code:"a9",name:"정선군"},
                {code:"a10",name:"동해시"},
                {code:"a11",name:"태백시"},
                {code:"a12",name:"영월군"},
                {code:"a13",name:"삼척시"},
                {code:"a14",name:"철원군"},
                {code:"a15",name:"원주시"},
                {code:"a16",name:"화천군"},
                {code:"a17",name:"춘천시"},
                {code:"a18",name:"홍천군"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state2"){
            let temp = [
                {code:"b1",name:"김포시"},
                {code:"b2",name:"화성시"},
                {code:"b3",name:"고양시"},
                {code:"b4",name:"광명시"},
                {code:"b5",name:"부천시"},
                {code:"b6",name:"성남시"},
                {code:"b7",name:"의정부시"},
                {code:"b8",name:"하남시"},
                {code:"b9",name:"구리시"},
                {code:"b10",name:"과천시"},
                {code:"b11",name:"안산시"},
                {code:"b12",name:"용인시"},
                {code:"b13",name:"가평군"},
                {code:"b14",name:"안양시"},
                {code:"b15",name:"동두천시"},
                {code:"b16",name:"양주시"},
                {code:"b17",name:"평택시"},
                {code:"b18",name:"안성시"},
                {code:"b19",name:"오산시"},
                {code:"b20",name:"여주군"},
                {code:"b21",name:"이천시"},
                {code:"b22",name:"양편군"},
                {code:"b23",name:"파주시"},
                {code:"b24",name:"연천군"},
                {code:"b25",name:"성남시"},
                {code:"b26",name:"수원시"},
                {code:"b27",name:"군포시"},
                {code:"b28",name:"포천시"},
                {code:"b29",name:"광주시"},
                {code:"b30",name:"시흥시"},
                {code:"b31",name:"남양주시"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state3"){
            let temp = [
                {code:"c1",name:"남해군"},
                {code:"c2",name:"거제시"},
                {code:"c3",name:"통영시"},
                {code:"c4",name:"의령군"},
                {code:"c5",name:"함안군"},
                {code:"c6",name:"합천군"},
                {code:"c7",name:"진주시"},
                {code:"c8",name:"밀양시"},
                {code:"c9",name:"산청군"},
                {code:"c10",name:"거창군"},
                {code:"c11",name:"창녕군"},
                {code:"c12",name:"함양군"},
                {code:"c13",name:"고성군"},
                {code:"c14",name:"김해시"},
                {code:"c15",name:"양산시"},
                {code:"c16",name:"창원시"},
                {code:"c17",name:"하동군"},
                {code:"c18",name:"사천시"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state4"){
            let temp = [
                {code:"d1",name:"울릉군"},
                {code:"d2",name:"의성군"},
                {code:"d3",name:"영양군"},
                {code:"d4",name:"구미시"},
                {code:"d5",name:"경산시"},
                {code:"d6",name:"영덕군"},
                {code:"d7",name:"포항시"},
                {code:"d8",name:"군위군"},
                {code:"d9",name:"안동시"},
                {code:"d10",name:"영천시"},
                {code:"d11",name:"예천군"},
                {code:"d12",name:"청송군"},
                {code:"d13",name:"김천시"},
                {code:"d14",name:"칠곡군"},
                {code:"d15",name:"청도군"},
                {code:"d16",name:"경주시"},
                {code:"d17",name:"상주시"},
                {code:"d18",name:"영주시"},
                {code:"d19",name:"울진군"},
                {code:"d20",name:"봉화군"},
                {code:"d21",name:"문경시"},
                {code:"d22",name:"성주군"},
                {code:"d23",name:"고령군"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state5"){
            let temp = [
                {code:"e1",name:"서구"},
                {code:"e2",name:"광산구"},
                {code:"e3",name:"북구"},
                {code:"e4",name:"남구"},
                {code:"e5",name:"동구"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state6"){
            let temp = [
                {code:"f1",name:"서구"},
                {code:"f2",name:"남구"},
                {code:"f3",name:"북구"},
                {code:"f4",name:"달서구"},
                {code:"f5",name:"달성군"},
                {code:"f6",name:"동구"},
                {code:"f7",name:"수성구"},
                {code:"f8",name:"중구"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state7"){
            let temp = [
                {code:"g1",name:"유성구"},
                {code:"g2",name:"대덕구"},
                {code:"g3",name:"서구"},
                {code:"g4",name:"중구"},
                {code:"g5",name:"동구"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state8"){
            let temp = [
                {code:"h1",name:"서대문구"},
                {code:"h2",name:"마포구"},
                {code:"h3",name:"중구"},
                {code:"h4",name:"광진구"},
                {code:"h5",name:"종로구"},
                {code:"h6",name:"용산구"},
                {code:"h7",name:"동대문구"},
                {code:"h8",name:"중랑구"},
                {code:"h9",name:"성동구"},
                {code:"h10",name:"동작구"},
                {code:"h11",name:"양천구"},
                {code:"h12",name:"성북구"},
                {code:"h13",name:"영등포구"},
                {code:"h14",name:"서초구"},
                {code:"h15",name:"금천구"},
                {code:"h16",name:"관악구"},
                {code:"h17",name:"노원구"},
                {code:"h18",name:"강동구"},
                {code:"h19",name:"송파구"},
                {code:"h20",name:"구로구"},
                {code:"h21",name:"강남구"},
                {code:"h22",name:"도봉구"},
                {code:"h23",name:"강북구"},
                {code:"h24",name:"은평구"},
                {code:"h25",name:"강서구"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state9"){
            let temp = [
                {code:"i1",name:"연서면"},
                {code:"i2",name:"연기면"},
                {code:"i3",name:"조치원읍"},
                {code:"i4",name:"연동면"},
                {code:"i5",name:"세종시"},
                {code:"i6",name:"전동면"},
                {code:"i7",name:"부강면"},
                {code:"i8",name:"금남면"},
                {code:"i9",name:"전의면"},
                {code:"i10",name:"소정면"},
                {code:"i11",name:"장군면"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state10"){
            let temp = [
                {code:"j1",name:"중구"},
                {code:"j2",name:"북구"},
                {code:"j3",name:"동구"},
                {code:"j4",name:"울주군"},
                {code:"j5",name:"남구"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state11"){
            let temp = [
                {code:"k1",name:"강화군"},
                {code:"k2",name:"옹진군"},
                {code:"k3",name:"중구"},
                {code:"k4",name:"부평구"},
                {code:"k5",name:"계양구"},
                {code:"k6",name:"동구"},
                {code:"k7",name:"남구"},
                {code:"k8",name:"남동구"},
                {code:"k9",name:"연제구"},
                {code:"k10",name:"서구"}                
            ]
            setCitylist(temp)
        }
        if(kstate==="state12"){
            let temp = [
                {code:"l1",name:"서구"},
                {code:"l2",name:"동구"},
                {code:"l3",name:"사상구"},
                {code:"l4",name:"연제구"},
                {code:"l5",name:"금정구"},
                {code:"l6",name:"수영구"},
                {code:"l7",name:"부산진구"},
                {code:"l8",name:"남구"},
                {code:"l9",name:"동래구"},
                {code:"l10",name:"해운대구"},
                {code:"l11",name:"기장군"},
                {code:"l12",name:"중구"},
                {code:"l13",name:"사하구"},
                {code:"l14",name:"북구"},
                {code:"l15",name:"강서구"},
                {code:"l16",name:"영도구"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state13"){
            let temp = [
                {code:"m1",name:"진도군"},
                {code:"m2",name:"완도군"},
                {code:"m3",name:"무안군"},
                {code:"m4",name:"영암군"},
                {code:"m5",name:"함평군"},
                {code:"m6",name:"담양군"},
                {code:"m7",name:"화순군"},
                {code:"m8",name:"나주시"},
                {code:"m9",name:"광양시"},
                {code:"m10",name:"순천시"},
                {code:"m11",name:"구례군"},
                {code:"m12",name:"곡성군"},
                {code:"m13",name:"영광군"},
                {code:"m14",name:"고흥군"},
                {code:"m15",name:"장흥군"},
                {code:"m16",name:"보성군"},
                {code:"m17",name:"여수시"},
                {code:"m18",name:"신안군"},
                {code:"m19",name:"장성군"},
                {code:"m20",name:"강진군"},
                {code:"m21",name:"해남군"},
                {code:"m22",name:"목포시"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state14"){
            let temp = [
                {code:"n1",name:"김제시"},
                {code:"n2",name:"군산시"},
                {code:"n3",name:"익산시"},
                {code:"n4",name:"전주시"},
                {code:"n5",name:"진안군"},
                {code:"n6",name:"완주군"},
                {code:"n7",name:"임실군"},
                {code:"n8",name:"부안군"},
                {code:"n9",name:"남원시"},
                {code:"n10",name:"고창군"},
                {code:"n11",name:"무주군"},
                {code:"n12",name:"장수군"},
                {code:"n13",name:"순창군"},
                {code:"n14",name:"정읍시"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state15"){
            let temp = [
                {code:"o1",name:"제주시"},
                {code:"o2",name:"한경면"},
                {code:"o3",name:"한림읍"},
                {code:"o4",name:"애월읍"},
                {code:"o5",name:"조천읍"},
                {code:"o6",name:"구좌읍"},
                {code:"o7",name:"남원읍"},
                {code:"o8",name:"서귀포시"},
                {code:"o9",name:"표선면"},
                {code:"o10",name:"성산읍"},
                {code:"o11",name:"중문"},
                {code:"o12",name:"대정읍"},
                {code:"o13",name:"안덕면"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state16"){
            let temp = [
                {code:"p1",name:"예산군"},
                {code:"p2",name:"금산군"},
                {code:"p3",name:"아산기"},
                {code:"p4",name:"당진시"},
                {code:"p5",name:"계룡시"},
                {code:"p6",name:"서산시"},
                {code:"p7",name:"논산시"},
                {code:"p8",name:"서천군"},
                {code:"p9",name:"부여군"},
                {code:"p10",name:"청양군"},
                {code:"p11",name:"홍성군"},
                {code:"p12",name:"보령시"},
                {code:"p13",name:"공주시"},
                {code:"p14",name:"천안시"},
                {code:"p15",name:"태안군"}
            ]
            setCitylist(temp)
        }
        if(kstate==="state17"){
            let temp = [
                {code:"q1",name:"괴산군"},
                {code:"q2",name:"증평군"},
                {code:"q3",name:"제천시"},
                {code:"q4",name:"충주시"},
                {code:"q5",name:"보은군"},
                {code:"q6",name:"옥천군"},
                {code:"q7",name:"단양군"},
                {code:"q8",name:"영동군"},
                {code:"q9",name:"진천군"},
                {code:"q10",name:"음성군"},
                {code:"q11",name:"청주시"}
            ]
            setCitylist(temp)
        }
    }

    useEffect(()=>{
        if(kstate==="") return 0
        handleCitylist()
    },[kstate])

    return (
        <div className="mong">
            <MongSidenavi />
            <div className="mong_body">
                <div>
                    <div className="mong_item">
                        <span>*는 필수 항목입니다.</span>
                        <div>
                            <div className="mong_item_manager3">
                                <div className="mong_item_general">
                                    <div>
                                        <span>상점 이름*</span>
                                        <span></span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handleTitle} />
                                    </div>
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>커버 이미지*</span>
                                        <span></span>
                                    </div>
                                    <div className="general_input">
                                        <input type="file" className="image" id="mong_shop_image" />
                                    </div>
                                </div>
                            </div>
                            <div className="mong_item_manager3">
                                <div className="mong_item_general">
                                    <div>
                                        <span>광역시도*</span>
                                        <span>예) 충청남도</span>
                                    </div>
                                    <div className="general_input">
                                        <select onChange={handleState}>
                                            <option value="state1">강원도</option>
                                            <option value="state2">경기도</option>
                                            <option value="state3">경상남도</option>
                                            <option value="state4">경상북도</option>
                                            <option value="state5">광주</option>
                                            <option value="state6">대구</option>
                                            <option value="state7">대전</option>
                                            <option value="state8">서울</option>
                                            <option value="state9">세종</option>
                                            <option value="state10">울산</option>
                                            <option value="state11">인천</option>
                                            <option value="state12">부산</option>
                                            <option value="state13">전라남도</option>
                                            <option value="state14">전라북도</option>
                                            <option value="state15">제주도</option>
                                            <option value="state16">충청남도</option>
                                            <option value="state17">충청북도</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>시군구*</span>
                                        <span>예) 서천군</span>
                                    </div>
                                    <div className="general_input">
                                        <select onChange={handleCity}>
                                            {
                                                citylist?citylist.map(c=>{
                                                    return (
                                                        <option key={c.name} value={c.code} >{c.name}</option>
                                                    )
                                                }):<option></option>
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="mong_item_manager3">
                                <div className="mong_item_general">
                                    <div>
                                        <span>한줄 소개*</span>
                                        <span></span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handleOneLIne} />
                                    </div>
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>종류</span>
                                        <span>서제, 화장품, 곡류, 팝업, 반려, 비건, 무포장, 공작소 중 택 1</span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handleType} />
                                    </div>
                                </div>
                            </div>
                            <div className="mong_item_manager3">
                                <div className="mong_item_general">
                                    <div>
                                        <span>전화번호*</span>
                                        <span>,로 분리해주세요</span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handleTel} />
                                    </div>
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>이메일*</span>
                                        <span>,로 분리해주세요</span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handleEmail} />
                                    </div>
                                </div>
                            </div>
                            <div className="mong_item_manager4">
                                <div className="mong_item_general">
                                    <div>
                                        <span>주소*</span>
                                        <span>,로 분리해주세요</span>
                                    </div>
                                    <div className="general_input2">
                                        <input type="text" onChange={handleAddr} />
                                    </div>
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>위치 좌표*</span>
                                        <span>,로 분리해주세요</span>
                                    </div>
                                    <div className="general_input2">
                                        <input type="text" onChange={handleLocation} />
                                    </div>
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>웹 페이지*</span>
                                        <span>,로 분리해주세요</span>
                                    </div>
                                    <div className="general_input2">
                                        <input type="text" onChange={handleWeb} />
                                    </div>
                                </div>
                            </div>
                            <div className="mong_item_manager3">
                                <div className="mong_item_general">
                                    <div>
                                        <span>태그*</span>
                                        <span>,로 분리해주세요</span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handleTag} />
                                    </div>
                                </div>
                                <div className="mong_item_general">
                                    <div>
                                        <span>강조*</span>
                                        <span>,로 분리해주세요</span>
                                    </div>
                                    <div className="general_input">
                                        <input type="text" onChange={handleEmp} />
                                    </div>
                                </div>
                            </div>
                            <div className="mong_write_article">
                                <ReactQuill 
                                    onChange={handleBody}
                                    modules={{
                                        toolbar: {
                                            container: [
                                                [{ header: [1,2,false]}],
                                                ['bold', 'italic', 'underline'],
                                                [{ color: [] }, { background: [] }],
                                                [{ list: 'ordered' }, { list: 'bullet' }]
                                            ]
                                        }
                                    }}
                                />
                            </div>
                            <div className="mong_item_general_submit">
                                <span onClick={handleFormSubmit}>입력하기</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopRegistry