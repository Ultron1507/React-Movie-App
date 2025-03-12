import React from "react";

const Dropdown = ({ title, options, selected, setSelected, selectedCategory, setSelectedCategory }) => {
  // Determine if it's being used in Trending or Horizontalcard
  const isTrending = options && setSelected;
  const isHorizontal = setSelectedCategory;

  return (
    <div className="flex flex-col">
      {title && <label className="text-white mb-1">{title}</label>}
      <select
        className="p-2 bg-gray-800 text-white rounded-md border border-gray-600"
        value={isTrending ? selected : selectedCategory}
        onChange={(e) => (isTrending ? setSelected(e.target.value) : setSelectedCategory(e.target.value))}
      >
        {(isTrending ? options : ["All", "Movie", "TV"]).map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;


