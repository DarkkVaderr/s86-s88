import React, { createContext, useState } from 'react';
import { login as loginUser, register as registerUser } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const { data } = await loginUser(email, password);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const register = async (username, email, password) => {
    await registerUser(username, email, password);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
