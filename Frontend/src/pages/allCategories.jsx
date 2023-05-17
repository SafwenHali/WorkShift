import React from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetchCategories";

const Categories =() => {
    const {data} = useFetch();
    return(
    <div className="min-h-screen bg-black">
    <Nav PageName={"ALL CATEGORIES"}/>
    <section className="text-gray-600 body-font overflow-hidden">
        <h1 className=" pt-32 px-12 mb-4 text-4xl font-bold tracking-tight text-teal-600 ">
             Discover 
        </h1>                
        {/** HNEE EL QUIZZ request */}
        <div className=" pt-10 px-10">
            <div className=" rounded border shadow">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 className="flex-grow sm:pr-16 text-4xl font-medium title-font text-neutral-200">
                            Take the discover quiz to get what you're looking for.
                            <p className="text-lg font-medium title-font text-neutral-300">
                               <br/> With our quiz have a better chnace to find what exactly fits your profile. <br/>
                            </p>
                        </h1>
                        <br/>
                        <a href="./Discover" className="text-center bg-teal-800 p-2 border-2 border-teal-800 text-xl font-semibold text-neutral-200 hover:bg-neutral-200 hover:border-neutral-800 hover:text-neutral-800 rounded flex justify-center">
                            Take The Quiz
                        </a>
                    </div>
                </div>
            </div> 
        </div>
        <div className="container px-5 py-24 mx-auto">
            <div  className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
                <div  className="flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <h1 className=" mb-4 text-4xl font-bold tracking-tight text-teal-600 ">
                                Categories 
                            </h1>
                        </div>
                        <ul className="md:flex-grow pt-24 lg:pl-0 pl-14">  
                        {data.map((n)=>(
                            <li key={n._id}>
                                <a href={'/Category/'+n._id} >
                                    <div className="pb-10 underline text-2xl font-light text-neutral-200 title-font mb-2 hover:text-teal-600">
                                        {n.name}
                                    </div> 
                                </a>
                            </li>
                        ))}
                        </ul>
                    </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
            <img src="/icon/LOGO.svg" className="w-full "/>
            </div>
            </div>
        </div>
    </section>
    <Footer/>
    </div>
    )
    }

export default Categories;