import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";

import { useReducer, useEffect } from "react";
import reducer from "../hooks/fetchHookReducer"
import axios from "axios";

const Article =() => {
    const{id}= useParams();
    console.log('id is = '+id)
    let ID= "642f6b1038c5d71272c2040c";
    function useFetchArticles() {
        const [state,dispatch]= useReducer(reducer,{data:[]});
        useEffect(()=>{
            dispatch({type:"api_request"});
            axios
            //url+"apiurl"
            .get("http://127.0.0.1:7000/api/article/"+id)
            .then((res)=>{
                //res.data.(esm el entity)
                dispatch({type:"fetch_data", payload:res.data.articles});
            }).catch(err =>{
                console.log(err)
            })
        },[])
    return state;}
    const {data} = useFetchArticles();
    const date= data.createdAt;
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        year: "numeric",
        day: "2-digit",
        month: "long"
        });
        

    return(
    <div className="min-h-screen bg-black">
       <Nav PageName={`ARTICLES`}/>
        <div>
            {<div className=" pl-14 pt-36 mb-4 text-4xl font-semibold tracking-tight text-neutral-300">
                {data.articleName}
                {<div className="mb-4 text-xl font-light tracking-tight text-neutral-300">
                    by {data.articleWriter}
                </div>}
            </div>}
            
            <div className="flex">
                {<img className="m-auto pt-7" src={data.articleCover}/>}
                </div> 
                <div className="flex "> 
                    <div className="m-auto p-14">     
                {<div className="p-14 text-2xl rounded-lg bg-neutral-300 text-neutral-800 font-light">{data.articleText}
                    <div className="pt-5 mr-4 flex justify-end text-teal-700 text-xl">
                        Written by {data.articleWriter} , {formattedDate}
                    </div>
                </div>}
                </div> 
            </div>    
        </div>
        <Footer/>   
    </div>
    )
}
export default Article;