import React,{useState,useEffect} from "react";
import axios from "axios"
function ArticleFetching(){
   /* const [articles,setArticles] =useState([]);
    useEffect(()=>{
        const uri ='http://127.0.0.1:7000/api/';
        axios.get(uri+'article')
        .then(res =>{
            console.log('aabbs')
            setArticles(res.data)
        })
        .catch(err =>{
            console.log(err)
        })

    })
*/
    return(
        <div>
             <div className="px-4 text-white">
            {loading && <div> loading ...</div>}
            {error && <div> error</div>}
            <div>
                <pre>{JSON.stringify(data,undefined,2)}</pre>
            </div></div>
        </div>
    )
}
export default ArticleFetching