import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} K Manjunath. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400"
        >
          LinkedIn
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-teal-400"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
