import React from "react";
const Card =(props) =>{
    return(
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 mb-4">
            <article className="overflow-hidden rounded-lg shadow-lg bg-neutral-200">
                <img className="block" 
                    src={props.imageURL}></img>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline hover:text-teal-800 text-neutral-900 duration-300" href="#">
                            {props.title}
                        </a>
                    </h1>
                    <div>
                    <button class="bg-teal-600 hover:bg-teal-800 text-neutral-200 py-1 px-3 rounded-full duration-500">
                        {props.category}
                    </button>
                    </div>
                </header>
                <p className="ml-5 flex items-center text-neutral-600 py-4">{props.writer}</p>    

            </article>
            </div>
    )
}
export default Card