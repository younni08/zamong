import axios from "axios";
import React, { useEffect,useState } from "react";
import {Link} from "react-router-dom"
import parser from "html-react-parser"
import {yyyymmdd} from "./../common/dateReturn"
import Qrcode from "qrcode.react";
import { KakaoLinkDefault } from "react-kakao-link"

const Article = () => {
    const [info,setInfo] = useState([])
    const [tag,setTag] = useState([])
    const [content,setContent] = useState("")
    const [list,setList] = useState([])
    const [page,setPage] = useState(1)
    const [loading,setLoading] = useState(false)
    const [vote,setVote] = useState(0)
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
        setLoading(false)
        let url = "/api/mong/getArticle";
        let getpk = window.location.href.split("article?a=")[1]
        let params = {
            article_pk:getpk
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data==="fail") return alert("잘못된 접근입니다.")
        setInfo(res.data)
        setVote(res.data.rka_vote)
        // tag array로 변환해야함
        setTag([res.data.rka_tag])
        getImage(res.data.rka_cover_key,res.data.rka_cover_key)

        if(res.data.rka_image_cnt > 0){
            let temp_content = res.data.rka_content
            let url3 = "/api/mong/singleimage";
            let img_count = res.data.rka_image_cnt;
            let img_keys = res.data.rka_image_key;
            let img_types = res.data.rka_image_type;
            // let imageArray = [];
            let ttt = "";
            for(let i=0;i<img_count;i++){
                let temp0 = img_keys.split(",")[i];
                let temp1 = img_types.split(",")[i];
                let type = temp1.split('"')[1];
                let key = temp0.split('"')[1];
                let params3 = {
                    key:key,
                }
                let res3 = await axios.post(url3,params3,config);
                let imgtag = ""
                if(res3.data!=="fail"){
                    imgtag = "<img src='data:" + type + ";base64," + res3.data + "'/>";
                }

                if(i>0){
                    ttt = ttt.replace("#imgLocation"+i,imgtag);
                    setContent(ttt);
                }else{
                    ttt = temp_content.replace("#imgLocation"+i,imgtag);
                    setContent(ttt);
                }
            }
        }else{
            if(res.data.rka_content===undefined){
                setContent("");
                // setRedirect(true);
            }else{
                setContent(res.data.rka_content);
            }
        }
        setLoading(true)
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    const [clicked,setClick] = useState(false)
    const voteup = async() => {
        setClick(true)
        if(clicked===true) return alert("이미 좋아요를 누르셨어요.")
        setVote(vote+1)
        let url = "/api/mong/vote";
        let article_pk = window.location.href.split("article?a=")[1]
        let params = {
            article_pk:article_pk
        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
    }

    const init2 = async() => {
        let url = "/api/mong/getArticles";
        let params = {
            page:1,
            align:"recent",
            cate:"all"

        }
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        let res = await axios.post(url,params,config)
        console.log(res.data)
        if(res.data==="fail") return alert("잘못된 접근입니다.")
        setList(res.data.list)
    }

    useEffect(()=>{
        init()
        init2()
    },[window.location.href])

    // handle image 
    const [sample,setSample] = useState("")
    const getImage = async(key,type) => {
        if(key===undefined) return 0
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
        if(res.data!=="fail"){
            let ttt = '<img src="data:'+type.replace("#",'').replace(",",'')+';base64,'+ res.data + '">'
            setSample(ttt)
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
        <div className="article">
            {
                loading?
                    <div>
                        <div>
                            <span>알-템</span>
                            {/* <span><i className="xi-caret-down-min"></i></span> */}
                        </div>
                        <div className="article_tablet">
                            <div className="article_level1">
                                <div>
                                    <span>알-까 <i className="xi-angle-right-min"></i> {info.rka_cate}</span>
                                </div>
                                <div>
                                    {
                                        sample?parser(sample):""
                                    }
                                </div>
                            </div>
                            <div className="article_level2">
                                <div>
                                    <span>[{info.rka_cate}] {info.rka_title}</span>
                                    <div onClick={voteup}><i className="xi-heart xi-x"></i><span>{vote}</span></div>
                                </div>
                                <span>{yyyymmdd(info.rka_date)}</span>
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
                                <Qrcode value={"https://www.iroozamong.com/#/article?a="+info.rka_pk}
                                    size={100}
                                    id="getqr"
                                    bgColor={"#FFFEF8"}
                                />
                                <span onClick={downloadQR}>QR코드 다운로드</span>
                            </div>
                        </div>
                        <div className="article_level4">
                            <div>
                                <span><i className="xi-plus-min xi-x"></i></span>
                                <span>자료</span>
                                {/* <span>알텐데 소개 영상.pdf</span> */}
                            </div>
                        </div>
                        <div className="article_level3">
                            {
                                parser(content)
                            }
                        </div>
                        <div className="article_level5">
                            <span>작성자 이루자몽</span>
                        </div>
                        <div className="article_level6">
                            {
                                tag?tag.map(c=>{
                                    return(
                                        <span key={c+"tag"}>{c}</span>
                                    )
                                }):""
                            }
                        </div>
                        <div className="board_level3">
                            {
                                list?list.map(c=>{
                                    let temp = "알-템"
                                    if(c.rka_cate!==null&&c.rka_cate.split(",")!==undefined){
                                        if(c.rka_cate.split(",")[0]==="rtende"){
                                            temp="알-텐데"
                                        }
                                        if(c.rka_cate.split(",")[0]==="rtem"){
                                            temp="알-템"
                                        }
                                        if(c.rka_cate.split(",")[0]==="rka"){
                                            temp="알-까"
                                        }
                                        if(c.rka_cate.split(",")[0]==="rmap"){
                                            temp="지-도"
                                        }
                                        if(c.rka_cate.split(",")[0]==="docu"){
                                            temp="자-료"
                                        }
                                    }
                                    return(
                                        <Link to={"/article?a="+c.rka_pk} key={c.rka_pk}>
                                            <span>[{temp}] {c.rka_title}</span>
                                        </Link>
                                    )
                                }):""
                            }
                            <div>
                                <span onClick={nextPage}><i className="xi-angle-down-thin xi-2x"></i></span>
                            </div>
                        </div>
                    </div>
                :<span>Loading...</span>
            }
        </div>
    )
}

export default Article;