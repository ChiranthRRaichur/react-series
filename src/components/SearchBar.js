import { useState } from "react";


const SearchBar = ({ searchText, setSearchText, onSearch }) => {
    return(
        <div className="search-box">
            <input type="text" placeholder="Enter Restaurant Name" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            <button className="search-button" onClick={()=>{
                onSearch();
            }}>Search</button>
        </div>
    );
}

export default SearchBar;