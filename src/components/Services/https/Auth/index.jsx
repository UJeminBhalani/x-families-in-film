import { authForgetPassword, checkLinkExpiration, authResetPassword,getEmployerDetail,getUpdateProductionList,additionalUpdate,detailUpdate,getStudioList, signUp, inviteIdData } from "./Auth";

export const AuthForgetPassword = async (data) => {
  return await authForgetPassword('forget-password', data)
}

export const CheckLinkExpiration = async (token,language) => {
    return await checkLinkExpiration(`validate-forgot-token?token=${token}&language=${language}`);
  };

export const AuthResetPassword = async (data, link_id) => {
    return await authResetPassword(`reset-password?link_id=${link_id}`, data);
  }; 

export const GetEmployerDetail= async (id)=>{ 
  return await getEmployerDetail(`get-Production-details/${id}`);
}

export const GetUpdateProductionList=async()=>{
  return await getUpdateProductionList(`production-list`);
}

export const AdditionalUpdate=async (id,data)=>{
  return await additionalUpdate(`update-additional-Production-details/${id}`,data)
}

export const DetailUpdate = async (id,data)=>{
  return await detailUpdate(`update-production-details/${id}`,data)
}

export const GetStudioList=async()=>{
  return await getStudioList(`studio-list`);
}

export const SignUp = async(data,invite_id,role)=>{
  return await signUp(`sign-up?role=${role}&invite_id=${invite_id}`,data)
}

