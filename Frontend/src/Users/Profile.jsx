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
        <div className={`p-4 ${data.role==="student" ? "lg:p-24 p-10 pt-20" : "px-10 pl-72"}`}>
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
                        src=""/>
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
