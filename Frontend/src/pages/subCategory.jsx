import React from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";
import useFetchCategories from "../hooks/useFetchCategories";
import { useParams } from "react-router-dom";

const SubCategory =() => {
    const {id} = useParams()
    const cat = useFetchCategories().data;
    return(
    <div className="min-h-screen bg-black">
    <Nav PageName={id}/>
    <section className=" body-font overflow-hidden">
  {/** HNEE EL QUIZZ request */}
        <div className="container px-5 py-24 mx-auto">
            <div className="pl-10 text-neutral-200">
                Categories
            </div>
            <div className="flex flex-wrap m-4 border border-neutral-300 rounded-xl">
                <div className=" p-4 grid gap-x-8 gap-y-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
                    {cat.map((n)=>(
                        <a key={n._id} href={"/category/"+n._id} className="bg-teal-800 p-2 border-2 border-teal-800 font-light text-neutral-200 hover:bg-neutral-200 hover:text-teal-800 rounded flex justify-center">
                            {n.name}   
                        </a>
                    ))}
                </div>
            </div>
            <div className="pl-10 text-neutral-200">
                Categories
            </div> 
        </div>
    </section>
    <Footer/>
    </div>
    )
    }

export default SubCategory;


                    
                    