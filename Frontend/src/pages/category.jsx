import { useParams } from "react-router-dom";
import React from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";

import { useReducer, useEffect } from "react";
import reducer from "../hooks/fetchHookReducer"
import axios from "axios";

const Category =() => {
    const{id}= useParams();
    function useFetchCategory() {
        const [state,dispatch]= useReducer(reducer,{data:[]});
        useEffect(()=>{
            dispatch({type:"api_request"});
            axios
            //url+"apiurl !!!! API MAZEL MOUCH MAWJOUD!!!!"
            .get("http://127.0.0.1:7000/api/subcategory")
            .then((res)=>{
                //res.data.(esm el entity)
                dispatch({type:"fetch_data", payload:res.data.subcategories});
            }).catch(err =>{
                console.log(err)
            })
        },[])
    return state;}

    const {data} = useFetchCategory();

    return(
        <div className="min-h-screen bg-black">
            <Nav PageName={`ARTICLES`}/>
            <div className=" pl-14">
            <h1 className=" pt-36 mb-4 text-4xl font-bold tracking-tight text-teal-600 ">
                        Category : {id} 
                    </h1>
            {data.map( m =>  
            {if (m.Category === id){
                return(
                <div className="p-14 text-white">
                    <span className="text-4xl font-bold">
                        {m.name}
                    </span>
                    <span >
                        {m.description}
                    </span>
                </div>
                )
            }
        }
            )}</div>
           {/* <Footer/> */} 
            </div>
            
       
                    
    )
}
export default Category
    