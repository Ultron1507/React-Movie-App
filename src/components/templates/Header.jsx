 const Header = ({ data }) => {
        console.log(data);
      
        return (
          <div
            style={{
              background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${data?.backdrop_path || data?.profile_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            className="w-full h-[50vh] text-white flex items-center justify-center"
          >
            {data ? data.title || "Header" : "Loading..."}
          </div>
        );
    };
    
    export default Header;