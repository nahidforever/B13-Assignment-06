import React from "react";
import { FiCheck } from "react-icons/fi";

const Pricing = () => {
  return (
    <div className="max-w-300 mx-auto py-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#101727]">
          Simple, Transparent Pricing
        </h2>
        <p className="text-[#627382] mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {/* Starter */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Starter</h3>
          <p className="text-[#627382] mt-1">Perfect for getting started</p>

          <h2 className="text-4xl font-bold mt-4">
            $0
            <span className="text-base font-normal text-[#627382]">/Month</span>
          </h2>

          <ul className="mt-6 space-y-2 text-[#627382]">
            <ul className="mt-6 space-y-2 text-[#627382]">
              <li className="flex items-center gap-2">
                <FiCheck className="text-green-500"></FiCheck> Access to 10 free
                tools
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-green-500"></FiCheck> Basic templates
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-green-500"></FiCheck> Community support
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-green-500"></FiCheck> 1 project per
                month
              </li>
            </ul>
          </ul>

          <button className="mt-24 w-full py-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="relative rounded-xl p-8 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-lg">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-sm px-4 py-1 rounded-full text-[#BB4D00]">
            Most Popular
          </span>

          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="mt-1 opacity-80">Best for professionals</p>

          <h2 className="text-4xl font-bold mt-4">
            $29<span className="text-base font-normal">/Month</span>
          </h2>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-2">
              <FiCheck></FiCheck> Access to all premium tools
            </li>
            <li className="flex items-center gap-2">
              <FiCheck></FiCheck> Unlimited templates
            </li>
            <li className="flex items-center gap-2">
              <FiCheck></FiCheck> Priority support
            </li>
            <li className="flex items-center gap-2">
              <FiCheck></FiCheck> Unlimited projects
            </li>

            <li className="flex items-center gap-2">
              <FiCheck></FiCheck>Cloud sync
            </li>
            <li className="flex items-center gap-2">
              <FiCheck></FiCheck> Advanced analytics
            </li>
          </ul>

          <button className="mt-8 w-full py-3 rounded-full bg-white text-[#4F39F6] font-bold">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="text-[#627382] mt-1">For teams and businesses</p>

          <h2 className="text-4xl font-bold mt-4">
            $99
            <span className="text-base font-normal text-[#627382]">/Month</span>
          </h2>

          <ul className="mt-6 space-y-2 text-[#627382]">
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500"></FiCheck> Everything in Pro
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500"></FiCheck> Team collaboration
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500"></FiCheck> Custom integrations
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500"></FiCheck> Dedicated support
            </li>

            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500"></FiCheck>SLA guarantee
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500"></FiCheck> Custom branding
            </li>
          </ul>

          <button className="mt-8 w-full py-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
