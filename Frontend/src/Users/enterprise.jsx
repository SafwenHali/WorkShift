import React, { useState, useEffect } from "react";
import Sidebar from "../components/EnterpriseSideBar";
import jwt_decode from "jwt-decode";
import useFetchUser from "../hooks/useFetchUser";
import useFetchJobOffersByRecruiter from "../hooks/useFetchJobOffersByRecruiter";

const Formateur = () => {
  try {
    const token = localStorage.getItem("at");
    const [role] = useState(jwt_decode(token).role || "");
    console.log(role);
    if (role != "enterprise") {
      throw error;
    }
  } catch (error) {
    return (
      <div className="border-2 border-neutral-900 min-h-screen h-full bg-neutral-900">
        <center className=" text-neutral-300 pt-8">
          <img src="/icon/LOGO.svg" className="w-80"></img>
          <span className="text-4xl font-bold text-neutral-100">
            Oops,&nbsp;
          </span>
          <span className="pt-3 text-2xl font-semibold text-neutral-100">
            you're not authorized to access this page
          </span>
          <div className="text-xl font-semibold text-neutral-200 pt-4">
            Go back to the homepage.
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
    const {data} = useFetchJobOffersByRecruiter(id)
    console.log(data)
  return (
    <div>
      <Sidebar />
      <div className="pl-0 lg:pl-20 h-screen bg-neutral-800">
      <div className="p-20 pl-64">
                    <div className="text-6xl text-teal-700 font-light">
                            POSTS LIST
                        </div>
                    <div className="pb-10 flex justify-between ">
                         <span></span>
                         <span className="">
                         <a href="/Enterprise/New-Post"
                            className="border-2 border-teal-700 bg-teal-700 text-neutral-100 rounded-md px-4 py-2 m-2 transition duration-100 ease select-none hover:text-green-600 hover:bg-neutral-100">
                            + Add Post
                        </a>
                         </span>
                    </div> 
                    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
                        <table className="w-full text-sm text-left text-neutral-500 ">
                            <thead className="text-xs text-neutral-100 uppercase bg-teal-700">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Job Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Job Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Created on
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Last update
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map( a => {
                                 const DateU = new Date(a.updatedAt).toLocaleDateString("en-GB", {
                                     year: "numeric",
                                     day: "2-digit",
                                     month: "long",
                                     hour:"2-digit",
                                     minute:"2-digit",
                                     second:"2-digit",
                                     });
                                     const DateC = new Date(a.createdAt).toLocaleDateString("en-GB", {
                                        year: "numeric",
                                        day: "2-digit",
                                        month: "long",
                                        hour:"2-digit",
                                        minute:"2-digit",
                                        second:"2-digit",
                                        });
                                 return(
                                <tr className="bg-neutral-100 border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap">
                                       <a href={"/Articles/"+a._id} className="hover:underline">
                                        {a.jobName}
                                        </a> 
                                    </th>
                                    <td className="px-6 py-4">
                                        {a.jobDescription}
                                    </td>
                                    <td className="px-6 py-4">
                                        {DateC}
                                    </td>
                                    <td className="px-6 py-4">
                                        {DateU}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={"Enterprise/Edit-Post/"+a._id} className="font-medium text-blue-500  hover:underline">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            )})}
                            </tbody>
                        </table>
                    </div>

            
                </div>
      </div>
    </div>
  );
};
export default Formateur;
