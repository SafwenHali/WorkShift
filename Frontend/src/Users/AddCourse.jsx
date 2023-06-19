import React, { useState } from "react";
import Sidebar from "../components/FormateurSidebar";
import useFetchCat from "../hooks/useFetchCategories";
import useFetchSubCat from "../hooks/useFetchAllSubCategories";
import axios from "axios";
import jwt_decode from "jwt-decode";

const formateurAddCourse =() => {
  const token = localStorage.getItem("at")
  const id = jwt_decode(token).id || "";
  const [post, setPost] =useState({formationInstructor:id })
  const handleInput = (event) =>{
    setPost({...post,[event.target.name]: event.target.value})
  }

  const handleSubmit = (event) =>{event.preventDefault();
    try {
      const token = localStorage.getItem("at");
      const id = jwt_decode(token).id;
    setPost({...post,formationInstructor:id });
    axios.post('http://127.0.0.1:7000/api/formation',post)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))}
    catch{alert("err")}
    window.location.href ="/formateur"
  }
    const cat = useFetchCat().data;
    const subCat=useFetchSubCat().data

    
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
       
        const handleSubCategoryChange = (event) => {
            setSelectedSubCategoryValue(event.target.value);
            setPost({...post,[event.target.name]: event.target.value})
        };
         try {
          const token = localStorage.getItem("at");
          const role = jwt_decode(token).role;
          const id = jwt_decode(token).id;
          console.log(id);
          if (role != "instructor") {
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
                <a href="/Formateur" className="bg-teal-700 hover:bg-teal-600 hover:border rounded text-xl text-neutral-100 font-light">
                        &nbsp;<ion-icon name="arrow-back-outline"></ion-icon>
                        &nbsp; Back To Courses &nbsp;
                    </a>
                    <div className="pb-8 text-6xl text-teal-600 font-light">
                            Add A New Course
                    </div>
                    <div className="flex justify-center">   
                      <form className="w-full max-w-lg bg-white p-4 rounded-xl" onSubmit={handleSubmit}>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Select a Category
                    </label>
                    <select 
                      value={selectedCategoryValue} 
                      onChange={handleCategoryChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option defaultValue>Select Category</option>
                    {cat.map( c => (
                                    <option key={c._id} value={c._id}>{c.name}</option>
                                 ))}
                    </select>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Select a SubCategory
                    </label>
                    <select 
                    name="SubCategory"
                      value={selectedSubCategoryValue} 
                      onChange={handleSubCategoryChange} 
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option defaultValue>Select SubCategory</option>
                    {subCategoryList.map( sc => (
                                    <option key={sc._id} value={sc._id}>{sc.name}</option>
                                 ))}
                    </select>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Course Title
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            name="formationName"               
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
                            name="Cover" 
                            type="Link"
                            onChange={handleInput}/>  
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Durée
                            </label>
                            <p className="text-gray-600 text-xs italic pb-1">
                                Course length in Hours 
                            </p>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                             name="formationDuration"
                            type="Number"
                            onChange={handleInput}/>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Price
                            </label>
                            <p className="text-gray-600 text-xs italic pb-1">
                                Course Price in Tunisian Dinars
                            </p>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                             name="formationPrice"
                            type="Number"
                            onChange={handleInput}/>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Description
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                            name="formationDescription"
                            onChange={handleInput}>
                            </textarea>
                          </div>
                        </div>
                        <div className="md:flex md:items-center">
                          <div className="md:w-1/3">
                            <button className="shadow bg-teal-600 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                            type="submit">
                              ADD
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
export default formateurAddCourse;