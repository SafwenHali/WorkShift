import React from "react";
const Card =(props) =>{
    return(
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 mb-4">
            <article className="overflow-hidden rounded-lg shadow-lg bg-neutral-100">
                <img className="block" 
                    src={props.imageURL}></img>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black hover:text-teal-800 text-teal-800" href="#">
                            {props.title}
                        </a>
                    </h1>
                    <div>
                    <button className="px-1 py-0.5 bg-teal-700 text-neutral-200 font-semibold rounded-full text-sm">{props.category}</button>
                    </div>
                </header>
                <p className="ml-5 flex items-center text-neutral-600 py-4">{props.writer}</p>    

            </article>
            </div>
    )
}
export default Card