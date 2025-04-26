import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white px-6">
      <div className="text-center">

        <div className="mb-8">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-teal-500 shadow-lg"
          />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-teal-400">K Manjunath</span></h2>
        <p className="text-lg md:text-xl mb-6">A passionate Developer crafting digital experiences.</p>
        <div className="mt-6 flex justify-center">
        <div className="flex flex-wrap gap-4">
            <a
                href="/my-cv.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 w-48 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                <FaDownload /> Download CV
            </a>

            <a
                href="#projects"
                className="flex items-center justify-center px-6 py-3 w-48 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
                View Projects
            </a>
            <a 
                href="#certificates">
                <button className="text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 w-48">
                  View Certificates
                </button>
            </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
