import React from "react";
import Nav from "../components/Navbar"

const Test =() => {
    return(
        <div>
            <Nav/>
        <center className="h-screen bg-gradient-to-b from-white via-blue-700 to-red-700">
            <h1 className="pt-36 mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                With LOVE from RUSSIA
            </h1>
            <img className="h-96 pt-24" 
                    src="https://imgs.search.brave.com/sxr8orLz-JxBvc-9hQsvgv6KedBjS6kWjwtR6YAcEuQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5yZWFsaXRhdGVh/Lm5ldC9tdWx0aW1l/ZGlhL2ltYWdlLzIw/MTkxMS9mdWxsL3Zs/YWRpbWlyX3B1dGlu/XzgwMDBfNjM5Njg1/MDAuanBn"> 
            </img>
                    
            
        </center>
        </div>
        

        
    )

}
export default Test;