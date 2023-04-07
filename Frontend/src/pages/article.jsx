import React from "react";
import Nav from "../components/Navbar"

import { useReducer, useEffect } from "react";
import reducer from "../hooks/fetchHookReducer"
import axios from "axios";

const Article =() => {
    let ID= "642f6b1038c5d71272c2040c";
    function useFetchArticles() {
        const [state,dispatch]= useReducer(reducer,{data:[]});
        useEffect(()=>{
            dispatch({type:"api_request"});
            axios
            //url+"apiurl"
            .get("http://127.0.0.1:7000/api/article/"+ID)
            .then((res)=>{
                //res.data.(esm el entity)
                dispatch({type:"fetch_data", payload:res.data.articles});
            }).catch(err =>{
                console.log(err)
            })
        },[])
    return state;}
    const {data} = useFetchArticles();
    console.log(data.articleName)
    return(
    <div className="min-h-screen bg-black">
        <Nav PageName={`Articles, ${data.articleName}`}/>
        <div>
            {<h1 className=" pl-14 pt-24 mb-4 text-4xl font-semibold tracking-tight text-neutral-300">
                {data.articleName}
                {<h1 className="mb-4 text-xl font-light tracking-tight text-neutral-300">
                    by {data.articleWriter}
                </h1>}
            </h1>}
            
            <div class="flex">
                {<img className="m-auto pt-14" src={data.articleCover}/>}
                </div> 
                <div class="flex "> 
                    <div className="m-auto p-14">     
                {<div className="p-14 text-2xl rounded-lg bg-neutral-300 text-neutral-800 font-light">{data.articleText}
                    <div className="pt-5 mr-4 flex justify-end text-teal-700 text-xl">
                        Written by {data.articleWriter} , {data.createdAt}
                    </div>
                </div>}
                </div> 
            </div>    
        </div>   
    </div>
    )
}
export default Article;