import React from "react";
import Card from'../components/articleCard';
import useFetch from "../hooks/useFetchArticles";
import Loading from "../components/muiLoadingCircule"

const article =() =>{
    const {data,loading} = useFetch();
    console.log('console log test')
    return(
        <div className="min-h-screen bg-black px-4">
            <h1 className="pl-8 pt-8 mb-4 text-4xl font-bold tracking-tight text-gray-200 ">
                Workshift articles  
            </h1>
            <div className="text-white">
                {loading && <Loading/>}
            </div>
            <div className="flex flex-wrap lg:px-24">
                {data.map( m => {
                    return(
                        <Card 
                            key={m._id}
                            title={m.articleName}
                            writer={m.articleWriter}
                            category="category"
                            imageURL={m.articleCover}
                        />
                        )
                    })} 
            </div>
        </div>
    )}
export default article
