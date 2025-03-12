import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../templates/Topnav";
import Dropdown from "../templates/Dropdown";
import axios from "axios";
import Cards from "./TempCards"; // Fixed import (capitalized)
import Loading from "../Loading"; // Ensure this exists

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/trending/${category.toLowerCase()}/${duration.toLowerCase()}`);
        setTrending(data.results);
      } catch (error) {
        console.error("Error: ", error);
      }
      setLoading(false);
    };

    getTrending();
  }, [category, duration]);

  return trending ? (
    <div className="px-[3%] w-screen h-screen bg-gray-900 text-zinc-400">
      {/* Header Section */}
      <div className="w-full flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-zinc-400 text-3xl">
            <i className="hover:text-[#6556CD] ri-arrow-left-circle-line"></i>
          </button>
          <h1 className="text-2xl font-semibold">Trending</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <Topnav />
        </div>

        {/* Filter & Duration Dropdowns */}
        <div className="flex items-center gap-4">
          <Dropdown
            title="Filter"
            options={["movie", "tv", "all"]} // Fixed lowercase values
            selected={category}
            setSelected={setCategory}
          />
          <Dropdown
            title="Duration"
            options={["week", "day"]} // Fixed lowercase values
            selected={duration}
            setSelected={setDuration}
          />
        </div>
      </div>

      {/* Loading State */}
      <Cards data={trending} title={category} />
    </div>
  ): (
    <Loading/>
  );
};

export default Trending;
