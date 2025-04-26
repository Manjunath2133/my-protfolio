import React from 'react';

const Hackathon = () => {
  return (
    <section id="hackathons" className="mt-16 bg-gray-800 text-white py-12 px-6">
      <h2 className="text-3xl font-bold mb-8">Hackathon Experiences</h2>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-md">
          <div>
            <h3 className="text-xl font-semibold">EcoEquify - IBM & BNMIT (2024)</h3>
            <p className="text-sm text-gray-400">Brief description about the hackathon, your role, and what you accomplished.</p>
          </div>
          <a href="/certificates/BNMIT.pdf" download className="text-teal-500 hover:text-teal-600 font-semibold">
            Download Certificate
          </a>
        </div>

        <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-md">
          <div>
            <h3 className="text-xl font-semibold">E-HUNT - Sri Krishna Institute (2023)</h3>
            <p className="text-sm text-gray-400">Brief description about the hackathon, your role, and what you accomplished.</p>
          </div>
          <a href="/certificates/E-Hunt.jpg" download className="text-teal-500 hover:text-teal-600 font-semibold">
            Download Certificate
          </a>
        </div>

        {/* Add more hackathons as needed */}
      </div>
    </section>
  );
};

export default Hackathon;
