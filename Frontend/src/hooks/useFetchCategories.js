import { useReducer, useEffect } from "react";
import reducer from "./fetchHookReducer"
import axios from "axios";

const initialState={
    data: []
}
const url="http://127.0.0.1:7000/api/"
function useFetchCategories() {
    const [state,dispatch]= useReducer(reducer,initialState);
    useEffect(()=>{
        dispatch({type:"api_request"});
        axios
        //url+"apiurl"
        .get(url+"Category")
        .then((res)=>{
            //res.data.(esm el entity)
            dispatch({type:"fetch_data", payload:res.data.categories});
        }).catch(err =>{
            console.log(err)
        })

    },[])
return state;
}
export default useFetchCategories;