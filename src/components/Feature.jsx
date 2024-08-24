import React from "react";

const Feature = () => {
  return (
    <section className=" flex flex-col justify-center items-center">
      <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl md:px-28 md:mb-10 font-bold text-center">
        EVERYTHING YOU NEED IN ONE COMMUNITY
      </h1>
      <p className="text-[17px] md:mb-10 text-gray-500 font-medium">
        Unleashing your digital potential for lasting success
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 text-center lg:gap-x-2 lg:py-12">
        <div className="flex flex-col justify-center items-center">
          <img
            className="md:mb-6  lg:hover:-translate-y-12 lg:duration-300"
            src="./src/images/illustration-mentors.svg"
            alt=""
          />
          <h1 className="text-2xl font-bold">EXPERT MENTORS</h1>
          <p className="p-5 font-medium md:text-lg md:mb-10 md:px-44 lg:px-6 text-gray-500 text-center ">
            Get personalized guidance from expert mentors to take your coding
            skills to next level.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="md:mb-6 lg:hover:-translate-y-12 lg:duration-300"
            src="./src/images/illustration-networking.svg"
            alt=""
          />
          <h1 className="text-2xl font-bold">NETWORKING</h1>
          <p className="p-5 font-medium md:text-lg md:mb-10 md:px-44 lg:px-6 text-gray-500 text-center ">
            Connect with like-minded coders from around the world and
            collaborate on exciting projects.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="md:mb-6 lg:hover:-translate-y-12 lg:duration-300"
            src="./src/images/illustration-courses.svg"
            alt=""
          />
          <h1 className="text-2xl font-bold">COURSES</h1>
          <p className="mb-12 p-5 font-medium md:text-lg md:mb-20 lg:mb-[40px] md:px-44 lg:px-6 text-gray-500 text-center ">
            Exclusive courses in Full Stack,AI,Blockchain,and more to help you
            stay ahead of the curve.
          </p>
        </div>
      </div>
      <div className="mb-14 flex flex-wrap justify-center items-center md:gap-5 lg:gap-8 md:px-10 md:mb-28 gap-5">
        <img
          className="md:w-auto md:h-8 lg:w-auto lg:h-10"
          src="./src/images/company-logos/adobe.svg"
          alt=""
        />
        <img
          className="md:w-auto md:h-8 lg:w-auto lg:h-10"
          src="./src/images/company-logos/airbnb.svg"
          alt=""
        />
        <img
          className="md:w-auto md:h-8 lg:w-auto lg:h-10"
          src="./src/images/company-logos/figma.svg"
          alt=""
        />
        <img
          className="md:w-auto md:h-8 lg:w-auto lg:h-10"
          src="./src/images/company-logos/framer.svg"
          alt=""
        />
        <img
          className="md:w-auto md:h-8 lg:w-auto lg:h-10"
          src="./src/images/company-logos/google.svg"
          alt=""
        />
        <img
          className="md:w-auto md:h-8 lg:w-auto lg:h-10"
          src="./src/images/company-logos/dropbox.svg"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-center lg:items-center">
        <div className="">
          <div className="flex flex-col justify-center items-center text-center lg:text-left ">
            <h1 className="mb-10 text-3xl md:text-4xl lg:text-[45px] md:px-24 lg:px-10 font-bold text-gray-800">
              GAIN A COMPETITIVE EDGE IN JOB MARKET
            </h1>
            <p className="mb-10 text-gray-500 text-lg md:px-24 lg:px-10 md:text-xl">
              Join founders,freelancers,designers,FAANG engineers,indie
              hackers,and more in our 24/7 WhatsApp group for less than a cup of
              coffee.
            </p>
          </div>
          <h1 className="mb-6 text-center lg:text-left lg:px-10 text-lime-600 font-extrabold">
            WHAT YOU'LL GET
          </h1>
          <ul className="mb-12 flex flex-col lg:flex-col md:px-24 lg:px-10 lg:items-start items-center">
            <li className="flex flex-col lg:flex-row lg:gap-2 justify-center items-center">
              <img
                className="mb-3"
                src="./src/images/icon-guides-2.svg"
                alt=""
              />
              <p className="mb-6 lg:mb-4 text-gray-500 text-lg font-medium">
                Comprehensive guides,projects,& courses
              </p>
            </li>
            <li className="flex flex-col lg:flex-row lg:gap-2 justify-center items-center">
              <img className="mb-3" src="./src/images/icon-job.svg" alt="" />
              <p className="mb-6 lg-mb-4 text-gray-500 text-lg font-medium">
                Exclusive job + internship postings
              </p>
            </li>

            <li className="flex flex-col lg:flex-row lg:gap-2 justify-center items-center">
              <img className="mb-3" src="./src/images/icon-tips.svg" alt="" />
              <p className="mb-8 lg:mb-4 text-gray-500 text-lg font-medium">
                1:1 Career guidance & mentorship
              </p>
            </li>
          </ul>
        </div>
        <div className="mb-12 flex flex-col justify-center items-center text-center">
          <img
            className="lg:size-[450px] lg:hover:rotate-6 lg:duration-300 "
            src="./src/images/illustration-job.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
