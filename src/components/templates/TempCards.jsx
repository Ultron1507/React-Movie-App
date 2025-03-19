import React from 'react';

const TempCards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data.map((c, i) => (
        <div className="w-[25vh] p-2 bg-gray-800 rounded-lg shadow-md" key={i}>
          <img
            className="w-[40vh] h-[20vh] object-cover rounded-md"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path
            }`}
            alt={c.title || c.name || "Trending Item"}
          />
          <h2 className="text-white text-center mt-2">
            {c.name || c.title || c.original_name || c.original_title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default TempCards;
