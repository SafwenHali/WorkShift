import React,{useState} from "react";
import Nav from "../../components/Navbar"
import Footer from "../../components/Footer"

const unknown =() =>{
    
    return(
        <div className="min-h-screen bg-black">
            <Nav PageName={"Personalities"}/>
            <center className=" text-neutral-300 pt-20">
            <img src="/icon/LOGO.svg" className="w-72"></img>
            <div className="text-4xl font-bold text-neutral-100">
                Find Your personality type
            </div>
            <div className="flex "> 
                <div className="m-auto py-4 pt-10">     
                <a href="https://www.16personalities.com/free-personality-test" target="_blank"> 
              <button className=" w-56 h-14 rounded-lg border border-teal-900 text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-neutral-900 font-semibold duration-300">
                Take the 16 personalit test
              </button></a> 
                </div> 
            </div> 
            <div className="py-3 text-xl font-semibold text-neutral-100">
                If you already have your MBTI Personality
            </div>
            <div className="flex "> 
                <div className="m-auto py-1">     
                <a href="/Personalities"> 
              <button className=" w-48 h-10 rounded-lg border border-teal-900 text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-neutral-900 font-semibold duration-300">
                Go to personalities
              </button></a> 
                </div> 
            </div>
            <div className="py-3 text-xl font-semibold text-neutral-100">
                Or
            </div>
            <div className="flex "> 
                <div className="m-auto py-1 pb-10">     
                <a href="/Home"> 
              <button className=" w-48 h-10 rounded-lg border border-teal-900 text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-neutral-900 font-semibold duration-300">
                Go to Home page
              </button></a> 
                </div> 
            </div>                     
        </center>
            <Footer/>
        </div>
    )}
export default unknown
