import React from "react";
import UserImage from "../assets/user.png";
import PackageImage from "../assets/package.png";
import RocketImage from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="max-w-300 mx-auto mt-30">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#101727]">
          Get Started in 3 Steps
        </h2>
        <p className="text-[#627382] mt-4">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-30">
        <div className="shadow-sm rounded-lg py-22 px-6">
          <div className="flex justify-end">
            <span className=" -mt-20 w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium">
              01
            </span>
          </div>

          <div className="flex items-center justify-center">
            <div className=" flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/15">
              <img
                src={UserImage}
                alt=""
                className=" w-14 h-14 object-cover"
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <h3 className="text-xl font-bold">Create Account</h3>
          </div>

          <div className="text-center pt-4">
            <p className="text-[#627382] ">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        <div className="shadow-sm rounded-lg py-22 px-6">
          <div className="flex justify-end">
            <span className=" -mt-20 w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium">
              02
            </span>
          </div>

          <div className="flex items-center justify-center">
            <div className=" flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/15">
              <img
                src={PackageImage}
                alt=""
                className=" w-14 h-14 object-cover"
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <h3 className="text-xl font-bold">Choose Products</h3>
          </div>

          <div className="text-center pt-4">
            <p className="text-[#627382] ">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        <div className="shadow-sm rounded-lg py-22 px-6">
          <div className="flex justify-end">
            <span className=" -mt-20 w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium">
              03
            </span>
          </div>

          <div className="flex items-center justify-center">
            <div className=" flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/15">
              <img
                src={RocketImage}
                alt=""
                className=" w-14 h-14 object-cover"
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <h3 className="text-xl font-bold">Start Creating</h3>
          </div>

          <div className="text-center pt-4">
            <p className="text-[#627382] ">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
