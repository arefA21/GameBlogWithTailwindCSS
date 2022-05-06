import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <div className="w-screen h-[80px] bg-emerald-700 fixed drop-shadlow-lg">
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
        <div className="md:hidden text-white">
          <MenuIcon className="w-5" />
        </div>
      </div>
      
      
    </div>
  );
}
