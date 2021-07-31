export const timeConverter = (time) => {
    let temp = new Date(time)
    if(time !== undefined){
        let year = temp.getFullYear();
        let month = temp.getMonth();
        let day = temp.getDay();
        let hour = temp.getHours();
        let minute = temp.getMinutes();
        return year + "." + month + "." + day + " " + hour + ":" + minute;
    }
}
export const timeConverter2 = (time) => {
    let temp = new Date(time)
    if(time !== undefined){
        let year = temp.getFullYear();
        let month = temp.getMonth();
        let day = temp.getDay();
        return year + "." + month + "." + day;
    }
}

export const timeConverter3 = (time) => {
    // let temp = new Date(time)
    let temp = new Date(time)
    if(time !== undefined){
        let year = temp.getFullYear();
        let month = temp.getMonth();
        let day = temp.getDay();
        let hour = temp.getHours();
        let minute = temp.getMinutes();
        return year + "-" + month + "-" + day + " " + hour + ":" + minute;
    }
}

export const yyyymmdd = (time) => {
    let temp = new Date(time)
    if(time !== undefined){
        let t = temp.toString();
        let array = t.split(" ");
        let month = "";
        if(array[1]==="Jan"){
            month=1
        }else if(array[1]==="Feb"){
            month=2
        }else if(array[1]==="Mar"){
            month=3
        }else if(array[1]==="Apr"){
            month=4
        }else if(array[1]==="May"){
            month=5
        }else if(array[1]==="Jun"){
            month=6
        }else if(array[1]==="Jul"){
            month=7
        }else if(array[1]==="Aug"){
            month=8
        }else if(array[1]==="Sep"){
            month=9
        }else if(array[1]==="Oct"){
            month=10
        }else if(array[1]==="Nov"){
            month=11
        }else if(array[1]==="Dec"){
            month=12
        }else if(array[1]==="Sept"){
            month=9
        }
        return array[3] + "." + month + "." + array[2];
    }
}

export const yyyymmddT = (time) => {
    let temp = new Date(time)
    if(time !== undefined){
        let t = temp.toString();
        let array = t.split(" ");
        let month = "";
        if(array[1]==="Jan"){
            month=1
        }else if(array[1]==="Feb"){
            month=2
        }else if(array[1]==="Mar"){
            month=3
        }else if(array[1]==="Apr"){
            month=4
        }else if(array[1]==="May"){
            month=5
        }else if(array[1]==="Jun"){
            month=6
        }else if(array[1]==="Jul"){
            month=7
        }else if(array[1]==="Aug"){
            month=8
        }else if(array[1]==="Sep"){
            month=9
        }else if(array[1]==="Oct"){
            month=10
        }else if(array[1]==="Nov"){
            month=11
        }else if(array[1]==="Dec"){
            month=12
        }else if(array[1]==="Sept"){
            month=9
        }
        return array[3] + "-" + month + "-" + array[2] + " " + array[4];
    }
}