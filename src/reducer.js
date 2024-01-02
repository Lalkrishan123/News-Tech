const reducer=(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true
            }

        case "GET_STORIES":
            return{
                ...state,
                isLoading:false,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages
            }

        case "REMOVE_POST":
            return{
                ...state,
                hits:state.hits.filter(
                    (e)=>e.objectID !== action.payload
                    ),
            }

        case "SEARCH_QUERY":
            return{
                ...state,
                query:action.payload
            }
        
        case "PREV_PAGE":
            let pagenum=state.page;
            if(pagenum<=0){
                pagenum=0
            }else{
                pagenum=pagenum-1;
            }
            return{
                ...state,
                page:pagenum
            }

        case "NEXT_PAGE":
            let incre=state.page+1;
            if(incre>=state.nbPages){
                incre=0;
            }
            return{
                ...state,
                page:incre
            }

    }
}
export default reducer;