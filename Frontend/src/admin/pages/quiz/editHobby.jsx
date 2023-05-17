import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import useFetch from "../../../hooks/useFetchHobby";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditHobby = () => {
  const { id } = useParams();
  const { data } = useFetch(id);
  console.log(data);

  const [post, setPost] = useState();
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(post);
    axios
      .put("http://127.0.0.1:7000/api/Hobbies/" + id, post)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    window.location.href = "/Admin/Quiz/Hobbies";
  };
  const handleButtonClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Hobby?"
    );
    if (confirmed) {
      axios
        .delete("http://127.0.0.1:7000/api/hobbies/" + id)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
      console.log("User confirmed action");
      window.location.href = "/Admin/Quiz/Hobbies";
    } else {
      // code to execute if user cancels
      console.log("User cancelled action");
    }
  };

    return(
        <div>
            <Sidebar/>
            <div className="pl-20">
                <div className="p-20 pl-64 min-h-screen h-full bg-teal-900">  
                <a href="/Admin/Quiz/Hobbies" className="bg-teal-700 hover:bg-teal-600 hover:border rounded text-xl text-neutral-100 font-light">
                        &nbsp;<ion-icon name="arrow-back-outline"></ion-icon>
                        &nbsp; Back To Hobbies &nbsp;
                    </a>
                    <div className="pb-8 text-6xl text-neutral-100 font-light">
                            Edit Hobby
                    </div>
                    <div className="flex justify-center">   
                      <form className="w-full max-w-lg bg-white p-4 rounded-xl" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Hobby Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            name="hobbyName"               
                            type="Title"
                            onChange={handleInput}
                            onLoad={handleInput}
                            defaultValue={data.hobbyName}/>
                            
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
                            name="hobbyImage" 
                            type="Link"
                            onChange={handleInput}
                            onLoad={handleInput}
                            defaultValue={data.hobbyImage}/>  
                          </div>
                        </div>                
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Description
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                            name="hobbyDesc"
                            onChange={handleInput}
                            onLoad={handleInput}
                            defaultValue={data.hobbyDesc}>
                            </textarea>
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
                            Delete Hobby
                        </button>
                    </div>
                </div>
              </div>
            </div>
      )
}
export default EditHobby;