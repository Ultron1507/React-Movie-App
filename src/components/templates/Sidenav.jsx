import axios from '../../utils/axios';
import React, { useEffect } from 'react'

const Sidenav = () => {

 

  return (
    <div className='w-[17%] h-full border-r-2 border-zinc-400 p-7'>
        <h1 className='text-2xl text-white font-bold'>
        <i className=" text-[#6556CD] ri-tv-fill mr-1"></i>
        <span>StreamX</span> 
        </h1>

        <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
        <h1 className='text-white font-semibold text-lg mt-6 mb-3'>
            New Feeds
            </h1>
        <lin className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
        <i className=" ri-fire-fill"></i> Trending
            </lin>
        <lin className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
        <i className="mr-2 ri-sparkling-fill"></i> Popular
            </lin>
        <lin className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
        <i className="mr-2 ri-movie-2-fill"></i>Movies
        </lin>
        <lin className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
        <i className="mr-2 ri-tv-2-fill"></i>Tv shows
        </lin>
        <lin className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
        <i className="mr-2 ri-team-fill"></i>People
        </lin>
        </nav>
        <hr className='border-none h-[1px] bg-zinc-400'/>
        <nav className='flex flex-col text-zinc-400 text-lg gap-2'>
        <h1 className='text-white font-semibold text-lg mt-6 mb-2'>
            Website Information
            </h1>
        <lin className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
        <i className="mr-1 ri-information-2-fill"></i> About StreamX
            </lin>
        <lin className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
        <i className="mr-1 ri-phone-fill"></i> Contact Us
            </lin>
        </nav>
    </div>
  )
}

export default Sidenav