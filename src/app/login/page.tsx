"use client";
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import React, { useState } from 'react';

function Login() {
  const { loading, login, error } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <nav className="absolute top-0 w-full flex justify-between items-center px-6 py-4 bg-gray-800 bg-opacity-90">
        <h1 className="text-white text-2xl font-bold">&lt;/&gt; DevConnector</h1>
        <div className="space-x-4">
          
          <Link href="/developers" className="text-white hover:underline">Developers</Link>
          <Link href="/register" className="text-white hover:underline">Register</Link>
          <Link href="/login" className="text-white hover:underline">Login</Link>
        </div>
       
      </nav>

      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            className="p-2 border rounded"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-2 border rounded"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <Link href="/register" className="text-blue-500">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
