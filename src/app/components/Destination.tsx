import React from 'react';

const TopDestination: React.FC = () => {
  const destinations = [
    { name: "Balkan Peninsula", image: "/image/top1.jpg" },
    { name: "Hawaii, USA", image: "/image/top2.jpeg" },
    { name: "Puebla, Mexico", image: "/image/top3.jpg" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#46e6ebea] via-[#0d6cfae7] to-[#163decee] p-4 sm:p-8">
      <h2 className="text-white text-2xl sm:text-3xl font-bold text-center">Top Destination</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
        {destinations.map((dest, index) => (
          <div key={index} className="text-center">
            <img src={dest.image} alt={dest.name} className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full" />
            <p className="text-white mt-2 text-sm sm:text-base">{dest.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDestination;