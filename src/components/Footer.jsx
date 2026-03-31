import React from "react";

import FacebookImage from "../assets/Facebook.png";
import TwitterImage from "../assets/Twitter.png";
import InstagramImage from "../assets/Instagram.png";

const Footer = () => {
  return (
    <footer className="bg-[#101727] pt-20 pb-10 mt-7">
      <div className="max-w-300 mx-auto px-6">
      
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-center md:text-left">
          {/* Description */}
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold tracking-tighter text-white">
              DigiTools
            </h2>

            <p className="text-white/70 mt-4">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>

            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>

            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>

            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-lg">
              Social Links
            </h3>

            <ul className="flex items-center justify-center md:justify-start gap-4">
              <li>
                <a href="#">
                  <img
                    className="h-8 w-8 hover:scale-110 transition"
                    src={InstagramImage}
                    alt="Instagram"
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <img
                    className="h-8 w-8 hover:scale-110 transition"
                    src={FacebookImage}
                    alt="Facebook"
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <img
                    className="h-8 w-8 hover:scale-110 transition"
                    src={TwitterImage}
                    alt="Twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-700 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400 text-center md:text-left">
          <p>© {new Date().getFullYear()} DigiTools. All rights reserved.</p>

          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
