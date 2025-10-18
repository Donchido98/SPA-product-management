// src/providers/AuthProvider.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type AuthContextType = {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    try { return localStorage.getItem('mock_token'); } catch { return null; }
  });

  useEffect(() => {
    if (token) localStorage.setItem('mock_token', token);
    else localStorage.removeItem('mock_token');
  }, [token]);

  const login = async (username: string, password: string) => {
    // Very simple fake login — in real app validate server-side
    if (!username || !password) throw new Error('Missing credentials');
    // create fake token containing username + timestamp
    const t = `mock:${username}:${Date.now()}`;
    setToken(t);
    return;
  };

  const logout = () => setToken(null);

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
