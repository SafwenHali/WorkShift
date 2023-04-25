import React from "react";
import Card from'../components/articleCard';
import useFetch from "../hooks/useFetchArticles";
import Loading from "../components/muiLoadingCircule"
import Nav from "../components/Navbar"
import Footer from "../components/Footer";

const article =() =>{
    const {data,loading} = useFetch();
    return(
        <div className="min-h-screen bg-black">
            <Nav PageName={"ARTICLES"}/>
            <h1 className="pl-14 pt-36 mb-4 text-4xl font-bold tracking-tight text-teal-600 ">
                Articles 
            </h1>
            <div className="text-teal-300">
                {loading && <Loading/>}
            </div>
            <div className="flex flex-wrap lg:px-24">
                {data.map( m => {
                    return(
                        <Card 
                            id={m._id}
                            key={m._id}
                            title={m.articleName}
                            writer={m.articleWriter}
                            category="Category"
                            imageURL={m.articleCover}
                        />
                        )
                    })} 
            </div>
            <Footer/>
        </div>
    )}
export default article
