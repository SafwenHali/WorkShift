import { useParams } from "react-router-dom";
import React from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetchSubCategories";
import useFetchCategory from "../hooks/useFetchCategoryName";


const Category =() => {
    const{id}= useParams();
    const dat=useFetchCategory(id);
    const {data} = useFetch(id);
    const category= {
        "_id": "6430b378068e41d7398a442e",
        "name": "Art & Entertainment",
        "__v": 0
    }

    return(
        <div className="min-h-screen bg-black">
            <Nav PageName={`ARTICLES`}/>
            <h1 className="pl-14 pt-36 mb-4 text-4xl font-bold tracking-tight text-teal-600 ">
                {dat.data.name} 
            </h1>
            <div className=" px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
                <ul className="grid grid-cols-1 md:lg:xl:grid-cols-3 group lg:p-1"> 
                    {data.map((n)=>(
                        <div className="p-1">
                           <li key={n._id} className="p-10 flex flex-col items-center text-center group bg-neutral-300 hover:bg-teal-600 hover:shadow-xl shadow-teal-900 cursor-pointer">
                        <p className="text-2xl font-bold text-neutral-800 mt-3 ">{n.name}</p>
                        <p className="mt-2 text-sm text-neutral-700">{n.description}</p>
                        </li> 
                        </div>
                    
                    ))}
                </ul>
            </div>
            <Footer/>  
        </div>
            
       
                    
    )
}
export default Category


    