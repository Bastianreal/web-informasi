"use client";
import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-white ">
        <div className="max-m-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Link href="/" className="text-black font-bold">
                  Waroeng Timoer
                </Link>
              </div>
            </div>
            <div className="hidden md:block font-poppins">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="#Home">
                  <p className="text-black hover:bg-black hover:text-white rounded-lg transition duration-500 p-2">
                    Home
                  </p>
                </Link>
                <Link href="#AboutUs">
                  {" "}
                  <p className="text-black hover:bg-black hover:text-white rounded-lg transition duration-500 p-2">
                    Tentang Kami
                  </p>
                </Link>
                <Link
                  href="#Menu"
                  className="text-black hover:bg-black hover:text-white rounded-lg transition duration-500 p-2"
                 >
                    Menu Kami
                  </Link>
                  <Link
                  href="#Location"
                  className="text-black hover:bg-black hover:text-white rounded-lg transition duration-500 p-2"
                 >
                    Lokasi
                  </Link>
                
              </div>
            </div>



            <div className="md:hidden flex items-center z-1">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black 
                            focus:outline-none focus:ring-2 focus:ring-black" onClick={toggleNavbar}          
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                  
                )}
              </button>
            </div>
                  
          </div>
        </div>
        {isClick && (
          <div className="animate-fadein flex flex-col z-50 absolute w-full">
          <div className="md:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black font-poppins animate-geser focus:ease-in-out focus:duration-500">
              <Link
                href="#Home"
                className="text-white block hover:bg-[#ffffff] hover:text-black rounded-lg transition duration-500 p-2"
              >
                Home
              </Link>
              <Link
                href="#AboutUs"
                className="text-white block hover:bg-[#ffffff] hover:text-black rounded-lg transition duration-500 p-2"
              >
                Tentang Kami
              </Link>
              <Link
                href="#Menu"
                className="text-white block hover:bg-[#ffffff] hover:text-black rounded-lg transition duration-500 p-2"
              >
                Menu Kami
              </Link>
              
              <Link
                href="#Location"
                className="text-white block hover:bg-[#ffffff] hover:text-black rounded-lg transition duration-500 p-2"
                onClick={toggleNavbar}
              >
                Lokasi
              </Link>
            </div>
          </div>
          </div>
        )}
      </nav>
      
    </>
  );
};

export default Navbar;
