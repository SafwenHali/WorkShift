import React from "react";
import quotes from "../quotes.json"

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomElement = quotes[randomIndex];

const NotFound =() => {
    return(
        <div className="border-2 border-neutral-900 min-h-screen h-full bg-neutral-900">
            
        <center className=" text-neutral-300 pt-5">
            <img src="/icon/LOGO.svg" className="w-80"></img>
            <div className="text-4xl font-bold text-neutral-100">
                Oops, page not found !
            </div>
            <div className="pt-3 text-2xl font-semibold text-neutral-100">
                Maybe it doesn't exist.
            </div>
            <div className="text-2xl font-semibold pt-5">
                But did you know:
            </div>
            <div className="flex "> 
                <div className="m-auto py-5">     
                    <div className="p-3 w-96 rounded-lg bg-neutral-700 text-neutral-100 font-light">
                        <div className="">
                            {randomElement.fact}
                        </div>                                                                            
                    </div>
                </div>
            </div>
            <div className="text-xl font-semibold text-neutral-200">
                Go back to the homepage to learn more about {randomElement.category}.
            </div>
            <div className="flex "> 
                <div className="m-auto py-5 pb-28">     
                <a href="/Home"> 
              <button className=" w-48 h-10 rounded-lg border border-teal-900 text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-neutral-900 font-semibold duration-300">
                Go back to website
              </button></a> 
                </div> 
            </div>                      
        </center>
        
        </div>
        

        
    )

}
export default NotFound;