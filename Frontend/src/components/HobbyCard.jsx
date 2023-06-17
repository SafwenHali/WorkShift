import React from "react";
const Card =(props) =>{
    const id= props.id;
    return(
    <section className="bg-teal-900 opacity-90 body-font my-10 m-4 rounded-xl">
            <a href={`SubCategory/`+props.subCat} className="container mx-auto flex flex-wrap">
                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div className="w-full sm:p-4 px-4 mb-6 ml-6">
                    <h1 className="title-font font-medium text-xl mb-4 text-neutral-200 object-center md:pt-2 pt-10">
                        {props.title}
                    </h1>
                    <div className="leading-relaxed text-neutral-300">
                        {props.desc}
                    </div>
                </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full  mt-6 sm:mt-0">
                    <img className="object-cover object-center rounded-2xl w-full h-64 p-2" src={props.imageURL}/>
                </div>
            </a>
</section>
    )
}
export default Card