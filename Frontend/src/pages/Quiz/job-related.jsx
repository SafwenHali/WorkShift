import React,{useState} from "react";
import Nav from "../../components/Navbar"
import Footer from "../../components/Footer"

const relatedField =() => {
    
    return(
    <div className="min-h-screen h-full bg-black">
        <Nav PageName={"Discover"}/>
        <div className="container py-20 mx-auto">
            <div className="text-center"> 
                <div className="lg:h-96 h-52 overflow-hidden m-2">
                    <img className="opacity-95 object-cover h-full w-full rounded-lg" src={questionSelected.questionImg}/>
                </div>
                <h1 className="lg:text-4xl text-4xl font-medium title-font text-neutral-200 m-4">
                    
                </h1>
                {/*description*/}
                <p className="text-neutral-200 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-neutral-400">
                    aa 
                </p>
                <div className="flex mt-6 justify-center">
                    <div className="w-32 h-1 rounded-full bg-teal-600 inline-flex"></div>
                </div>
                
            </div>
            {/*answers*/}
            <center className="flex flex-wrap p-4 "> 
                                                     
            </center>
            <center className="flex flex-wrap pt-10 ">
                <p className="text-neutral-200 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-neutral-400">
                    This quiz is made to guide you through our courses and other pages to help you find what you're looking for in the minimum required time
                </p>
            </center>   
        </div>
        <Footer/>
    </div>
    )
    }

export default relatedField;