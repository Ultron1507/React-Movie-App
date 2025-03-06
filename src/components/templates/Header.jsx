const Header = ({ data }) => {
  console.log(data);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), 
    url(https://image.tmdb.org/t/p/original/${data?.backdrop_path || data?.profile_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
      }}
      className="w-full h-[50vh]  text-white flex flex-col justify-end items-start p-[4%]"
    >
      {data ? (
        <>
          <h1 className="w-[70%] text-3xl font-black mb-3">
            {data.title ||
             data.name ||
              data.original_title ||
               data.original_name}
               </h1>
               <p className="w-[70%] text-sm mb-3">
                {data.overview.slice(0, 150)}...
                <lin className="text-blue-400"> more</lin></p>
                <p className="flex gap-x-1 text-sm">
                  <i class="text-yellow-500 ri-megaphone-fill"></i>{data.release_date || "No Information"}
                  <i class="ml-5 text-yellow-500 ri-movie-2-fill"></i>{data.media_type.toUpperCase()}
                  </p>
                  <lin className="mt-5 bg-[#6556CD] p-2.5 rounded font-semibold"> Watch Trailer</lin>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Header;
