import React from 'react';

export default function Hero({ src }) {
    return (
    <div className="flex space-x-0 p-2 max-w-screen-md" >
        <div className="w-3/5">
        <div className="w-3/4 h-full p-6">
            <p className="font-sans text-lg md:text-4xl font-extrabold">
                Your Custom Star Map</p>
            <p className="pt-5 font-light">
                Create a 18"x24" star map that shows the stars exactly as they were on a specific date and location with a personalized message!
            </p>

            <div className="pt-10">
            <button className="py-3 px-7 font-sans shadow-yellow rounded text-white hover:text-yellow-100 bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-2xl hover:bg-yellow-500">
                Create Your Star Map
            </button>
            </div>
            </div>
        </div>
        <div className="flex-auto bg-black p-2 w-1/4 relative" >
        <img alt="image" src={src} className="flex-none object-cover bg-black" />
        </div>
    </div>

    )
}
