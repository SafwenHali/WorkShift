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
  const token = localStorage.getItem("at");
  const [id] = useState(jwt_decode(token).id || "");
  const { data } = useFetchUser(id);

  const handleProfile = () => {};
  const handleUsername = () => {};
  const handleEmail = () => {};
  const handlePassword = () => {};
  
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
        :   ("")
    }
        </div>
        <div className={`p-4 ${data.role==="student" ? "lg:p-24 p-10 pt-20" : "px-10 pl-72"}`}>
            <div className="p-8 bg-teal-900 shadow mt-14 rounded-lg">
      <center>
        <div
          className="w-96 lg:w-2/5 md:w-1/2">
          <div className="px-5 py-10 pb-20">
          <div className="py-2">
              <button
                onClick={handleProfile}
                className="transition duration-200 bg-neutral-200 border border-teal-900 text-neutral-900 text-sm w-full py-4 rounded-lg shadow-md hover:bg-teal-700 hover:text-neutral-100 font-semibold text-center inline-block"
                >
                <span className="inline-block mr-2 ">Update Profile</span>
              </button>
            </div>
            <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-300 pb-1 block ">
                Username
              </label>
              <div className="flex justify-between border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md">
                <h2 className="p-2 font-semibold text-neutral-900">
                  CHANGE USERNAME
                </h2>
                <button  
                  onClick={handleUsername}
                  className="p-2 bg-teal-700 hover:bg-teal-900 text-neutral-200 font-semibold rounded-xl"> 
                  Update
                </button>
              </div>
            </div>
            {/* <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-300 pb-1 block ">
                Date of birth
              </label>
              <input
                type="date"
                className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
              />
            </div> */}
            <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-300 pb-1 block ">
                Email
              </label>
              <div className="flex justify-between border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md">
                <h2 className="p-2 font-semibold text-neutral-900">
                  CHANGE E-MAIL
                </h2>
                <button 
                  onClick={handleEmail}
                  className="p-2 bg-teal-700 hover:bg-teal-900 text-neutral-200 font-semibold rounded-xl"> 
                  Update
                </button>
              </div>
            </div>
            <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-300 pb-1 block ">
                Password
              </label>
              <div className="flex justify-between border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md">
                <h2 className="p-2 font-semibold text-neutral-900">
                  CHANGE PASSWORD
                </h2>
                <button 
                  onClick={handlePassword}
                  className="p-2 bg-teal-700 hover:bg-teal-900 text-neutral-200 font-semibold rounded-xl"> 
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>

            </div>
        </div>
    </div>
  );
};
export default profile;
