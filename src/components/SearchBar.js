import { useState } from "react";

const SearchBar = ({ searchText, setSearchText, onSearch }) => {
    return (
        <div className="flex w-full max-w-md items-center group">
            {/* Input Field */}
            <input 
                type="text" 
                placeholder="Search for restaurants..." 
                className="w-full px-4 mx-2 py-2 border border-gray-300 rounded-l-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-200"
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)}
                // Trigger search on 'Enter' key
                onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            />
            
            {/* Search Button */}
            <button 
                className="px-6 py-2 bg-orange-500 text-white font-medium rounded-r-md hover:bg-orange-600 transition-colors duration-200 active:bg-orange-700"
                onClick={() => {
                    onSearch();
                }}
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;