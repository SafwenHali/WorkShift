import React, { useState } from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
const signUp = () => {
  const [post, setPost] = useState({});

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:7000/api/auth", post)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    //window.location.href = "/Admin/Articles";
  };
  return (
    <div className="min-h-screen bg-black">
      <Nav PageName={"REGISTER"} />
      <h1 className="pl-14 pt-32 mb-10 text-4xl font-bold tracking-tight text-teal-600 ">
        Registration Form
      </h1>
      <center>
        <form
          className="w-96 lg:w-2/5 md:w-1/2 bg-neutral-300 mb-10 rounded-xl"
          onSubmit={handleSubmit}
        >
          <div className="px-5 py-10 pb-20">
            <div className="flex justify-around pb-2">
              <span className="m-1 w-full">
                <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                  First Name
                </label>
                <input
                  required
                  name=""
                  type="title"
                  onChange={handleInput}
                  className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
                  placeholder="Foolen"
                />
              </span>
              <span className="m-1 w-full">
                <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                  Last Name
                </label>
                <input
                  required
                  name=""
                  type="title"
                  onChange={handleInput}
                  className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
                  placeholder="Fooleni"
                />
              </span>
            </div>
            <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                Username
              </label>
              <input
                required
                name=""
                type="title"
                onChange={handleInput}
                className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
                placeholder="@foolen_fooleni"
              />
            </div>
            <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                Email
              </label>
              <input
                required
                name=""
                type="email"
                onChange={handleInput}
                className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
                placeholder="foolenfooleni@gmail.com"
              />
            </div>
            <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                Password
              </label>
              <input
                required
                name=""
                type="password"
                onChange={handleInput}
                className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
              />
            </div>
            <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                Comfirm Password
              </label>
              <input
                required
                name=""
                type="password"
                onChange={handleInput}
                className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
              />
            </div>
            <div>
              <h3 class="mb-4 font-semibold text-neutral-600 ">You Are...</h3>
              <ul class="items-center w-full text-sm font-medium text-neutral-600 bg-white rounded-lg sm:flex dark:bg-neutral-200 shadow-md dark:text-white">
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div class="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span className="w-full py-3 ml-2 font-medium text-gray-900 dark:bg-neutral-200 ">
                      Student{" "}
                    </span>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div class="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span className="w-full py-3 ml-2 font-medium text-gray-900 dark:bg-neutral-200 ">
                      Instructor
                    </span>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r rounded py-1 ">
                  <div class="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-millitary"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span className="w-full py-3 ml-2 font-medium text-gray-900 dark:bg-neutral-200 ">
                      {" "}
                      Entreprise
                    </span>
                    {/* </label> */}
                  </div>
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <button
                type="button"
                className=" transition duration-200 bg-teal-600 text-white w-full py-2.5 rounded-lg text-sm shadow-md hover:bg-teal-900 font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Register</span>
              </button>
              <div className="pt-3">
                <label className="font-semibold text-sm text-neutral-600 pb-2 block text-center">
                  Already have an account?
                </label>
                <button
                  type="button"
                  className="transition duration-200 -2 border border-teal-700 text-teal-700 w-full py-2.5 rounded-lg text-sm shadow-md hover:bg-neutral-200 font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">Login</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </center>
      <Footer />
    </div>
  );
};
export default signUp;
