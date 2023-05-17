import React from "react";
import useFetch from "../../../hooks/useFetchAllHobbies"
import Sidebar from "../../components/Sidebar";


const Hobbies =() => {
    const {data} = useFetch();
    return(
        <div>
            <Sidebar/>
            <div className="pl-20">
                <div className="p-20 pl-64 min-h-screen h-full bg-teal-900">  
                <a href="/Admin/Manage-Quiz" className="bg-teal-700 hover:bg-teal-600 hover:border rounded text-xl text-neutral-100 font-light">
                        &nbsp;<ion-icon name="arrow-back-outline"></ion-icon>
                        &nbsp; Back To Manage Quiz &nbsp;
                    </a>
                    <div className="text-6xl text-neutral-100 font-light">
                            Hobbies LIST
                        </div>
                    <div className="pb-10 flex justify-between ">
                         <span></span>
                         <span className="">
                         <a href="/Admin/Quiz/New-Hobby"
                            className="border-2 border-green-700 bg-green-700 text-neutral-100 rounded-md px-4 py-2 m-2 transition duration-100 ease select-none hover:text-green-600 hover:bg-neutral-100">
                            + Add Hobby
                        </a>
                         </span>
                    </div> 
                    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
                        <table className="w-full text-sm text-left text-neutral-500 ">
                            <thead className="text-xs text-neutral-700 uppercase bg-neutral-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Hobby Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map( a => {
                                
                                 return(
                                <tr className="bg-neutral-100 border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap">
                                       <a href={"/Hobby/"+a._id} className="hover:underline">
                                        {a.hobbyName}
                                        </a> 
                                    </th>
                                    <td className="px-6 py-4">
                                        {a.hobbyDesc}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={"/Admin/Quiz/Edit-Hobby/"+a._id} className="font-medium text-blue-500  hover:underline">
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
    )
}
export default Hobbies;