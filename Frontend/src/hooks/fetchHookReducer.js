const ACTIONS ={
    API_REQUEST : "api_request",
    FETCH_DATA : "fetch_data",
}

function reducer(state, {type,payload}){
    switch(type){
        case ACTIONS.API_REQUEST: return{...state,data:[],loading:true}
        case ACTIONS.FETCH_DATA: return{...state,data: payload ,loading:false}
        default : return state;
    }
}

export default reducer;