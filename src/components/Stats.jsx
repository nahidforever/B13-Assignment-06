import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15 mt-9">
      <div className="max-w-300 mx-auto flex flex-col md:flex-row items-center justify-center text-center">
        <div className="flex-1 px-6 py-4">
          <h2 className="text-white text-4xl font-bold">50K+</h2>
          <p className="text-white opacity-80 mt-3">Active Users</p>
        </div>

        <div className="hidden md:flex items-center px-3">
          <div className="w-px h-13 bg-white/40 mx-auto"></div>
        </div>

        <div className="flex-1 px-6 py-4">
          <h2 className="text-white text-4xl font-bold">200+</h2>
          <p className="text-white opacity-80 mt-3">Premium Tools</p>
        </div>

        <div className="hidden md:flex items-center px-3">
          <div className="w-px h-13 bg-white/40 mx-auto"></div>
        </div>

        <div className="flex-1 px-6 py-4">
          <h2 className="text-white text-4xl font-bold">4.9</h2>
          <p className="text-white opacity-80 mt-3">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
