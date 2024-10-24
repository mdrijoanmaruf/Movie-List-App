import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import notFound from '../assets/notFound.jpg'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* Graphic or Emoji */}
      <div className="text-9xl mb-6">
        <img src={notFound} alt="" className='rounded-full'/>
      </div>

      {/* 404 Message */}
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Ei Sonamoni , Bosho! Your Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>

      {/* Button to Redirect to Home */}
      <Link to="/" className="inline-flex items-center px-6 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-200 transition">
        <FaHome className="mr-2" /> Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
