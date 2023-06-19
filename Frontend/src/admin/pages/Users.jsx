import React,{useState} from "react";
import Sidebar from "../components/Sidebar";
import useFetch from "../../hooks/useFetchAllUsers";
import jwt_decode from "jwt-decode";


const Users =() => {
    const {data} = useFetch();
    console.log(data)


    try {
        const token = localStorage.getItem("at");
        const role = jwt_decode(token).role;
        console.log(role);
        if (role != "admin") {
          throw error;
        }
      } catch (error) {
        return (
          <div className="border-2 border-neutral-900 min-h-screen h-full bg-neutral-900">
            <center className=" text-neutral-300 pt-8">
              <img src="/icon/LOGO.svg" className="w-80"></img>
              <span className="text-4xl font-bold text-neutral-100">
                Oops,&nbsp;,
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
      
    return(
        <div>
            <Sidebar/>
            <div className="pl-20">
                <div className="p-20 pl-64 min-h-screen h-full bg-teal-900">
                    <div className="text-6xl text-neutral-100 font-light">
                            Users LIST
                        </div>
                    <div className="pb-10 flex justify-between ">
                         
                    </div> 
                    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
                        <table className="w-full text-sm text-left text-neutral-500 ">
                            <thead className="text-xs text-neutral-700 uppercase bg-neutral-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                      @username  
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                       Last Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                       First Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                       E-mail
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                       Role
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Created on
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
                                    <th scope="row" className="px-6 py-4 hover:underline font-medium text-neutral-900 whitespace-nowrap">
                                        @{a.userName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {a.firstName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {a.lastName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {a.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {a.role}
                                    </td>
                                    <td className="px-6 py-4">
                                        {DateC}
                                    </td>
                                </tr>
                            )})}
                            </tbody>
                        </table>
                    </div>

            
                </div>
            </div>
            
        </div>
    )
}
export default Users;