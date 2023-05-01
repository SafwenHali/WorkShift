import React from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";
import Loading from "../components/muiLoadingCircule"
import useFetchSubCategory from "../hooks/useFetchSubCategory"
import useFetchFormations from "../hooks/useFetchFormations";
import { useParams } from "react-router-dom";

const SubCategory =() => {
    const {id} = useParams()
    
    const subCat = useFetchSubCategory(id);
    const {data,loading} = useFetchFormations(id);
    return(
    <div className="min-h-screen bg-black ">
    <Nav PageName={subCat.data.name}/>
    <section className=" body-font overflow-hidden">
  {/** HNEE EL QUIZZ request */}
        <div className="container px-5 py-24 mx-auto">         
            <ul className="grid grid-cols-1 md:lg:xl:grid-cols-2 group lg:pl-20 pt-4" > 
            <li key="1" className="md:lg:xl:ml-20 mt-4">
            <h1 className="text-4xl font-bold tracking-tight text-teal-600 ">
                {subCat.data.name} 
            </h1>
            <div className="text-teal-300">
                {loading && <Loading/>}
            </div>
            <ul className="grid grid-cols-1 m-4"> 
                    {data.map((n)=>(
                        
                        /////
                        <div className="p-1">
                           <li key={n._id} className="m-1">
                                <div className="h-full bg-neutral-300 px-4 pt-14 pb-16 rounded-lg overflow-hidden text-center relative">
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                        {n.nom}
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        {n.description}
                                    </p>
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        {n.duree} Heures
                                    </h2>
                                    <a className="text-teal-700 font-semibold hover:underline inline-flex items-center"
                                        href={"../Formation/"+n._id}>
                                        Learn More 
                                    </a>
                                </div>
                            </li> 
                        </div>
                    
                    ))}
                </ul>
            </li>
            <li key="2" className="m-1 mt-14 md:lg:xl:mx-20">
                <div className="flex flex-wrap shadow-xl bg-neutral-900 rounded-xl">
                    <div className="p-2 m-4 font-light text-neutral-300">
                        {subCat.data.description} 
                    </div>
                </div>               
            </li>
            </ul>                
        </div>
    </section>
    <Footer/>
    </div>
    )
    }

export default SubCategory;


                    
                    