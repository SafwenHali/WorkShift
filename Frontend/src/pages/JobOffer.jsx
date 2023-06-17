import React,{useState} from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import useFetchJobOffer from "../hooks/useFetchJobOffer";
import useFetchUser from "../hooks/useFetchUser";

const JobOffer = () => {
    const {id} = useParams()
      const {data} =  useFetchJobOffer(id);
      const y =useState(data.Recruiter || "")
    if(y)
    {
      const z=useFetchUser(y);
      console.log(z)
    }
    return(
    <div className="min-h-screen bg-black ">
    <Nav PageName="FORMATION"/>
    <div>
        <div className=" pl-14 pt-36 mb-4 text-4xl font-semibold tracking-tight text-neutral-200">
            {data.jobName}
        </div>            
        </div>
        <section className="text-neutral-600 body-font ">
            <div className="container px-5 py-10 mx-auto flex flex-col ">
                <div className="lg:w-4/6 mx-auto p-20 bg-neutral-200 rounded-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                    {<img className="object-cover object-center h-full w-full" src={data.jobCover}/>}
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  
                        <h1 className="leading-relaxed text-xl font-bold mb-4 mx-4">
                            entreprise
                        </h1>
                        <p className="leading-relaxed text-lg mb-4 mx-4">
                            entreprise@gmail.com
                        </p>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-neutral-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">
                          {data.jobDescription}
                        </p>
                        </div>
                </div>
                </div>
            </div>
        </section>
    <Footer/>
    </div>
    )
    }

export default JobOffer;


                    
                    