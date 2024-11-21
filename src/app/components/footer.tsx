import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#46e6ebea] via-[#0d6cfae7] to-[#163decee] p-4 sm:p-6 text-white mt-8">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm sm:text-base">© 2024 Blogs. All Rights Reserved by Shahmeer Ali💫.</p>
        <p className="text-sm sm:text-base mt-2">Follow us on social media</p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-2 sm:space-y-0 mt-4">
          <a href="#" className="hover:text-gray-200 transition-colors duration-300">Facebook</a>
          <a href="#" className="hover:text-gray-200 transition-colors duration-300">Twitter</a>
          <a href="#" className="hover:text-gray-200 transition-colors duration-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;