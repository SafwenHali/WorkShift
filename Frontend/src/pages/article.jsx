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
        <Nav PageName={"Articles, "+data.articleName}/>
        <div> 
            {<h1 className=" pt-36 px-14 text-4xl text-neutral-100 font-semibold">{data.articleName}</h1>}
            <center className="px-21 py-21">
                    {<img className="w-300 py-20" src={data.articleCover}/>}</center>
                    {<p className=" py-24 pl-14 text-3xl bg-neutral-300 text-neutral-900 font-light">{data.articleText}</p>}
                    {<h1 className=" pb-36 pt-14 pl-96 text-4xl text-neutral-100">{data.articleWriter} {data.createdAt}</h1>}
            
        </div>
           
        
    </div>
    )
    }

export default Article;