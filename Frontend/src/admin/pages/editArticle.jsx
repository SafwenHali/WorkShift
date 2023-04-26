import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import useFetch from "../../hooks/useFetchArticle";
import { useParams } from "react-router-dom";
import axios from "axios";


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
    axios.put('http://127.0.0.1:7000/api/article/'+id,post)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    window.location.href ="/Admin/Articles"
  }
  const handleButtonClick = () => {
    const confirmed = window.confirm('Are you sure you want to delete this article?');
    if (confirmed) {
        axios.delete('http://127.0.0.1:7000/api/article/'+id)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
      console.log('User confirmed action');
      window.location.href ="/Admin/Articles"
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
                    <a href="/Admin/Articles" className="bg-teal-700 hover:bg-teal-600 hover:border rounded text-xl text-neutral-100 font-light">
                        &nbsp;<ion-icon name="arrow-back-outline"></ion-icon>
                        &nbsp; Back To Articles List &nbsp;
                    </a> 
                    <div className="pb-8 text-6xl text-neutral-100 font-light">
                            Edit Article
                    </div>
                    <div className="flex justify-center">   
                      <form className="w-full max-w-lg bg-neutral-100 p-4 rounded-xl" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-neutral-700 text-xs font-bold mb-2">
                              Ariticle Title
                            </label>
                            <input className="appearance-none block w-full bg-neutral-200 text-neutral-700 border border-neutral-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-neutral-100 focus:border-neutral-500" 
                            name="articleName"               
                            type="Title"
                            defaultValue={data.articleName}
                            onChange={handleInput}
                            onLoad={handleInput}/>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-neutral-700 text-xs font-bold mb-2">
                              image url 
                            </label>
                            <p className="text-neutral-600 text-xs italic pb-1">
                                -Choosing images from &nbsp;
                                <a className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.istockphoto.com/stock-photos">
                                  istockphoto.com
                                </a> 
                                &nbsp; recommended  
                            </p>
                            <input className="appearance-none block w-full bg-neutral-200 text-neutral-700 border border-neutral-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-neutral-100 focus:border-neutral-500" 
                            name="articleCover" 
                            type="Link"
                            defaultValue={data.articleCover}
                            onChange={handleInput}
                            onLoad={handleInput}/>  
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-neutral-700 text-xs font-bold mb-2">
                              Writer's name
                            </label>
                            <input className="appearance-none block w-full bg-neutral-200 text-neutral-700 border border-neutral-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-neutral-100 focus:border-neutral-500" 
                             name="articleWriter"
                            type="Name"
                            defaultValue={data.articleWriter}
                            onChange={handleInput}
                            onLoad={handleInput}/>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-neutral-700 text-xs font-bold mb-2">
                              Article
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-neutral-200 text-neutral-700 border border-neutral-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-neutral-100 focus:border-neutral-500 h-48 resize-none"
                            name="articleText"
                            defaultValue={data.articleText}
                            onChange={handleInput}
                            onLoad={handleInput}></textarea>
                            <p className="text-neutral-600 text-xs italic">
                              Any empty field wouls keep original data.
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
                    <div>
                        <button 
                        onClick={handleButtonClick}
                        className="shadow bg-red-600 hover:bg-neutral-200 text-neutral-100 hover:text-red-600 border border-red-600 font-bold py-2 px-4 rounded" type="submit">
                            Delete Article
                        </button>
                    </div>
                </div>
              </div>
            </div>
      )
}
export default AddArticles;