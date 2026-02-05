import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">IRENT</Link>
      <div className="space-x-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/add-house">Add House</Link>
      </div>
    </nav>
  );
}
