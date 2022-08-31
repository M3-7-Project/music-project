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
    const response = await flowApi.post("/profiles/", { ...profileData }, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error;
  }
};

export const getProfileRequest = async (id = "", filters = "") => {
  try {
    const response = await flowApi.get(`/profiles/${id}?${filters}`);
    return response;
  } catch (error) {
    return error;
  }
};
