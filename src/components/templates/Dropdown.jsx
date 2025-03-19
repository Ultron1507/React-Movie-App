import React from "react";

const Dropdown = ({ title, options = [], selected, setSelected, selectedCategory, setSelectedCategory }) => {
  const handleChange = (e) => {
    if (setSelected) {
      setSelected(e.target.value);
    } else if (setSelectedCategory) {
      setSelectedCategory(e.target.value);
    }
  };

  return (
    <div className="flex flex-col">
      {title && <label className="text-white mb-1">{title}</label>} {/* ✅ Only shows title if provided */}
      <select
        className="p-2 bg-gray-800 text-white rounded-md border border-gray-600"
        value={selected || selectedCategory || ""}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
