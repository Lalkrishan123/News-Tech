import React from "react";
import { useGlobalContext } from "./Context";

const Search=()=>{
    const {query,searchPost}=useGlobalContext();
    return (
        <div className="Stories-div">
        <h1>Tech News Website </h1>
        <from >
            <div>
                <input type="text" placeholder="Search here..." className="search"
                value={query} onChange={(e)=>searchPost(e.target.value)}
                />
            </div>
        </from>
        </div>
    )
}
export default Search;