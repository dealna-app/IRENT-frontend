import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function HouseDetail() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(()=>{
    axios.get(`https://YOUR_RAILWAY_BACKEND_URL/api/houses/${id}`)
      .then(res => setHouse(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if(!house) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{house.title}</h1>
      <p>{house.description}</p>
      <p className="mt-2">{house.city} - {house.neighborhood}</p>
      <p className="mt-2">{house.price} MAD / {house.price_type === 'per_month' ? 'month' : 'day'}</p>
    </div>
  );
}
