"use client"
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import Bell from "../components/Bell"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#46e6ebea] via-[#0d6cfae7] to-[#163decee] p-2 sm:p-4 md:p-8 py-4 sm:py-7 sticky top-0 z-10 shadow-lg border-t-4 border-y-slate-950 shadow-slate-950">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-white font-bold text-lg sm:text-xl md:text-2xl transform hover:scale-110 transition-transform duration-300 flex items-center gap-2">
          <img src="/image/logo.jpg" alt="logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
          Blogs 
        </div>
        <button 
          className="block md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMenu size={24} />
        </button>

        <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-gradient-to-r from-[#46e6ebea] via-[#0d6cfae7] to-[#163decee] md:bg-none space-y-2 md:space-y-0 md:space-x-4 text-white text-center md:flex-1 md:justify-center mt-2 md:mt-0 p-4 md:p-0`}>
         
        </ul>

        <div className="text-white cursor-pointer hover:text-green-200 transition-colors duration-300 relative ml-auto md:ml-0">
          <Bell/>
          <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1">99+</span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;