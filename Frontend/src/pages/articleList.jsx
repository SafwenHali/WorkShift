import React,{useState} from "react";
import Card from'../components/articleCard';
import useFetch from "../service/hooks/fetchHook";

const article =() =>{
   const BASE_URL="http://127.0.0.1:7000/api/article";
    const {data,loading,error} = useFetch(BASE_URL);
    const da = JSON.stringify(data,undefined,2);
        const [dat, setData] = useState(JSON.parse(da));
        console.log("safwen")
    return(
        <div className="min-h-screen bg-black">
            <h1 className="pl-8 pt-8 mb-4 text-4xl font-bold tracking-tight text-gray-200 md:text-4xl lg:text-4xl">
                Workshift articles
            </h1>
            <div className="px-4 text-white">
            {loading && <div> loading ...</div>}
            {error && <div> error</div>}
            <pre>{da}</pre>
            {dat.map((saf) => {
              return (<p className="text-white">{saf._id}</p>)})}</div>
            <div className="flex flex-wrap py-4 px-2">
                <Card 
                    title="Article Title" 
                    writer="Writer's name" 
                    category="category"
                    imageURL="https://imgs.search.brave.com/k57uCmgdpwYIITervojIidxR2OMKge4g9xOi6Bix7og/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDQv/cHV0aW4ta2ltLXN1/bW1pdC5qcGc"
                />
                
            
            </div>
        </div>
    )}
export default article
