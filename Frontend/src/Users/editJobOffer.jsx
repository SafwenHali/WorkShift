import React, { useState } from "react";
import Sidebar from "../components/EnterpriseSideBar";
import useFetch from "../hooks/useFetchJobOffer";
import { useParams } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";


const AddArticles =() => {
    const{id}= useParams();
    const {data} = useFetch(id);

  const [post, setPost] =useState()
  const handleInput = (event) =>{
    setPost({...post,[event.target.name]: event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(post);
    axios.put('http://127.0.0.1:7000/api/offers/'+id,post)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    window.location.href ="/Enterprise"
  }
  const handleButtonClick = () => {
    //demete
    const confirmed = window.confirm('Are you sure you want to delete this Job Offer?');
    if (confirmed) {
        axios.delete('http://127.0.0.1:7000/api/offers/'+id)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
      console.log('User confirmed action');
      window.location.href ="/Enterprise"
    } else {
      // code to execute if user cancels
      console.log('User cancelled action');
    }
  };
  try {
    const token = localStorage.getItem("at");
    const role = jwt_decode(token).role;
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
                <div className="p-20 pl-64 min-h-screen h-full bg-neutral-800"> 
                    <a href="/Admin/Articles" className="bg-teal-700 hover:bg-teal-600 hover:border rounded text-xl text-neutral-100 font-light">
                        &nbsp;<ion-icon name="arrow-back-outline"></ion-icon>
                        &nbsp; Back &nbsp;
                    </a> 
                    <div className="pb-8 text-6xl text-neutral-100 font-light">
                            Edit Job Offer
                    </div>
                    <div className="flex justify-center">   
                      <form className="w-full max-w-lg bg-neutral-100 p-4 rounded-xl" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-neutral-700 text-xs font-bold mb-2">
                              Job Title
                            </label>
                            <input className="appearance-none block w-full bg-neutral-200 text-neutral-700 border border-neutral-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-neutral-100 focus:border-neutral-500" 
                            name="jobName"               
                            type="Title"
                            defaultValue={data.jobName}
                            onChange={handleInput}
                            onLoad={handleInput}/>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-neutral-700 text-xs font-bold mb-2">
                              Cover image url 
                            </label>
                            <p className="text-neutral-600 text-xs italic pb-1">
                                -Choosing images from &nbsp;
                                <a className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.istockphoto.com/stock-photos">
                                  istockphoto.com
                                </a> 
                                &nbsp; recommended  
                            </p>
                            <input className="appearance-none block w-full bg-neutral-200 text-neutral-700 border border-neutral-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-neutral-100 focus:border-neutral-500" 
                            name="jobCover" 
                            type="Link"
                            defaultValue={data.jobCover}
                            onChange={handleInput}
                            onLoad={handleInput}/>  
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-neutral-700 text-xs font-bold mb-2">
                              Job Description
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-neutral-200 text-neutral-700 border border-neutral-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-neutral-100 focus:border-neutral-500 h-48 resize-none"
                            name="jobDescription"
                            defaultValue={data.jobDescription}
                            onChange={handleInput}
                            onLoad={handleInput}></textarea>
                            <p className="text-neutral-600 text-xs italic">
                              Any empty field woulds keep original data.
                            </p>
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
                   {/*<div>
                        <button 
                        onClick={handleButtonClick}
                        className="shadow bg-red-600 hover:bg-neutral-200 text-neutral-100 hover:text-red-600 border border-red-600 font-bold py-2 px-4 rounded" type="submit">
                            Delete Job Offer
                        </button>
                    </div> */} 
                </div>
              </div>
            </div>
      )
}
export default AddArticles;