import { useReducer, useEffect } from "react";
import reducer from "./fetchHookReducer"
import axios from "axios";

const initialState={
    data: [],
    loading: false
}
const url="http://127.0.0.1:7000/api/"
function useFetchArticles(id) {
    const [state,dispatch]= useReducer(reducer,initialState);
    useEffect(()=>{
        dispatch({type:"api_request"});
        axios
        //url+"apiurl"
        .get(url+"article/"+id)
        .then((res)=>{
            //res.data.(esm el entity)
            dispatch({type:"fetch_data", payload:res.data.articles});
        }).catch(err =>{
            console.log(err)
        })

    },[])
return state;
}
export default useFetchArticles;