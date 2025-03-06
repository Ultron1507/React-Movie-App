import React from "react";

const Dropdown = ({ selectedCategory, setSelectedCategory }) => {
  const filters = ["All", "Movie", "TV"];

  return (
    <div className="mb-4">
      <label className="text-white mr-2">Filter:</label>
      <select
        className="p-2 w-[140px] bg-gray-800 text-white rounded-md"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {filters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
