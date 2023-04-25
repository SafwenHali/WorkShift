import React from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetchCategories";

const Categories =() => {
    const {data} = useFetch();
    return(
    <div className="min-h-screen bg-black">
    <Nav PageName={"ALL CATEGORIES"}/>
    <section class="text-gray-600 body-font overflow-hidden">
  {/** HNEE EL QUIZZ request */}
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <div class="flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <h1 className=" pt-20 mb-4 text-4xl font-bold tracking-tight text-teal-600 ">
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
      <div class="p-12 md:w-1/2 flex flex-col items-start">
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