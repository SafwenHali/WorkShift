import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState={
    data: [],
    loading: false,
    error: null
}
const ACTIONS ={
    API_REQUEST : "api_request",
    FETCH_DATA : "fetch_data",
    ERROR : "error"
}

function reducer(state, {type,payload}){
    switch(type){
        case ACTIONS.API_REQUEST: return{...state,data:[],loading:true}
        case ACTIONS.FETCH_DATA: return{...state,data: payload ,loading:false}
        case ACTIONS.ERROR: return{...state,data:payload,error:payload}
        default : return state;
    }

}

function useFetch(url) {
    const [state,dispatch]= useReducer(reducer,initialState);
    useEffect(()=>{
        dispatch({type: ACTIONS.API_REQUEST});
        axios
        .get(url)
        .then((res)=>{
            dispatch({type: ACTIONS.FETCH_DATA, payload:res.data});
        })
        .catch((err)=>{
            dispatch({type: ACTIONS.ERROR, payload:err.error});
        })

    },[url])
return state;
}

export default useFetch;