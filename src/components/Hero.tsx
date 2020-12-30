import React from "react";

export default function Hero({ src }) {

  return (
    <div className="flex space-x-0 p-2 max-w-screen-md">
      <div className="grid grid-cols-3">
        <div className="col-span-2 h-full p-5 md:pr-44">
          <p className="font-sans text-base md:text-4xl font-extrabold">
            Your Custom Star Map
          </p>
          <p className="pt-1 md:pt-5 text-sm md:text-lg font-light">
            Create a 18"x24" star map that shows the stars exactly as they were
            on a specific date and location with a personalized message!
          </p>

          <div className="mt-5 md:mt-10">
            <button className="py-3 md:px-7 px-3 font-sans md:text-base text-xs shadow-yellow rounded text-white hover:text-yellow-100 bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-2xl hover:bg-yellow-500">
              Create Your Star Map
            </button>
          </div>
        </div>
        <div className="flex p-2 bg-black">
        <img alt="image" src={src} className="object-cover w-full" />
      </div>
      </div>
    </div>
  );
}
