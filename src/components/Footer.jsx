import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" text-green-900 pt-10 pb-6 px-4 md:px-16  border-t border-green-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <FaLeaf className="text-green-700" /> GardenConnect
          </h2>
          <p>Email: sabithossenkhoka420.com</p>
          <p>Phone: +880 1911274560</p>
          <p>Location: Sector: 08, Uttara, Dhaka 1230</p>
        </div>

        {/* Terms & Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:text-green-700">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-green-700">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-green-700">FAQs</a></li>
            <li><a href="/contact" className="hover:text-green-700">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect with Us</h2>
          <div className="flex space-x-4 text-2xl text-green-700">
            <a href="https://www.facebook.com/sabit.hossen.945735" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://github.com/sabithossen4" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>          
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm text-green-700">
        © {new Date().getFullYear()} GardenConnect. All rights reserved.
      </div>
    </footer>
      
    </div>
  );
};

export default Footer;