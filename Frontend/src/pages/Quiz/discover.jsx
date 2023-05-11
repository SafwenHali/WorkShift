import React from "react";
import Nav from "../../components/Navbar"
import Footer from "../../components/Footer"

const Plans =() => {
    return(
    <div className="min-h-screen h-full bg-black">
        <Nav PageName={"Discover"}/>
        <div className="container p-20 mx-auto">
            <div className="text-center">
                <center className=" text-neutral-300 pt-5">
                <   img src="/icon/LOGO.svg" className="w-80"></img>
                </center>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-neutral-200 mb-4">
                    Do You Know What You Want ?
                </h1>
                <p className="text-neutral-200 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-neutral-400">
                   We propose many categories of which you might be interested if you already know what kind of course you would like to see let us take you to our categories. 
                </p>
                <div className="flex mt-6 justify-center">
                    <div className="w-32 h-1 rounded-full bg-teal-600 inline-flex"></div>
                </div>
            </div>
            <center className="flex flex-wrap py-20">
                <div className="w-1/2">
                    <a href="Categories"
                        className=" mx-auto mt-16 text-white bg-teal-600 border-0 py-2 px-8 focus:outline-none hover:bg-teal-800 rounded text-lg">
                        Yes
                    </a>
                </div>
                <div className="w-1/2">
                    <a href="Discover-2"
                        className=" mx-auto mt-16 text-white bg-teal-600 border-0 py-2 px-8 focus:outline-none hover:bg-teal-800 rounded text-lg">
                        No
                    </a>
                </div>
            </center>
        </div>
        <Footer/>
    </div>
    )
    }

export default Plans;