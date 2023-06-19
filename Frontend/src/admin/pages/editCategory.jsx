import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import useFetch from "../../hooks/useFetchCategoryName";
import useFetchSubCategories from "../../hooks/useFetchSubCategories";
import { useParams } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const editCategory =() => {
    const{id}= useParams();
    const {data}= useFetchSubCategories(id);
    const dat = useFetch(id);

  const [post, setPost] =useState()
  const handleInput = (event) =>{
    setPost({...post,[event.target.name]: event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(post);
    axios.put('http://127.0.0.1:7000/api/Category/'+id,post)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    window.location.href ="/Admin/Categories"
  }
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
                <a href="/Admin/Categories" className="bg-teal-700 hover:bg-teal-600 hover:border rounded text-xl text-neutral-100 font-light">
                    &nbsp;<ion-icon name="arrow-back-outline"></ion-icon>
                    &nbsp; Back To Categories List &nbsp;
                </a> 
                <div className="pb-8 text-6xl text-neutral-100 font-light">
                        Edit Category: {dat.data.name}
                </div>
                <div className="pb-10 flex justify-between ">
                    <span></span>
                    <span className="">
                        <a href={"/Admin/New-SubCategory/"+id}
                            className="border-2 border-green-700 bg-green-700 text-neutral-100 rounded-md px-4 py-2 m-2 transition duration-100 ease select-none hover:text-green-600 hover:bg-neutral-100">
                            + Add Sub Category
                        </a>
                    </span>
                </div> 
                <div className="flex justify-center pb-10">  
                    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
                        <table className="w-full text-sm text-left text-neutral-500 ">
                            <thead className="text-xs text-neutral-700 uppercase bg-neutral-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((n)=>(
                                  <tr className="bg-neutral-100 border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap">
                                        <a href={"/SubCategory/"+n._id} className="hover:underline">
                                            {n.name}
                                        </a> 
                                    </th>
                                    <td className="px-6 py-4">
                                        {n.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={"/Admin/Edit-SubCategory/"+n._id} className=" text-blue-500 ">
                                            <div className="bg-blue-600 hover:bg-blue-500 font-semibold rounded shadow-md text-neutral-100 font-light p-2 px-8">
                                                Edit
                                            </div> 
                                        </a>
                                    </td>
                                </tr>  
                                ))}
                                
                                </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-center">
                  <form className="w-full max-w-lg bg-neutral-100 p-4 rounded-xl" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-neutral-700 text-xs font-bold mb-2">
                          Edit Category Name
                        </label>
                        <input className="appearance-none block w-full bg-neutral-200 text-neutral-700 border border-neutral-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-neutral-100 focus:border-neutral-500" 
                        name="name"               
                        type="Title"
                        defaultValue={dat.data.name}
                        onChange={handleInput}
                        onLoad={handleInput}/>
                      </div>
                    </div>
                    <div className="md:flex md:items-center">
                      <div className="md:w-1/3">
                        <button className="shadow bg-teal-600 hover:bg-teal-700 text-neutral-100 font-bold py-2 px-4 rounded" type="submit">
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
    )}
    export default editCategory;