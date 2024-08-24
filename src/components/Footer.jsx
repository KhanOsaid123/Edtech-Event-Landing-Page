import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col gap-8 md:flex-row md:justify-between px-6 pb-10  items-center justify-center">
      <img
        className="w-[100px] md:w-[125px] md:h-[55px]"
        src="images/logo.svg"
        alt=""
      />
      <div className="mt-3 gap-6 flex text-gray-500 md:order-2">
        <img className="size-6" src="images/icon-twitter.svg" alt="" />
        <img className="size-6" src="images/icon-youtube.svg" alt="" />
        <img className="size-6" src="images/icon-linkedin.svg" alt="" />
        <img className="size-6" src="images/icon-instagram.svg" alt="" />
      </div>

      <p className="text-gray-400 text-lg font-medium md:order-1">
        2024 @ Edtech Event
      </p>
    </section>
  );
};

export default Footer;
