import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import Horizontalcard from "./templates/Horizontalcard";
import Loading from "./Loading"; // ✅ Import the new Loading component

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    document.title = "Homepage";

    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/trending/all/day`);
        setTrending(data.results);

        if (data.results.length > 0) {
          let randomIndex = Math.floor(Math.random() * data.results.length);
          setWallpaper(data.results[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <Horizontalcard data={trending} />
      </div>
    </>
  ) : (
    <Loading /> // ✅ Use the new Loading component here
  );
};

export default Home;
