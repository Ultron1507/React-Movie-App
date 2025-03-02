import React, { useEffect, useState } from 'react'
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import axios from '../utils/axios';
import Header from './templates/Header';

const Home = () => {
    document.title = "Homepage";
    const [wallpaper, setwallpaper] = useState(null);

    const GetHeaderWallpaper =  async () => {
      try {
        const { data } = await axios.get(`/trending/all/day`);
       let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
        setwallpaper(randomdata);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

      useEffect(() => {
         !wallpaper && GetHeaderWallpaper();
      }, [])


  return (
    <>
    <Sidenav/>
    <div className='w-[80%] h-full'>
    <Topnav/>
    <Header data = {wallpaper}/>
    </div>
    
    </>
  )
}

export default Home