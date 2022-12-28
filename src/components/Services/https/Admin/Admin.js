import { axiosInstance } from "../interceptor";

export const productionlist = (sort, search, perpage, page) => {
  return axiosInstance
    .get(
      `search/production?sortby=${sort}&search=${search}&perpage=${perpage}&page=${page}`
    )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const delproductionlist = (records) => {
  const data = {
    id: records,
  };
  return axiosInstance
    .delete(`employer`, {
      data: data,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const studiolist = () => {
  return axiosInstance
    .get("studio-list")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const inviteproductions = () => {
  return axiosInstance
    .get("production-list")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const archivelist = (search, sort, perpage, page) => {
  return axiosInstance
    .get(
      `archived-employers?sortby=${sort}&search=${search}&perpage=${perpage}&page=${page}`
    )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const createinvite = (data) => {
  return axiosInstance
    .post(`create-invite`, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const sendInvite = async (data) => {
  return await axiosInstance
    .post(`invite-link`, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const linkexpire = async (id) => {
  return await axiosInstance
    .get(`invite-id-data?id=${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
