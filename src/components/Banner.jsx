import React from "react";

import BannerImage from "../assets/banner.png";
import { FaDotCircle } from "react-icons/fa";
import BannerPlayImg from "../assets/Play.png";

const Banner = () => {
  return (
    <div className="max-w-300 mx-auto mt-21">
      <div className="flex flex-col gap-13 md:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-purple-700 text-sm font-medium px-5 py-2 rounded-full">
            <FaDotCircle /> New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your
            <br />
            <span className="text-4xl lg:text-5xl font-bold text-[#101727]">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-[#627382] max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
              Explore Products
            </button>

            <button className="btn btn-outline border-[#4F39F6] text-[#4F39F6] rounded-full">
              <img src={BannerPlayImg} alt="" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="w-full max-w-md md:max-w-md h-auto object-contain rounded-lg"
              src={BannerImage}
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
