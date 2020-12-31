import React from "react";

const Header = () => {
  return (
    <div className="flex opacity-80 bg-header-bg bg-cover w-full bg-no-repeat h-auto p-60 items-center justify-center ">
      {/* <video className="object-cover" autoPlay loop muted src="/images/video.mp4" /> */}
      <div className="text-5xl font-extrabold ...">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-500">
          Find Your Stars
        </span>
      </div>
    </div>
  );
};

export default Header;
