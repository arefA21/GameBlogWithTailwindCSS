import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] bg-emerald-700 fixed drop-shadlow-lg z-10">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl mr-4 font-bold sm:text-4xl text-green-50">
            Game Blog
          </h1>
          <ul className="hidden md:flex text-white">
            <li>Home</li>
            
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="bg-transparent mr-3">Sign In</button>
          <button>Sign Up</button>
        </div>
        <div className="md:hidden text-white" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? 'hidden' : "md:hidden absolute bg-emerald-700 w-full px-8"}>
        <li className="border-b-2 text-white w-full">Home</li>
        <li className="border-b-2 text-white w-full">About</li>
        <li className="border-b-2 text-white w-full">Support</li>
        <li className="border-b-2 text-white w-full">Platform</li>
        <li className="border-b-2 text-white w-full">Pricing</li>
        <div className="p-4 flex flex-col">
          <button className="bg-transparent m-2">Sign In</button>
          <button>Sign Up</button>
        </div>
      </ul>
    </div>
  );
}
