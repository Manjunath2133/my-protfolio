import React from 'react';

const certificates = [
  {
    title: 'Data Base Management System - NPTEL',
    image: '/certificates/dbms.jpg',
    file: '/certificates/DBMS.pdf',
  },
  {
    title: 'Full Stack Web Development- Udemy',
    image: '/certificates/fullstack.jpg',
    file: '/certificates/Full stack.pdf',
  },
  // Add more as needed
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <a
              href={cert.file}
              download
              className="text-teal-600 font-medium underline"
            >
              Download Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
