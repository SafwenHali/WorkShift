import React from "react";

import Card from'../components/articleCard';
const article =() =>{
    return(
        <div className="min-h-screen bg-black">
            <div className="flex flex-wrap py-2">
                <Card 
                    title="Article Title" 
                    writer="Writer's name" 
                    category="category"
                    imageURL="https://imgs.search.brave.com/k57uCmgdpwYIITervojIidxR2OMKge4g9xOi6Bix7og/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDQv/cHV0aW4ta2ltLXN1/bW1pdC5qcGc"
                />
            
            </div>
    </div>
    )
}
export default article

