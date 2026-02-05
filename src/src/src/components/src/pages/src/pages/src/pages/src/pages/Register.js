import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      await axios.post('https://YOUR_RAILWAY_BACKEND_URL/api/auth/register', {name,email,password});
      alert('Registration successful!');
    }catch(err){
      alert('Registration failed');
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="p-2 border rounded"/>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="p-2 border rounded"/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="p-2 border rounded"/>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
