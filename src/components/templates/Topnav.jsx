import axios from '../../utils/axios';
import React, { useState, useEffect } from 'react';
import noimg from '/noimg.svg.webp'

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]); // Fixed: Initialized as empty array

  const GetSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
      console.log(data.results)
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSerches();
  }, [query]);

  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[15%]'>
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-3 text-xl text-zinc-200 border-1 bg-transparent border-none rounded-md outline-none"
        type='text'
        placeholder='Search anything'
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-fill cursor-pointer"
        ></i>
      )}

      <div className='w-[50%] max-h-[50vh] absolute bg-zinc-200 top-[90%] overflow-auto rounded'>
        {searches?.map((s, i) => (  // Fixed: Added optional chaining (?.map)
          <div key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"> 
            <img 
             className='w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg'
             src={
              s.backdrop_path || s.profile_path ?
              `https://image.tmdb.org/t/p/original/${
             s.backdrop_path || s.profile_path
            }` : noimg
          } 
             alt="" />
            <span>{s.original_title ||
                   s.name ||
                   s.original_name ||
                   s.title}
                   </span> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
