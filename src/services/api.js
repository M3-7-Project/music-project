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

export const createCommentRequest = async (commentData, token) => {
  try {
    const response = await flowApi.post(`/comments/`, commentData, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error;
  }
};

export const createVoteRequest = async (voteData, token) => {
  try {
    const response = await flowApi.post(`/score/`, voteData, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error;
  }
};

export const getCommentRequest = async (id = "") => {
  try {
    const response = await flowApi.get(`/comments/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getVoteRequest = async (id = "") => {
  try {
    const response = await flowApi.get(`/score/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteCommentRequest = async (id, token) => {
  try {
    const response = await flowApi.delete(`/comments/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteVoteRequest = async (id, token) => {
  try {
    const response = await flowApi.delete(`/score/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllProfilesByTypeRequest = async (type) => {
  try {
    const response = await flowApi.get(`/profiles/`, { params: { type: type } });
    return response;
  } catch (error) {
    return error;
  }
};

export const getProductionWithStatsRequest = async (id = "") => {
  const params = new URLSearchParams();
  params.append("_embed", "comments");
  params.append("_embed", "score");

  try {
    const response = await flowApi.get(`/production/${id}`, { params: params });
    return response;
  } catch (error) {
    return error;
  }
};

export const getProfilesWithProductionsRequest = async (id) => {
  const params = new URLSearchParams();
  params.append("_embed", "production");
  params.append("userId", id);

  try {
    const response = await flowApi.get(`/profiles/`, { params: params });
    return response;
  } catch (error) {
    return error;
  }
};

export const getProfilesWithInteractionsRequest = async = (id) => {
  const params = new URLSearchParams();
  params.append("_embed", "comments");
  params.append("_embed", "score");
  params.append("userId", id);

  try {
    const response = await flowApi.get(`/profiles/`, { params: params });
    return response;
  } catch (error) {
    return error;
  }
}

