import React from 'react';


const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">K Manjunath</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-teal-400">Home</a></li>
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
