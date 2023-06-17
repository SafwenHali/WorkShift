import React,{useState} from "react";
import useFetch from "../../hooks/useFetchJobsByRate";
import Loading from "../../components/muiLoadingCircule"
import Nav from "../../components/Navbar"
import Footer from "../../components/Footer"

const Hobbies =() =>{
    const {data,loading} = useFetch();
    return(
        <div className="min-h-screen bg-black">
            <Nav PageName={"Jobs"}/>
            <h1 className="pl-14 pt-36 mb-4 text-4xl font-bold tracking-tight text-teal-600 ">
                Recruiters Demand
            </h1>
            <div className="text-teal-300">
                {loading && <Loading/>}
            </div>
            <div  className="flex flex-wrap">
            <section className="text-gray-600 md:w-1/2 p-14 body-font">
                {data.map( (m,index) => {
                    return(
                        <div className="container px-10 py-7 mx-auto flex items-center md:flex-row flex-col">
                        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                          <h2 className="text-xs text-teal-700 tracking-widest font-medium title-font mb-1">Number #{index+1}</h2>
                          <a href={"/Subcategory/"+m.formations}
                            className="md:text-3xl text-2xl font-medium title-font text-neutral-100 hover:underline">
                            {m.jobTitle}
                        </a>
                        </div>
                      </div> 
                        )
                    })} 
            </section>        
            <div className="p-10 pr-24 md:w-1/2 flex flex-col items-start">
            <img src="/icon/LOGO.svg" className="w-full "/>
            </div>
            </div>
            <Footer/>
        </div>
    )}
export default Hobbies



  
