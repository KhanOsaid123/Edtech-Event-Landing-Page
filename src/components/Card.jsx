import React from "react";

const Card = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-14 px-4 lg:mb-20">
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="./src/images/avatars/avatar-aryan.webp"
          alt=""
          className="size-24 mb-4 rounded-full hover:scale-150 duration-300"
        />
        <p className="px-4 lg:px-0 mb-5 text-gray-500 font-medium  text-[16px] md:text-lg md:px-24 ">
          "This community has been a game-changer for my career.The exclusive
          courses and personalized guidance from expert mentors have helped me
          take my coding skills to the next level."
        </p>

        <h1 className="mb-1 font-bold md:text-lg">Aryan Singh</h1>
        <p className="mb-4 text-gray-500 md:text-base">SWE at Google</p>
        <div className="flex flex-row gap-1 mb-16">
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="./src/images/avatars/avatar-kevin.webp"
          alt=""
          className="size-24 mb-4 rounded-full hover:scale-150 duration-300"
        />
        <p className="px-4 lg:px-0 mb-5 text-gray-500 font-medium  text-[16px] md:text-lg md:px-24 ">
          "The exclusive courses and bi-weekly live sessions have been
          incredibly insightful,and collaborating on open-source projects has
          been a great way to build my portfoli.I highly recommend this
          community."
        </p>

        <h1 className="mb-1 font-bold md:text-lg ">Kevin Smith</h1>
        <p className="mb-4 text-gray-500 md:text-base">SWE at Tesla</p>
        <div className="flex flex-row gap-1 mb-16">
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="./src/images/avatars/avatar-umang.webp"
          alt=""
          className="size-24 mb-4 rounded-full hover:scale-150 duration-300"
        />
        <p className="px-4 mb-5 lg:px-0 text-gray-500 font-medium  text-[16px] md:text-lg md:px-24 ">
          "Joining this community was one of the best decisions i have made for
          my career. The 24/7 WhatsApp group has been an incredible resource for
          networking and collaboration.I highly recommend this community."
        </p>

        <h1 className="mb-1 font-bold md:text-lg ">Umang Choudhary</h1>
        <p className="mb-4 text-gray-500 md:text-base">SWE at Tiktok</p>
        <div className="flex flex-row gap-1 mb-16">
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
          <img className="md:size-6" src="./src/images/icon-star.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Card;
