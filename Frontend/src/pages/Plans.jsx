import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
const Plans = () => {
  return (
    <div className="min-h-screen bg-black">
      <Nav PageName={"SUBSCRIPTION PLANS"} />
      <div class="bg-gradient-to-b from-black-100">
        <div class="container m-auto px-6 py-32 md:px-12 lg:px-20">
          <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2
              class="text-2xl text-teal-700
             font-bold md:text-4xl"
            >
              Our Subscription Plans
            </h2>
          </div>
          <div class="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div class="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div
                aria-hidden="true"
                class="absolute top-0 w-full h-full rounded-2xl bg-teal-800 shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div class="relative p-6 space-y-6 lg:p-8">
               Subscribe
              </div>
            </div>

            <div class="relative group md:w-6/12 lg:w-7/12">
              <div
                aria-hidden="true"
                class="absolute top-0 w-full h-full rounded-2xl bg-neutral-200 shadow-lg transition duration-500 group-hover:scale-105"
              ></div>
              <div class="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                Details
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plans;
