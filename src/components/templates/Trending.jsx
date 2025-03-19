import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import axios from "axios";
import TempCards from "./TempCards";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]); 
  const [error, setError] = useState(""); // ✅ Fix: Added error state
  const API_KEY = "YOUR_API_KEY"; // ✅ Replace with actual TMDB API Key

  const GetTrending = async () => {
    setError(""); // Reset error before fetching
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${category}/${duration}?api_key=${API_KEY}`
      );
      setTrending(data.results);
    } catch (err) {
      console.log("Error fetching trending data:", err);
      setError("Failed to load trending content. Please try again.");
    }
  };

  useEffect(() => {
    GetTrending();
  }, [category, duration]);

  return (
    <div className="px-3 w-screen h-screen">
      <div className="w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-circle-line"
          ></i>{" "}
          Trending
        </h1>

        <Topnav />

        {/* ✅ Dropdown for Category */}
        <Dropdown 
          title="Category" 
          options={["movie", "tv", "all"]} 
          func={(e) => setCategory(e.target.value)}
        />

        <div className="w-[2%]"></div>

        {/* ✅ Dropdown for Duration */}
        <Dropdown 
          title="Duration" 
          options={["week", "day"]} 
          func={(e) => setDuration(e.target.value)}
        />
      </div>

      {/* ✅ Show error message if API fails */}
      {error && <p className="text-red-500 text-center mt-5">{error}</p>}

      {/* ✅ Display TempCards only if trending data exists */}
      {trending.length > 0 ? (
        <TempCards data={trending} />
      ) : (
        !error && <p className="text-center text-gray-400 mt-5">Loading trending content...</p>
      )}
    </div>
  );
};

export default Trending;
