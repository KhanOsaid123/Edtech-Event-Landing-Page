import React from "react";

const Content = () => {
  return (
    <section className="px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:mb-10 justify-center items-center gap-5">
        <div className="text-center lg:text-left flex flex-col justify-center items-center gap-5">
          <h1 className="lg:text-[72px] md:mb-5 text-6xl md:text-8xl font-bold">
            <span className="text-lime-600">ATTEND LIVE</span> CLASSSES
            EVERYWEEK
          </h1>
          <p className="text-gray-400 text-[18px] md:px-12 lg:px-0 md:text-[24px] font-medium leading-relaxed ">
            Join founders,freelancers,designers,FAANG engineers,indie
            hackers,and more in our 24/7 WhatsApp Group for less than a cop of
            coffee
          </p>
          <button className="p-4 my-4 bg-lime-600 rounded-full w-full md:w-auto lg:items-start md:px-8 md:text-lg text-white font-bold">
            Join 24/7 WhatsApp + discord for $5/Month
          </button>
        </div>

        <img
          src="./src/images/hero-illustration.png"
          alt=""
          className="p-5 mb-6 md:mb-[80px] lg:mb-0"
        />
      </div>
      <ul className="flex flex-wrap items-center justify-center md:gap-x-6 md:gap-y-2 lg:gap-x-0 text-gray-700 text-xl font-medium mb-8">
        <li className="flex gap-4 m-4">
          <img src="./src/images/icon-guides.svg" alt="" />
          <p>5+ Guides for Free</p>
        </li>
        <li className="flex gap-4 m-4">
          <img src="./src/images/icon-courses.svg" alt="" />
          <p>Exclusive Courses & Projects</p>
        </li>
        <li className="flex gap-4 m-4">
          <img src="./src/images/icon-whatsapp.svg" alt="" />
          <p>24/7 WhastApp Support Group</p>
        </li>
        <li className="flex gap-4 m-4">
          <img src="./src/images/icon-sessions.svg" alt="" />
          <p>1:1 Free Sessions</p>
        </li>
      </ul>
    </section>
  );
};

export default Content;
