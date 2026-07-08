import { createContext, useContext, useState, useEffect } from 'react';
import API from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('laksh_admin_token');
    const adminData = localStorage.getItem('laksh_admin_data');
    if (token && adminData) {
      setAdmin(JSON.parse(adminData));
      // Verify token
      API.get('/auth/me').then(res => {
        setAdmin(res.data.admin);
      }).catch(() => {
        localStorage.removeItem('laksh_admin_token');
        localStorage.removeItem('laksh_admin_data');
        setAdmin(null);
      }).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const res = await API.post('/auth/login', { email, password });
    const { token, admin } = res.data;
    localStorage.setItem('laksh_admin_token', token);
    localStorage.setItem('laksh_admin_data', JSON.stringify(admin));
    setAdmin(admin);
    return admin;
  };

  const logout = () => {
    localStorage.removeItem('laksh_admin_token');
    localStorage.removeItem('laksh_admin_data');
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, loading, login, logout, isAuthenticated: !!admin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
