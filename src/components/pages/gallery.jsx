import React from "react";
import Events from "./../events";

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="w-full bg-gradient-to-b from-[#ffffff] to-[#ff9b49] py-5 md:mb-5 pb-4 px-4 border">
        <div className="max-w-screen-xl mx-auto ">
          <h1 className="text-4xl font-bold text-gray-700 text-center py-5 mb-6">
            Gallery
          </h1>
          <Events />
        </div>
      </div>
    </>
  );
};

export default Gallery;



















