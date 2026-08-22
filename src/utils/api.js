const getBaseUrl = () => {
  const explicitUrl = import.meta.env.VITE_API_URL;
  if (explicitUrl) return explicitUrl.replace(/\/+$/, '');

  if (typeof window !== 'undefined') {
    const { hostname, protocol } = window.location;

    if (hostname.endsWith('.vercel.app')) {
      const apiHost = hostname.replace('.vercel.app', '-be.vercel.app');
      return `${protocol}//${apiHost}/api`;
    }
  }

  return '/api';
};

const baseUrl = getBaseUrl();

const buildUrl = (path) => {
  if (!path) return baseUrl;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (baseUrl.startsWith('http://') || baseUrl.startsWith('https://')) {
    return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
  }

  const normalizedBase = baseUrl.replace(/\/+$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
};

const readResponseBody = async (response) => {
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  }

  const text = await response.text();
  return text ? { message: text } : null;
};

const handleUnauthorized = () => {
  if (typeof window === 'undefined') return;

  localStorage.removeItem('laksh_admin_token');
  localStorage.removeItem('laksh_admin_data');

  if (window.location.pathname.startsWith('/admin') && window.location.pathname !== '/admin/login') {
    window.location.href = '/admin/login';
  }
};

const request = async (method, path, data, options = {}) => {
  const headers = new Headers(options.headers || {});
  const token = typeof window !== 'undefined' ? localStorage.getItem('laksh_admin_token') : null;

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  let body = options.body;
  const isFormData = typeof FormData !== 'undefined' && data instanceof FormData;
  const isJsonBody =
    data !== undefined &&
    data !== null &&
    !isFormData &&
    typeof data === 'object' &&
    !(data instanceof Blob);

  if (data !== undefined && data !== null) {
    if (isFormData) {
      body = data;
    } else if (isJsonBody) {
      if (!headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/json');
      }
      body = JSON.stringify(data);
    } else {
      body = data;
    }
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeout || 10000);

  try {
    const response = await fetch(buildUrl(path), {
      method,
      headers,
      body,
      signal: controller.signal,
      credentials: 'include'
    });

    const responseBody = await readResponseBody(response);

    if (!response.ok) {
      const error = new Error(responseBody?.message || response.statusText || 'Request failed');
      error.response = {
        status: response.status,
        data: responseBody
      };
      if (response.status === 401) {
        handleUnauthorized();
      }
      throw error;
    }

    if (response.status === 401) {
      handleUnauthorized();
    }

    return {
      data: responseBody,
      status: response.status,
      headers: response.headers
    };
  } finally {
    clearTimeout(timeout);
  }
};

const API = {
  get: (path, options = {}) => request('GET', path, undefined, options),
  post: (path, data, options = {}) => request('POST', path, data, options),
  put: (path, data, options = {}) => request('PUT', path, data, options),
  patch: (path, data, options = {}) => request('PATCH', path, data, options),
  delete: (path, options = {}) => request('DELETE', path, undefined, options)
};

export default API;
