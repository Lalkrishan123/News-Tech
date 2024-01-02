import React, { useContext, useReducer,useEffect } from "react";
import reducer  from "./reducer";


const AppContext=React.createContext();

let API='http://hn.algolia.com/api/v1/search?';

    const initialState={
        isLoading:true,
        query:"html",
        page:0,
        nbPages:0,
        hits:[]
    }

const AppProvider=({children})=>{

    
    const [state,dispatch]=useReducer(reducer,initialState); 

    


    const fetchApiData= async (url)=>{
        dispatch({type:"SET_LOADING"});

        try{
            const res= await fetch(url);
            const data = await res.json();
            // console.log(data);
            dispatch(
                {
                    type: "GET_STORIES",
                    payload:{
                        hits:data.hits,
                        nbPages:data.nbPages
                    }
                }
            )
        }
        catch(err){
            console.log(err);
        }
    }



    //remove post
    const removePost=(Post_id)=>{
        dispatch({
            type:"REMOVE_POST",
            payload:Post_id
        })
        // console.log(Post_id);
    }

    //search post
    const searchPost=(search_post)=>{
        dispatch({
            type:"SEARCH_QUERY",
            payload:search_post
        })
    }

    //pagination
    //prev page
    const getPrevPage=()=>{
        dispatch({
            type:"PREV_PAGE"
        })
    }

    //next page
    const getNextPage=()=>{
        dispatch({
            type:"NEXT_PAGE"
        })
    }

    //API calling
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    },[state.query,state.nbPages,state.page])


    return <AppContext.Provider value={{...state,removePost,searchPost,getPrevPage,getNextPage}}>{children}</AppContext.Provider>;
};

const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};