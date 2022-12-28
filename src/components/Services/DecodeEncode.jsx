import jwt_decode from "jwt-decode";


const decodeJwt = (token) => { 
    console.log(token);
    return jwt_decode(token);
}

const getTokenExpirationDate = (profile) => {
    const date = profile.exp; 
    if (!date) {
        return null;
    } 
    const dateUtc = new Date(date).getTime();
    var d = new Date(dateUtc);
    d.setUTCSeconds(dateUtc);

    return new Date(date);
}

const isTokenExpired = (profile) => {
    const date = getTokenExpirationDate(profile);
  
    const exp = date.valueOf() 
    if (exp < new Date().getTime() / 1000) {
        return true
    } else {
        return false
    }
}


export { decodeJwt, isTokenExpired };