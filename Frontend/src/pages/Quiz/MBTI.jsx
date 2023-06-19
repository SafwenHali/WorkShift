import React,{useState} from "react";
import useFetch from "../../hooks/useFetchPersonalityByCode";
import useFetchJobs from "../../hooks/useFetchPersonalityJobs";
import useFetchJob from "../../hooks/useFetchJob";
import Nav from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useParams } from "react-router-dom";

const Personalities =() =>{
    const {personalityCode} = useParams()
    let {data,loading} = useFetch(personalityCode);
    const dat= data
    data = useFetchJobs(personalityCode).data;
    console.log(data)
    return(
        <div className="min-h-screen bg-black">
            <Nav PageName={dat.personalityCode}/>
            <section class="text-neutral-400 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 my-10 object-cover object-center rounded" alt="hero" src={dat.personalityImage}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-6xl text-3xl mb-4 font-medium text-neutral-200">{dat.personalityName}</h1>
      <p class="mb-8 leading-relaxed">{dat.personalityDesc}</p>
      <div className=" px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
                <ul className="grid grid-cols-1 md:lg:xl:grid-cols-3 group lg:p-1"> 
                {data.map( m => {
                  return(
                <div>
                 <div className="p-1">
                           <li key={m._id}>
                                <a href={"/Job/"+m.job_id} className="p-10 flex flex-col items-center text-center text-teal-900 hover:text-neutral-900 group bg-neutral-300 hover:bg-teal-600 hover:shadow-xl shadow-teal-900 cursor-pointer">
                                <p className="text-2xl font-bold  mt-3 ">
                                    {m.jobName}
                                </p>  
                                </a>
                            </li> 
                        </div>
                </div>
                )})}
                </ul>
            </div>
    </div>
  </div>
</section>
            <Footer/>
        </div>
    )}
export default Personalities
