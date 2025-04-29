import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch('https://your-backend-name.onrender.com/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      const data = await res.json();
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Logout failed');
    }
  };

  return (
    <div className="flex justify-center items-center my-4">
      <button 
        onClick={handleLogout} 
        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
