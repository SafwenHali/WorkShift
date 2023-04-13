import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import useFetch from "../../hooks/useFetchSubCategory";
import useFetchCat from "../../hooks/useFetchCategoryName";
import { useParams } from "react-router-dom";
import axios from "axios";


const editSubCategory =() => {
  const{id}= useParams();
  const {data} = useFetch(id);

  const [post, setPost] =useState({
  })
  const handleInput = (event) =>{
    setPost({...post,[event.target.name]: event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(post)
    axios.put('http://127.0.0.1:7000/api/subcategory/'+id,post)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    window.location.href ="/Admin/Edit-Category/"+data.category_id;
  }
  const handleButtonClick = () => {
    const confirmed = window.confirm('Are you sure you want to delete this Sub Category?');
    if (confirmed) {
        axios.delete('http://127.0.0.1:7000/api/subcategory/'+id)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
      console.log('User confirmed action');
      window.location.href ="/Admin/Edit-Category/"+data.category_id
    } else {
      // code to execute if user cancels
      console.log('User cancelled action');
    }
  };
    return(
        <div>
            <Sidebar/>
            <div className="pl-20">
                <div className="p-20 pl-64 min-h-screen h-full bg-teal-900">  
                <a href={"/Admin/Edit-Category/"+data.category_id} className="bg-teal-700 hover:bg-teal-600 hover:border rounded text-xl text-neutral-100 font-light">
                        &nbsp;<ion-icon name="arrow-back-outline"></ion-icon>
                        &nbsp; Back To Category: {/*data.category_id*/} &nbsp;
                    </a>
                    <div className="pb-8 text-6xl text-neutral-100 font-light">
                            Update Sub Category
                            <div className="font-bold">  </div>
                    </div>
                    <div className="flex justify-center">   
                      <form className="w-full max-w-lg bg-white p-4 rounded-xl" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Name 
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            name="name"               
                            type="Title"
                            defaultValue={data.name}
                            onChange={handleInput}
                            onLoad={handleInput}/>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Description
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                            name="description"
                            defaultValue={data.description}
                            onChange={handleInput}
                            onLoad={handleInput}>
                            </textarea>
                            <p className="text-gray-600 text-xs italic">
                              Re-size can be disabled by set by resize-none / resize-y / resize-x / resize
                            </p>
                          </div>
                        </div>
                        <div className="md:flex md:items-center">
                          <div className="md:w-1/3">
                            <button className="shadow bg-teal-600 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                              Update
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div>
                        <button 
                        onClick={handleButtonClick}
                        className="shadow bg-red-600 hover:bg-neutral-200 text-neutral-100 hover:text-red-600 border border-red-600 font-bold py-2 px-4 rounded" type="submit">
                            Delete Sub Category
                        </button>
                    </div>
                </div>
              </div>
            </div>
      )
}
export default editSubCategory;