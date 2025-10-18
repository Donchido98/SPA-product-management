// src/app/login/page.tsx
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/providers/AuthProvider';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(username, password);
      router.push('/');
    } catch (err: any) {
      setError(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 p-2">
      <main className="max-w-md w-full mx-auto p-6 rounded-2xl bg-gray-900 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-300">Product Management Dashboard</h1>
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-300">Sign in (mock)</h1>
        <form onSubmit={onSubmit} aria-label="login form">
          <label className="block mb-2">
            <span className="text-gray-400">Username</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              className="w-full border-2 p-2 mt-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-400">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full border-2 p-2 mt-1 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          {error && <div role="alert" className="text-red-500 mb-2">{error}</div>}
          <div className="flex justify-center  pt-5">
            <button
              type="submit"
              disabled={loading}
              className="px-12 py-2 bg-gray-300 font-bold text-black rounded-2xl hover:bg-indigo-700 transition"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
