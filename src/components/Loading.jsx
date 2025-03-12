import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#1F1E24]">
      <img src="/loading.gif" alt="Loading..." className="w-[100%] h-[100%] object-cover" />
    </div>
  );
};

export default Loading;


