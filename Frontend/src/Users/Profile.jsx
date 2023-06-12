import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import useFetchUser from "../hooks/useFetchUser";

import StudentNavBar from "../components/StudentNavbar"
import AdminSideBar from "../admin/components/Sidebar"
import InstructorSideBar from "../components/FormateurSidebar"
import EnterpriseSideBar from "../components/EnterpriseSideBar"

const profile = () => {
    
  try {
    const token = localStorage.getItem("at");
    const role =jwt_decode(token).role;
    
  } catch (error) {
    return (
      <div className="border-2 border-neutral-900 min-h-screen h-full bg-neutral-900">
        <center className=" text-neutral-300 pt-8">
          <img src="/icon/LOGO.svg" className="w-80"></img>
          <span className="text-4xl font-bold text-neutral-100">
            Oops,&nbsp;
          </span>
          <span className="pt-3 text-2xl font-semibold text-neutral-100">
            you're not signed to an account
          </span>
          <div className="text-xl font-semibold text-neutral-200 pt-4">
            Go back to the homepage and try to Signin
          </div>
          <div className="flex ">
            <div className="m-auto py-5 pb-28">
              <a href="/Home">
                <button className=" w-48 h-10 rounded-lg border border-teal-900 text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-neutral-900 font-semibold duration-300">
                  Go back to website
                </button>
              </a>
            </div>
          </div>
        </center>
      </div>
    );
  }
  const handlelogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      localStorage.clear();
      window.location.href = "/Home";
    }
  };
  const handleClick = () =>
  {window.location.href = "/Edit-Profile"}
  const token = localStorage.getItem("at");
  const [id] = useState(jwt_decode(token).id || "");
  const { data } = useFetchUser(id);
  return (
    <div>
      <div>
        {   data.role==="student" ? 
        (<StudentNavBar/>) 
        :   data.role==="enterprise" ? 
        (<EnterpriseSideBar/>)
        :   data.role==="admin" ? 
        (<AdminSideBar/>)
        :   data.role==="instructor" ? 
        (<InstructorSideBar/>)
        :   (console.log("User role not identified"))
    }
        </div>
        <div className={`p-4  ${data.role==="student" ? "lg:p-24 p-10 pt-20" : "px-10 pl-72 h-screen bg-neutral-800"}`}>
            <div className="p-8 bg-teal-800 shadow mt-24 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                      <div>
                          <p className="font-bold text-neutral-200 text-xl">
                          {   data.role==="student" ? 
                              ("2") 
                          :   data.role==="enterprise" ? 
                              ("2")
                          :   data.role==="admin" ? 
                              ("")
                          :   data.role==="instructor" ? 
                              ("2")
                          :   (console.log("User role not identified"))
                      }
                          </p>
                          <p className="text-neutral-300">
                          {   data.role==="student" ? 
                              ("Courses Owned") 
                          :   data.role==="enterprise" ? 
                              ("Posts Active")
                          :   data.role==="admin" ? 
                              ("")
                          :   data.role==="instructor" ? 
                              ("Courses Uploaded")
                          :   (console.log("User role not identified"))
                      }</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-48 h-48 overflow-hidden bg-neutral-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                          <img 
                          className="w-full h-full object-cover"
                          src="data:image/png;base64,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"/>
                      </div>
                    </div>

                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button
                    onClick={handleClick}
                    className="text-neutral-900 py-2 px-4 uppercase rounded bg-neutral-100 hover:bg-neutral-300 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        Account Settings
                    </button>
                    <button 
                        onClick={handlelogout}
                        className="text-white py-2 px-4 uppercase rounded bg-red-700 hover:bg-red-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        Log Out
                    </button>
                    </div>
                </div>

                <div className="mt-20 text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-neutral-200">{data.firstName} {data.lastName}
                    <span className="font-light text-neutral-300">{/*age*/}</span>
                    </h1>
                    <p className="font-light text-neutral-100 mt-3">@{data.userName}</p>

                    <p className="mt-8 text-neutral-300">{/*Job*/}</p>
                </div>

                <div className="mt-12 flex flex-col justify-center">
                    <p className="text-neutral-100 text-center font-light lg:px-16">{/*Bio*/}</p>
                </div>

            </div>
        </div>
    </div>
  );
};
export default profile;
