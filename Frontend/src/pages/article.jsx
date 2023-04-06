import React from "react";
import Nav from "../components/Navbar"

import { useReducer, useEffect } from "react";
import reducer from "../hooks/fetchHookReducer"
import axios from "axios";

const Article =() => {
    let ID= "6421bd99a1a6f8095defef92";
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
            {<h1 className=" pl-14 pt-24 mb-4 text-4xl font-semibold tracking-tight text-teal-600">{data.articleName}</h1>}
            <div class="flex">
                {<img className="m-auto w-fit pt-14" src={data.articleCover}/>}
                </div> 
                <div class="flex "> 
                    <div className="m-auto p-14">     
                {<div className="p-14 text-2xl rounded-lg bg-neutral-100 text-teal-900 font-light">{data.articleText}
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