import React, { useState } from "react";
import Dropdown from "./Dropdown"; // ✅ Import the Dropdown component

const Horizontalcard = ({ data = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // **Filter Data Based on Selected Category**
  const filteredData = data.filter((item) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Movie") return item.media_type === "movie";
    if (selectedCategory === "TV") return item.media_type === "tv";
    return true;
  });

  return (
    <div className="w-full h-[30vh] p-6 pt-2">
      <div className="flex justify-between items-center mb-3">
        <h1 className="mt-0 text-2xl font-semibold text-zinc-400">Trending</h1>
        {/* ✅ Pass correct props to Dropdown */}
        <Dropdown selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      {/* Scrollable container */}
      <div className="w-full h-[30vh] flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {filteredData.length > 0 ? (
          filteredData.map((d, i) => (
            <div key={i} className="min-w-[140px] w-[140px] h-full p-2 bg-gray-800 rounded-lg shadow-md">
              <img
                className="w-full h-[45%] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${d?.backdrop_path || d?.poster_path}`}
                alt={d.title || d.name || "Trending Item"}
              />
              <h1 className="text-xs font-bold text-white mt-2 mb-1 truncate">
                {d.title || d.name || d.original_title || d.original_name}
              </h1>
              <p className="text-xs text-gray-300 line-clamp-2 overflow-hidden">
                {d.overview ? d.overview.slice(0, 80) : "No description available"}...
                <span className="text-blue-400 cursor-pointer"> more</span>
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Horizontalcard;
