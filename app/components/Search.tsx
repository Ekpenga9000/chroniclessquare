"use client";
import React from "react";

const Search = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        return
     };
  return (
      <div className="my-4 container-custom relative">
          <label htmlFor="search" className="absolute top-3 left-3 cursor-pointer">
              <i className="bx bx-search-alt-2 text-purple-600 "></i>
              </label>
      <input
        type="search"
        name=""
              id="search"
              onChange={handleChange}
        placeholder="Search tags, keywords, or username"
        className="bg-white/10 outline-none focus:bg-white/15 w-full md:w-3/4 lg:w-6/12 py-3 pl-10 pr-1 rounded-md text-sm text-white"
      />
    </div>
  );
};

export default Search;
