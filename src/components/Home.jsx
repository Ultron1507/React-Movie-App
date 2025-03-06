import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import Horizontalcard from "./templates/Horizontalcard";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    document.title = "Homepage"; // ✅ Sets the document title

    // ✅ Fetches trending data and sets wallpaper
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/trending/all/day`);
        setTrending(data.results);

        // ✅ Select a random item from the results for wallpaper
        if (data.results.length > 0) {
          let randomIndex = Math.floor(Math.random() * data.results.length);
          setWallpaper(data.results[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); // ✅ Runs only once when component mounts

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <Horizontalcard data ={trending} />
      </div>
    </>
  ) : (
    <div className="flex items-center justify-center h-screen text-white">
      Loading...
    </div>
  );
};

export default Home;
