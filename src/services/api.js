import axios from "axios";

const flowApi = axios.create({
  baseURL: "https://json-server-onflow.herokuapp.com/",
  timeout: 10000,
});

export const userRequest = async (token, id) => {
  const response = await flowApi.get(`/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  return response;
};

export const registerRequest = async (registerData) => {
  const response = await flowApi.post("/register/", { ...registerData });
  return response;
};

export const loginRequest = async (loginData) => {
  const response = await flowApi.post("/login/", { ...loginData });
  return response;
};

export const createProfileRequest = async (profileData, token) => {
  const response = await flowApi.post("/profiles/", profileData, { headers: { Authorization: `Bearer ${token}` } });
  return response;
};

export const getProfileRequest = async (id = "", params = {}) => {
  const response = await flowApi.get(`/profiles/${id}`, { params: params });
  return response;
};

export const updateProfileRequest = async (id, updateData, token) => {
  const response = await flowApi.patch(`/profiles/${id}`, updateData,{ headers: { Authorization: `Bearer ${token}` }});
  return response;
};

export const createProductionRequest = async (productionData, token) => {
  const response = await flowApi.post(`/production/`, productionData, { headers: { Authorization: `Bearer ${token}` } });
  return response;
};

export const getProductionRequest = async (id = "", params = {}) => {
  const response = await flowApi.get(`/production/${id}`, { params: params });
  return response;
};

export const updateProductionRequest = async (id, updateData, token) => {
  const response = await flowApi.patch(`/production/${id}`, updateData, { headers: { Authorization: `Bearer ${token}` } });
  return response;
};

export const deleteProductionRequest = async (id, token) => {
  const response = await flowApi.delete(`/production/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  return response;
};

export const createCommentRequest = async (commentData, token) => {
  const response = await flowApi.post(`/comments/`, commentData, { headers: { Authorization: `Bearer ${token}` } });
  return response;
};

export const createVoteRequest = async (voteData, token) => {
  const response = await flowApi.post(`/score/`, voteData, { headers: { Authorization: `Bearer ${token}` } });
  return response;
};

export const getCommentRequest = async (id = "") => {
  const response = await flowApi.get(`/comments/${id}`);
  return response;
};

export const getVoteRequest = async (id = "") => {
  const response = await flowApi.get(`/score/${id}`);
  return response;
};

export const deleteCommentRequest = async (id, token) => {
  const response = await flowApi.delete(`/comments/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  return response;
};

export const deleteVoteRequest = async (id, token) => {
  const response = await flowApi.delete(`/score/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  return response;
};

export const getAllProfilesByTypeRequest = async (type) => {
  const response = await flowApi.get(`/profiles/`, { params: { type: type } });
  return response;
};

export const getProductionWithStatsRequest = async (id = "") => {
  const params = new URLSearchParams();
  params.append("_embed", "comments");
  params.append("_embed", "score");

  const response = await flowApi.get(`/production/${id}`, { params: params });
  return response;
};

export const getProfilesWithProductionsRequest = async (id) => {
  const params = new URLSearchParams();
  params.append("_embed", "production");
  params.append("userId", id);

  const response = await flowApi.get(`/profiles/`, { params: params });
  return response;
};

export const getProfilesWithInteractionsRequest = async (id) => {
  const params = new URLSearchParams();
  params.append("_embed", "comments");
  params.append("_embed", "score");
  params.append("userId", id);

  const response = await flowApi.get(`/profiles/`, { params: params });
  return response;
};
