import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center relative">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          className="w-full h-auto max-w-[500px] max-h-[680px] object-cover transform transition-transform duration-500 hover:scale-105"
          src={bannerImg}
          alt="bannerImg"
        />
        {/* Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e2024] to-[#202327] opacity-60 z-10"></div>
        {/* Content on Banner (optional, can be text or CTA) */}
        <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-[#202327] to-transparent p-4 z-20">
          <h2 className="text-white text-2xl font-semibold">Welcome to Our Service</h2>
          <p className="text-white text-sm">Explore and get started today!</p>
        </div>
      </div>
    </div>
  );
};

export default RightBanner;
