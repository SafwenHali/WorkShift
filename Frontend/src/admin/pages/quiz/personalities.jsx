import React,{useState} from "react";
import useFetch from "../../../hooks/useFetchAllPersonalities";
import Sidebar from "../../components/Sidebar";
import jwt_decode from "jwt-decode";

const Personalities =() =>{ 
    const {data,loading} = useFetch();
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
        <Sidebar />
        <div className="pl-0 lg:pl-20">
          <div className="h-full min-h-screen bg-teal-900 pl-48">
            <h1 className="p-14 mb-4 text-4xl font-bold tracking-tight text-neutral-200 shadow-lg ">
              MANAGE THE PERSONALITIES:
            </h1>
            <div className=" py-20 bg-opacity-10">
    <div className="flex flex-wrap m-4">
   {data.map( m => {return( 
      <a className="xl:w-1/4 md:w-1/2 w-full p-4" href={"/MBTI/"+m.personalityCode}>
        <div className="flex relative h-80">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={m.personalityImage}/>
          <div className="px-8 py-24 relative z-10 w-full border-2 border-neutral-300 bg-neutral-200 opacity-0 hover:opacity-100 transition-all duration-200">
            <h2 className="tracking-widest text-sm title-font font-medium text-teal-800 mb-1">{m.personalityCode}</h2>
            <h1 className="title-font text-lg font-medium text-neutral-900 mb-3">{m.personalityName}</h1>
          </div>
          </div>
        </a>
      )})}
    </div></div></div></div></div>
)}

export default Personalities