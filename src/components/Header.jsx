import React from "react";

const Header = () => {
  return (
    <nav className="w-full p-4 mb-14 bg-white sticky top-0 left-0 flex justify-between md:items-center">
      <img
        className="w-[100px] md:w-[125px] md:h-[55px] md:m-2"
        src="./src/images/logo.svg"
        alt=""
      />
      <div className="hidden md:flex text-gray-500">
        <ul className="flex space-x-6 bg-[rgb(237,237,235)] rounded-full px-5 py-3 text-[16px] lg:text-xl lg:space-x-8 lg:px-10">
          <li>Intro</li>
          <li>Pricing</li>
          <li>Features</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div>
        <button className="px-4 py-2 md:px-6 md:py-3 md:text-[16px] md:font-bold bg-black text-white rounded-full ">
          Join Community
        </button>
      </div>
    </nav>
  );
};

export default Header;
