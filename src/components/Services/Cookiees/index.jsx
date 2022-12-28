import Cookies from 'universal-cookie';
const cookies = new Cookies();
export const SetCookie = (cname, cvalue, path) => {
      cookies.set(cname, cvalue, { path });
}
export const DeleteCookie =(cname)=>{
    return cookies.remove(cname)
}
export const GetCookie = (cname)=>{
    return cookies.get(cname)
}
