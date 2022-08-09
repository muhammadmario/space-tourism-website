import React from "react";
import { useState } from "react";
import logo from "../img/shared/logo.svg";
import iconHamburger from "../img/shared/icon-hamburger.svg";
import iconClose from "../img/shared/icon-close.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="fixed w-screen flex justify-between px-6 py-6 items-center md:py-0 md:px-0 z-50">
        <Link to="/">
          <img className="h-10 w-10 md:ml-6 lg:ml-14" src={logo} alt="logo" />
        </Link>
        <img
          onClick={() => setMenu(!menu)}
          className={`transition ease-in-out delay-150 z-10 md:hidden  ${
            menu ? "w-5 h-5" : "w-6 h-5"
          }`}
          src={menu ? iconClose : iconHamburger}
          alt="logo"
        />
        <ul
          className={`font-extralight absolute flex flex-col gap-8 w-[80vw] top-0 right-0 h-screen tracking-widest transition ease-in-out delay-150 text-md uppercase pl-7 pt-32 text-third bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  md:translate-x-0 md:flex-row md:static  md:px-6 md:w-fit md:justify-end md:h-full bg-secondary md:py-7 lg:w-[60vw] lg:justify-center ${
            menu ? "translate-x-0" : "translate-x-full "
          } `}
        >
          <Link to="/">
            <li
              className="cursor-pointer lg:text-sm"
              onClick={() => setMenu(!menu)}
            >
              <span className="font-bold pr-2 md:hidden lg:inline ">00</span>
              Home
            </li>
          </Link>

          <Link to="/destination">
            <li className="cursor-pointer">
              <span className="font-bold pr-2 md:hidden lg:inline">01</span>
              Destination
            </li>
          </Link>

          <Link to="/crew">
            <li className="cursor-pointer">
              <span className="font-bold pr-2 md:hidden lg:inline">02</span>Crew
            </li>
          </Link>

          <Link to="/technology">
            <li className="cursor-pointer">
              <span className="font-bold pr-2 md:hidden lg:inline">03</span>
              Technology
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
