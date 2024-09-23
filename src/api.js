import axios from 'axios';

// Use the environment variable for the API URL
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';  // Fallback in case .env is not set

export const login = (email, password) => {
  return axios.post(`${API_URL}/api/auth/login`, { email, password });
};

export const register = (username, email, password) => {
  return axios.post(`${API_URL}/api/auth/register`, { username, email, password });
};

export const getPosts = () => {
  return axios.get(`${API_URL}/api/posts`);
};

export const createPost = (postData) => {
  return axios.post(`${API_URL}/api/posts`, postData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,  // The token is passed correctly here
    }
  });
};
