import axios from "axios";

const flowApi = axios.create({
  baseURL: "https://json-server-onflow.herokuapp.com/",
  timeout: 10000,
});

export const registerRequest = async (registerData) => {
  try {
    const response = await flowApi.post("/register/", { ...registerData });
    return response;
  } catch (error) {
    return error;
  }
};

export const loginRequest = async (loginData) => {
  try {
    const response = await flowApi.post("/login/", { ...loginData });
    return response;
  } catch (error) {
    return error;
  }
};

export const createProfileRequest = async (profileData, token) => {
  try {
    const response = await flowApi.post("/profiles/", profileData, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error;
  }
};

export const getProfileRequest = async (id = "", params = {}) => {
  try {
    const response = await flowApi.get(`/profiles/${id}`, { params: params });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateProfileRequest = async (id, token) => {
  try {
    const response = await flowApi.post(`/profiles/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error;
  }
};

export const createProductionRequest = async (productionData, token) => {
  try {
    const response = await flowApi.post(`/production/`, productionData, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error;
  }
};

export const getProductionRequest = async (id = "", params = {}) => {
  try {
    const response = await flowApi.get(`/production/${id}`, { params: params });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateProductionRequest = async (id, updateData, token) => {
  try {
    const response = await flowApi.patch(`/production/${id}`, updateData, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteProductionRequest = async (id, token) => {
  try {
    const response = await flowApi.delete(`/production/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error;
  }
};

//usar nas configs para fazer as req extras
