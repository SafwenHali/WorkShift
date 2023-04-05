import React from "react";
import Nav from "../components/Navbar"

const Test =() => {
    return(
        <div className="max-h bg-gradient-to-b from-red-600 to-blue-900">
            <Nav/>
        <center>
            <h1 className="py-24 mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                With LOVE from RUSSIA
            </h1>
            <p className=" pb-12 text-white">PFE MABROUK</p>
            <img className="h-96 w-auto" 
                    src="https://imgs.search.brave.com/sxr8orLz-JxBvc-9hQsvgv6KedBjS6kWjwtR6YAcEuQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5yZWFsaXRhdGVh/Lm5ldC9tdWx0aW1l/ZGlhL2ltYWdlLzIw/MTkxMS9mdWxsL3Zs/YWRpbWlyX3B1dGlu/XzgwMDBfNjM5Njg1/MDAuanBn"> 
                    </img>
            <p className=" pt-12 text-white">Putin says Hi</p>
            <p className="text-white">aw 3maltelna logo</p>
            <img className="h-96 w-96" 
                    src="../../icon/3.svg"></img>
                    <img className="h-96 w-96" 
                    src="../../icon/1.svg"></img>
            
        </center>
        </div>
        

        
    )

}
export default Test;