import axios from "axios"

export const getimage = async(key,type) => {
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
    console.log(type)
    let res = await axios.post(url,params,config);
    if(res.data!=="fail"){
        let ttt = '<img src="data:'+type.replace("#",'').replace(",",'')+';base64,'+ res.data + '">'
        return (ttt)
    }else{
        return false
    }
}
