import React, { useState } from "react";

const ToolsCard = ({ tool }) => {
  const [isBuyNow, setIsBuyNow] = useState(false);

  const handleBuyNow = () => {
    setIsBuyNow(true);
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-end">
            <span
              className={`badge badge-xs p-3 rounded-full font-medium ${
                tool.tag === "Popular"
                  ? "badge-primary"
                  : tool.tag === "New"
                    ? "badge-success"
                    : tool.tag === "Best Seller"
                      ? "badge-warning"
                      : ""
              }`}
            >
              {tool.tag}
            </span>
          </div>

          <div>
            <img className="w-8 h-8" src={tool.icon} alt={tool.name} />
          </div>

          <div className="mt-4">
            <h2 className="text-[24px] font-bold">{tool.name}</h2>
            <p className="mt-4 text-[#627382] text-[16px]">
              {tool.description}
            </p>
          </div>

          <div className="mt-4">
            <span className="text-xl font-bold">
              ${tool.price}
              <span className="text-[16px] text-[#627382] font-normal">
                {tool.period === "one-time"
                  ? "/One-Time"
                  : tool.period === "monthly"
                    ? "/Mo"
                    : tool.period === "yearly"
                      ? "/Yr"
                      : ""}
              </span>
            </span>
          </div>

          <div className="mt-4">
            <ul className="flex flex-col gap-2 text-xs">
              {tool.features?.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-[#627382] text-[16px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <button
              onClick={handleBuyNow}
              className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white"
            >
              {isBuyNow ? "Added To Cart" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
