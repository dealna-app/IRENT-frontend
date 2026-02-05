import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const res = await axios.post('https://YOUR_RAILWAY_BACKEND_URL/api/auth/login', {email,password});
      alert('Login successful!');
      localStorage.setItem('token', res.data.token);
    }catch(err){
      alert('Login failed');
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="p-2 border rounded"/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="p-2 border rounded"/>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}
