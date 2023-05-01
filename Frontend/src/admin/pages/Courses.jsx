import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import useFetchCat from "../../hooks/useFetchCategories";
import useFetchSubCat from "../../hooks/useFetchAllSubCategories";
import useFetchAllFormations from "../../hooks/useFetchAllFormations";

const Category =() => {
    const cat = useFetchCat().data;
    const subCat=useFetchSubCat().data
    const formations=useFetchAllFormations().data
    
        const [selectedCategoryValue, setSelectedCategoryValue] = useState('');
        const [subCategoryList, setSubCategoryList] = useState([]);
      
        const handleCategoryChange = (event) => {
          setSelectedCategoryValue(event.target.value);
          let subCatList=[];
          subCat.forEach((element) => {
            if(event.target.value===element.category_id)
            subCatList.push(element)
          });
         
         setSubCategoryList(subCatList)
         
        };

        const [selectedSubCategoryValue, setSelectedSubCategoryValue] = useState('');
        const [formationList, setformationList] = useState([]);
      
        const handleSubCategoryChange = (event) => {
            setSelectedSubCategoryValue(event.target.value);
            let formList=[];
            formations.forEach((element)=>{
                if(event.target.value===element.SubCategory)
                formList.push(element)
            });
            setformationList(formList)
            
        };

    return(
        <div>
            <Sidebar/>
            <div className="pl-20">
                <div className="p-14 pl-64 min-h-screen h-full bg-teal-900">
                <a href="/Admin/Manage-Contenent" className="bg-teal-700 hover:bg-teal-600 hover:border rounded text-xl text-neutral-100 font-light">
                        &nbsp;<ion-icon name="arrow-back-outline"></ion-icon>
                        &nbsp; Back To Contenent &nbsp;
                    </a>
                    <div className="text-6xl text-neutral-100 font-light">
                            COURSES LIST
                        </div>
                    <div className="pb-10 flex justify-between ">
                         <span></span>
                         <span className="">
                         <a href="/Admin/New-Course"
                            className="border-2 border-green-700 bg-green-700 text-neutral-100 rounded-md px-4 py-2 m-2 transition duration-100 ease select-none hover:text-green-600 hover:bg-neutral-100">
                            + Add Course
                        </a>
                         </span>
                    </div> 
                    <label className="block mb-2 text-sm font-medium text-neutral-200 dark:text-white">
                        Select a Category
                    </label>
                    <select value={selectedCategoryValue} onChange={handleCategoryChange} className="bg-neutral-100 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue>Select Category</option>
                    {cat.map( c => (
                                    <option key={c._id} value={c._id}>{c.name}</option>
                                 ))}
                    </select>
                    <label className="pt-4 block mb-2 text-sm font-medium text-neutral-200 dark:text-white">
                        Select a SubCategory
                    </label>
                    <select value={selectedSubCategoryValue} onChange={handleSubCategoryChange} className="bg-neutral-100 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue>Select SubCategory</option>
                    {subCategoryList.map( sc => (
                                    <option key={sc._id} value={sc._id}>{sc.name}</option>
                                 ))}
                    </select>
                    {/**sssssssssssssssssssssssssssssssssssss */}
                    <div className="mx-4 my-10 relative overflow-x-auto shadow-lg sm:rounded-lg">
                        <table className="w-full text-sm text-left text-neutral-500 ">
                            <thead className="text-xs text-neutral-700 uppercase bg-neutral-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        formateur
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
                            {formationList.map( a => {
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
                                       <a href={"/Formation/"+a._id} className="hover:underline">
                                        {a.nom}
                                        </a> 
                                    </th>
                                    <td className="px-6 py-4">
                                        {a.duree}
                                    </td>
                                    <td className="px-6 py-4">
                                        {DateC}
                                    </td>
                                    <td className="px-6 py-4">
                                        {DateU}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={"/Admin/Edit-Course/"+a._id} className="font-medium text-blue-500  hover:underline">
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
        )
    }
export default Category