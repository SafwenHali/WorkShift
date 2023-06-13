import React, { useState } from "react";
import Sidebar from "../components/FormateurSidebar";
import useFetch from "../hooks/useFetchFormationsByFormateurId"
import jwt_decode from "jwt-decode";

const Formateur = () => {
  const token = localStorage.getItem("at");
  const formationList = useFetch(jwt_decode(token).id || [])
  const d = formationList.data
  try {
    const token = localStorage.getItem("at");
    const [role] = useState(jwt_decode(token).role || "");
    console.log(role);
    if (role != "instructor") {
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
  return (
    <div>
      <Sidebar />
      <div className="pl-32">
        <div className="p-32 pl-56 h-screen bg-neutral-800">
          <div className="text-6xl text-teal-600 font-light">
            My COURSES LIST
          </div>
          <div className="pb-10 flex justify-between ">
            <span></span>
            <span className="">
              <a href="/Formateur/AddCourse"
                className="border-2 border-teal-700 bg-teal-700 text-neutral-100 rounded-md px-4 py-2 m-2 transition duration-100 ease select-none hover:text-teal-600 hover:bg-neutral-100">
                + Add Course
              </a>
            </span>
          </div> 
                    
                    {/*<select value={selectedSubCategoryValue} onChange={CourseListChange} className="bg-neutral-100 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue>Select Course</option>
                        {FormationList.map( sc => (
                                <option key={sc._id} value={sc._id}>{sc.name}</option>
                                 ))}
                    </select>*/}
                    <div className="mx-4 my-10 relative overflow-x-auto shadow-lg sm:rounded-lg">
                        <table className="w-full text-sm text-left text-neutral-500 ">
                            <thead className="text-xs text-neutral-700 uppercase bg-neutral-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
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
                            {d.map( a => {
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
                                <tr key={a._id} className="bg-neutral-100 border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap">
                                       <a href={"/Formation/"+a._id} className="hover:underline">
                                        {a.formationName}
                                        </a> 
                                    </th>
                                    <td className="px-6 py-4">
                                        {a.formationPrice}
                                    </td>
                                    <td className="px-6 py-4">
                                        {DateC}
                                    </td>
                                    <td className="px-6 py-4">
                                        {DateU}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={"/Formateur/Edit-Course/"+a._id} className="font-medium text-blue-500  hover:underline">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            )})}
                            </tbody>
                        </table>
                    </div>
                    {/**sssssssssssssssssssssssssssssssssssss */}
         </div>
      </div>
    </div>
  );
};
export default Formateur;
