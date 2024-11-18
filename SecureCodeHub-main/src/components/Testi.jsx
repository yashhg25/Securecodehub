import React from 'react';

export default function Testi() {
  return (
    <div className="bg-black text-white font-sans">
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col items-start mb-6">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
              Hear From Our Successful Students
            </h1>
            <p className="text-gray-400 text-base sm:text-lg text-center sm:text-left">
              Join our community of learners sharing their achievements and experiences. See how our courses influenced their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="overflow-hidden rounded-lg">
              <img
                src="https://res.cloudinary.com/dmuecdqxy/image/upload/v1725997399/b7ryf6fjuo7bhzi8krcw.jpg"
                alt="Scenic View"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg text-gray-300">
              <p className="text-sm sm:text-lg mb-4 text-center sm:text-left">
                SecuredCodeHub transformed my career, providing me with the necessary skills to succeed in the cybersecurity industry.
              </p>
              <p className="font-bold text-white text-center sm:text-left">John Doe</p>
              <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">IT Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
