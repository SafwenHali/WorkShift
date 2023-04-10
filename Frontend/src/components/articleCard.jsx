import React from "react";
const Card =(props) =>{
    const id= props.id;
    return(
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 mb-4">
            <article className="overflow-hidden rounded-lg shadow-lg bg-neutral-300">
            <a href={`Articles/`+id}>
                <img className="block" 
                    src={props.imageURL}></img></a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a href={`Articles/`+id}
                        className="no-underline hover:underline hover:text-teal-800 font-bold text-neutral-900 duration-300">
                            {props.title}
                        </a>
                    </h1>
                    
                    {/*<div><button class="bg-teal-600 hover:bg-teal-800 text-neutral-200 py-1 px-3 rounded-full duration-500"
                        onClick={<Article ID={props.id}/>}>
                        
                    </button>
                    </div>*/}
                </header>
                <p className="ml-5 flex items-center text-teal-800 font-light pb-4">By {props.writer}</p>    

            </article>
            </div>
    )
}
export default Card