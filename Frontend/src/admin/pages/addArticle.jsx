import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";


const AddArticles =() => {
  const [post, setPost] =useState({
    articleName:'',
    articleWriter:'',
    articleText:'',
    articleCover:'',
  })
  const handleInput = (event) =>{
    setPost({...post,[event.target.name]: event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://127.0.0.1:7000/api/article',post)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
  }
    return(
        <div>
            <Sidebar/>
            <div className="pl-20">
                <div className="p-20 pl-64 h-full bg-teal-900">  
                    <div className="pb-8 text-6xl text-neutral-100 font-light">
                            Write A New Article
                    </div>
                    <div className="flex justify-center">   
                      <form className="w-full max-w-lg bg-white p-4 rounded-xl" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Ariticle Title
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            name="articleName"               
                            type="Title"
                            onChange={handleInput}/>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              image url 
                            </label>
                            <p className="text-gray-600 text-xs italic pb-1">
                                -Choosing images from &nbsp;
                                <a className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.istockphoto.com/stock-photos">
                                  istockphoto.com
                                </a> 
                                &nbsp; recommended  
                            </p>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            name="articleCover" 
                            type="Link"
                            onChange={handleInput}/>  
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Writer's name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                             name="articleWriter"
                            type="Name"
                            onChange={handleInput}/>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Article
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                            name="articleText"
                            onChange={handleInput}>
                            </textarea>
                            <p className="text-gray-600 text-xs italic">
                              Re-size can be disabled by set by resize-none / resize-y / resize-x / resize
                            </p>
                          </div>
                        </div>
                        <div className="md:flex md:items-center">
                          <div className="md:w-1/3">
                            <button className="shadow bg-teal-600 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                              Send
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                </div>
              </div>
            </div>
      )
}
export default AddArticles;