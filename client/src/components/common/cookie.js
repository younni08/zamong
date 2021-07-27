export const getCookie = (name) => {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}

export const cutToken = (token) => {
    if(token === null){
        return undefined
    }else{
        let temp_token = token;
        let getdot = temp_token.indexOf(".")
        let getdot2 = temp_token.lastIndexOf(".")
        let info = temp_token.substring(getdot+1,getdot2);
        let info2 = atob(info)
        let getdot3 = info2.indexOf('user_pk":"');
        let getdot4 = info2.lastIndexOf('","iat');
        let user_id = info2.substring(getdot3+10,getdot4);
        return user_id;
    }
}

export const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}