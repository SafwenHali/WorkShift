import useFetchCategories from "../hooks/useFetchCategories";
const cat = useFetchCategories().data;

const CategoryComp =() => {
    return(<div className="container px-5 py-24 mx-auto">
<div className="pl-10 text-neutral-300 font-semibold">
                Categories
            </div>
            <div className="flex flex-wrap m-1 border border-neutral-300 rounded-xl">
                <div className=" p-4 grid gap-x-8 gap-y-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
                    {cat.map((n)=>(
                        <a key={n._id} href={"/category/"+n._id} className="bg-teal-800 p-2 border-2 border-teal-800 font-light text-neutral-200 hover:bg-neutral-200 hover:text-teal-800 rounded flex justify-center">
                            {n.name}   
                        </a>
                    ))}
                </div>
            </div>
           </div> )}
            export default CategoryComp;