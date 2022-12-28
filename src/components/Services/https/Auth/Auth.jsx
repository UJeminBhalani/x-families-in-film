

import axios from "axios";
import { axiosInstance } from "../interceptor";

export const authForgetPassword = async (url, data) => {
  return await axiosInstance.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
export const login = async (url, data) => {
  return await axiosInstance.post(url, data).then((res) => {
    return res
  }).catch((err) => {
    return err;
  })
};
export const getUserRole = async (url) => {
  return await axiosInstance.get(url).then((res) => {
    return res
  }).catch((err) => {
    return err;
  })

}

export const checkLinkExpiration = async (url) => {
  return await axiosInstance
    .get(url).then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
export const authResetPassword = async (url, data) => {

  return await axiosInstance
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const getEmployerDetail = async (url) => {
  return await axiosInstance
    .get(url)

    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const getUpdateProductionList = async (url) => {
  return await axiosInstance
    .get(url).then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const logout = async (url) => {
  return await axiosInstance.post(url, {}, {
  }).then((res) => {
    return res
  }).catch((err) => {
    return err;
  })

}

export const additionalUpdate = async (url, data) => {
  return await axiosInstance
    .put(url, data).then((res) => {
      return res
    }).catch((err) => {
      return err
    })
}
export const detailUpdate = async (url, data) => {
  return await axiosInstance
    .put(url, data).then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}

export const tokenReplace = async (url, data) => {
  return await axiosInstance.post(url, data).then((res)=>{
    return res
  }).catch((err)=>{
    return err
  })
}
export const getStudioList = async (url) => {
  return await axiosInstance
    .get(url).then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const signUp = async (url, data) => {

  return await axiosInstance
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};


