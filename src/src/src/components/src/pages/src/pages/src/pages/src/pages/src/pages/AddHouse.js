import React, { useState } from 'react';
import axios from 'axios';

export default function AddHouse() {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  const [city_id,setCityId] = useState(1);
  const [price_type,setPriceType] = useState('per_month');

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const token = localStorage.getItem('token');
    try{
      await axios.post('https://YOUR_RAILWAY_BACKEND_URL/api/houses', {title,description,price,city_id,price_type},{
        headers:{Authorization:`Bearer ${token}`}
      });
      alert('House added successfully!');
    }catch(err){
      alert('Failed to add house');
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Add House</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} className="p-2 border rounded"/>
        <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} className="p-2 border rounded"/>
        <input type="number" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} className="p-2 border rounded"/>
        <select value={price_type} onChange={e=>setPriceType(e.target.value)} className="p-2 border rounded">
          <option value="per_month">Per Month</option>
          <option value="per_day">Per Day</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add House</button>
      </form>
    </div>
  );
}
