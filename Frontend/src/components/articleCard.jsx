import React from "react";
const Card =() =>{
    return(
            <article class="overflow-hidden rounded-lg shadow-lg bg-white">
                <img class="block h-40 w-full" 
                    src="image URL"></img>
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black hover:text-purple-700" href="#">
                            article name
                        </a>
                    </h1>
                </header>
                <p class="ml-5 flex items-center text-gray-700 py-4">writer name</p>    

            </article>
    )
}
export default Card