import React from "react";
const Card =(props) =>{
    return(
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img className="block h-80 w-full" 
                    src={props.imageURL}></img>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black hover:text-purple-700" href="#">
                            {props.title}
                        </a>
                    </h1>
                    <div>
                    <button className="px-1 py-0.5 bg-orange-500 text-white font-semibold rounded-full text-sm">{props.category}</button>
                    </div>
                </header>
                <p className="ml-5 flex items-center text-gray-700 py-4">{props.writer}</p>    

            </article>
            </div>
    )
}
export default Card