import axios from "../../config/axios";

export const getTask = (page, query) => {
  return axios.get(`/api/task/search?page=${page}&${query}`);
};

export const taskRecommend = () => {
  return axios.get("/api/task/recommend");
};

export const getInfoTask = (id) => {
  return axios.get(`/api/task/info/${id}`);
};

export const getProfileUser = (id) => {
  return axios.get(`/api/profile/info/${id}`);
};

export const getCategories = () => {
  return axios.get(`/api/category/all`);
};

export const getAddress = () => {
  return axios.get(`/api/address/all`);
};

export const getCompanies = () => {
  return axios.get(`/api/company/selection/`);
};

export const getExps = () => {
  return axios.get(`/api/exp/all`);
};
