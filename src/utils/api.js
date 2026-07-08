import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  timeout: 10000
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('laksh_admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

// Handle auth errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('laksh_admin_token');
      localStorage.removeItem('laksh_admin_data');
      if (window.location.pathname.startsWith('/admin') && window.location.pathname !== '/admin/login') {
        window.location.href = '/admin/login';
      }
    }
    return Promise.reject(error);
  }
);

export default API;
