import React from "react";

const Subscription = () => {
  return (
    <section className="px-4 mb-16 md:px-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-3 text-[28px] md:text-4xl lg:text-5xl md:mb-6 font-bold text-center ">
          SIMPLE NO-TRICKS PRICING
        </h1>
        <p className="mb-12 text-center md:text-[19px] lg:text-xl text-gray-500 font-medium">
          Everything you need to grow 10x for less than a coffee.
        </p>
      </div>
      <div className="lg:flex lg:flex-row border border-gray-300 rounded-3xl  justify-center items-center">
        <div className="p-5 w-full md:p-10   flex flex-col justify-center items-start gap-5">
          <h1 className="text-xl  font-bold text-line md:text-gray-700 md:text-2xl">
            Premium Elite Subscription
          </h1>
          <p className="text-gray-500">
            Join founders, freelancers,designers,FAANG engineers,indie
            hackers,and more in our 24/7 WhatsApp Group for less than a cup of
            coffee.
          </p>
          <div className="flex w-full justify-start items-center">
            <h1 className="w-[190px] flex justify-start text-lg text-lime-600 font-bold">
              What's included
            </h1>
            <hr className="hidden w-full md:block border-[1.3px]" />
          </div>

          <ul className="text-gray-600 md:grid md:grid-cols-2 md:gap-3">
            <li className="mb-3 flex gap-4">
              <img src="/images/icon-check.svg" alt="" />
              <p className="md:text-base md:-ml-2">Expert Mentors</p>
            </li>
            <li className="mb-3 flex gap-4">
              <img src="/images/icon-check.svg" alt="" />
              <p className="md:text-base md:-ml-2">Exclusive Courses</p>
            </li>
            <li className="mb-3 flex gap-4 ">
              <img src="/images/icon-check.svg" alt="" />
              <p className="md:text-base md:-ml-2">
                Networking and collaboration
              </p>
            </li>
            <li className="mb-3 flex gap-4 lg:items-center">
              <img className="lg:w-4" src="/images/icon-check.svg" alt="" />
              <p className="md:text-base md:-ml-2">Career Guidance</p>
            </li>
          </ul>
        </div>

        <div className="w-full p-5 bg-gray-100 flex flex-col justify-center items-center rounded-3xl">
          <h1 className="text-lg mb-4">Less than a cup of coffee</h1>
          <h1 className=" mb-8 md:text-[42px] flex gap-1 items-center text-5xl font-bold">
            $5
            <span className="text-4xl text-gray-400 line-through">$1000</span>
          </h1>
          <button className="mb-8 px-8 py-4 text-xl md:text-base md:font-extrabold font-bold bg-lime-600 text-white rounded-full">
            Join Community
          </button>

          <div className="mb-3 flex size-10 justify-center items-center ">
            <img
              className="rounded-full"
              src="/images/avatars/avatar-aryan.webp"
              alt=""
            />
            <img
              className="-ml-3 rounded-full"
              src="/images/avatars/avatar-kevin.webp"
              alt=""
            />
            <img
              className="-ml-3 rounded-full"
              src="/images/avatars/avatar-umang.webp"
              alt=""
            />
            <img
              className="-ml-3 rounded-full"
              src="/images/avatars/avatar-1.png"
              alt=""
            />
            <img
              className="-ml-3 rounded-full"
              src="/images/avatars/avatar-2.png"
              alt=""
            />
          </div>
          <p className="font-medium text-gray-700">100+ Active Members</p>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
