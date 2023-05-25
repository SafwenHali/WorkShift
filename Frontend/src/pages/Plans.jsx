import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
const Plans = () => {
  return (
    <div className="min-h-screen bg-black">
      <Nav PageName={"SUBSCRIPTION PLANS"} />
      <div class="bg-gradient-to-b from-black-100">
        <div class="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2
              class="text-2xl text-teal-600
             font-bold md:text-4xl"
            >
              A Tailus Blocks subscription gives you access to our components
              and more.
            </h2>
          </div>
          <div class="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div class="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div
                aria-hidden="true"
                class="absolute top-0 w-full h-full rounded-2xl bg-slate-600 shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div class="relative p-6 space-y-6 lg:p-8">
                <h3 class="text-3xl text-white font-semibold text-center">
                  Organisation
                </h3>
                <div>
                  <div class="relative flex justify-around">
                    <div class="flex items-end">
                      <span class="text-8xl text-white font-bold leading-0">
                        35
                      </span>
                      <div class="pb-2">
                        <span class="block text-2xl text-white font-bold">
                          %
                        </span>
                        <span class="block text-xl text-teal-300 font-bold">
                          Off
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul role="list" class="w-max space-y-4 py-6 m-auto text-white">
                  <li class="space-x-2">
                    <span class="text-teal-300 font-semibold">&check;</span>
                    <span>First premium advantage</span>
                  </li>
                  <li class="space-x-2">
                    <span class="text-teal-300 font-semibold">&check;</span>
                    <span>Second advantage weekly</span>
                  </li>
                  <li class="space-x-2">
                    <span class="text-teal-300 font-semibold">&check;</span>
                    <span>Third advantage donate to project</span>
                  </li>
                </ul>
                <p class="flex items-center justify-center space-x-4 text-lg text-white text-center">
                  <span>Call us at</span>
                  <a
                    href="tel:+24300"
                    class="flex space-x-2 items-center text-teal-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <span class="font-semibold">+1 000 000</span>
                  </a>
                  <span>or</span>
                </p>
                <button
                  type="submit"
                  title="Submit"
                  class="block w-full py-3 px-6 text-center rounded-xl transition text-teal-900 hover:bg-teal-600 active:bg-blue-200 focus:bg-indigo-600"
                >
                  <span class="text-light font-semibold">Send us an email</span>
                </button>
              </div>
            </div>

            <div class="relative group md:w-6/12 lg:w-7/12">
              <div
                aria-hidden="true"
                class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
              ></div>
              <div class="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                <ul role="list" class="space-y-4 py-6 text-gray-600">
                  <li class="space-x-2">
                    <span class="text-teal-600 font-semibold">&check;</span>
                    <span>First premium advantage</span>
                  </li>
                  <li class="space-x-2">
                    <span class="text-teal-600 font-semibold">&check;</span>
                    <span>Second advantage weekly</span>
                  </li>
                  <li class="space-x-2">
                    <span class="text-teal-600 font-semibold">&check;</span>
                    <span>Third advantage donate to project</span>
                  </li>
                  <li class="space-x-2">
                    <span class="text-teal-600 font-semibold">&check;</span>
                    <span>Fourth, access to all components weekly</span>
                  </li>
                </ul>
                <p class="text-gray-700">
                  Team can be any size, and you can add or switch members as
                  needed. Companies using our platform include:
                </p>
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
