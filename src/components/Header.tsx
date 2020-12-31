import React, { useState } from "react";

const Header = () => {
  const [displayHeader, addHeader] = useState(false);

  return (
    <>
    { displayHeader ?
    <div className="flex-col opacity-80 bg-header-bg bg-cover w-full bg-no-repeat h-auto p-32 sm:p-60 items-center justify-center text-center">
      <div className="text-5xl font-extrabold transform hover:scale-110 motion-reduce:transform-none flex justify-center" >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-500 ">
          We Found Your Stars
        </span>
      </div>
      <button className="mt-10 bg-red-300 hover:bg-red-700 text-white rounded-lg p-3" onClick={()=>addHeader(false)}>Remove Header</button>
    </div>
    : <div className="p-2 items-center justify-center text-center">
      <button className="m-10 bg-red-300 hover:bg-red-700 text-white rounded-lg p-3" onClick={()=>addHeader(true)}>Display Header</button>
      </div>
    }
    </>
  );
};

export default Header;
