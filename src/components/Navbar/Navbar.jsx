import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient"
import logo from "../../assets/b_logo.png";
import NavLinks from "./NavLinks";
import Button from "./Button";

export default function Navbar({ session }) {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <nav className="bg-white mx-6 lg:mx-10">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-4 px-0 md:w-auto w-full flex justify-between items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Bitnine logo"
              className="w-40 md:cursor-pointer"
            />
          </Link>
          <div className="text-3xl">
            {!nav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-line="1.5"
                stroke="currentColor"
                className="md:hidden w-6 h-6"
                onClick={handleNav}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="md:hidden w-6 h-6"
                onClick={handleNav}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-inter">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
        <button
              onClick={() => supabase.auth.signOut()}
              className="bg-blue-gray-500 hover:bg-blue-gray-800 text-white font-semibold border-blue-200 rounded-md p-3"
            >
              Sign Out
            </button>
        </div>
        {/* Mobile */}
        <ul
          className={`
          md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            nav ? "left-0" : "left-[-100%]"
          }
        `}
        >
          <li>
            <Link to="/" className="py-4 text-left inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <button
              onClick={() => supabase.auth.signOut()}
              className="bg-blue-gray-500 hover:bg-blue-gray-800 text-white font-semibold border-blue-200 rounded-md p-3"
            >
              Sign Out
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
