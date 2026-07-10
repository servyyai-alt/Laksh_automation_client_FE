import axios from 'axios';

const getBaseUrl = () => {
  const explicitUrl = import.meta.env.VITE_API_URL;
  if (explicitUrl) return explicitUrl;

  if (typeof window !== 'undefined') {
    const { hostname, protocol } = window.location;

    if (hostname.endsWith('.vercel.app')) {
      // Heuristic for separate frontend/backend Vercel deployments.
      const apiHost = hostname.replace('.vercel.app', '-be.vercel.app');
      return `${protocol}//${apiHost}/api`;
    }
  }

  return '/api';
};

const API = axios.create({
  baseURL: getBaseUrl(),
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
