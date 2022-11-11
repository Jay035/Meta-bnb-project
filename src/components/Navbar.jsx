import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [menuShown, setMenuShown] = useState(false);

  return (
    <header className="flex items-center justify-between gap-14 px-6 py-6 lg:px-24 lg:py-12">
      <img className="w-48 lg:w-60" src={logo} alt="logo" />
      <nav
        className={`
          ${
            menuShown
              ? `absolute top-0 left-0 bg-black/75 w-full flex flex-col gap-12 lg:pl-0 text-xl lg:items-center lg:flex-row`
              : `hidden lg:flex`
          } lg:relative`}
      >
        {/* Menu */}
        <div className="flex flex-col gap-8 pt-8 pl-6 bg-white h-screen w-3/4">
          <i
            className="ri-close-fill cursor-pointer text-5xl w-fit h-fit lg:hidden"
            onClick={() => setMenuShown((prevState) => !prevState)}
          ></i>
          <ul className="flex flex-col gap-6 lg:flex-row lg:gap-12">
            <NavLink
              to="/"
              className="w-fit cursor-pointer hover:font-medium transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/places"
              className="w-fit cursor-pointer hover:font-medium transition-colors"
            >
              Place to stay
            </NavLink>
            <NavLink
              to="/NFTs"
              className="w-fit cursor-pointer hover:font-medium transition-colors"
            >
              NFTs
            </NavLink>
            <NavLink
              to="/community"
              className="w-fit cursor-pointer hover:font-medium transition-colors"
            >
              Community
            </NavLink>
          </ul>
          <a
            href=""
            className="px-7 py-[13px] text-white rounded-xl bg-gradient-to-t from-[#a02279] to-[#a02279] w-fit hover:opacity-90"
          >
            Connect wallet
          </a>
        </div>
      </nav>

      {/* hamburger icon */}
      <div
        className="cursor-pointer lg:hidden"
        onClick={() => setMenuShown((prevState) => !prevState)}
      >
        <span className="w-6 h-[3px] block bg-black"></span>
        <span className="w-6 h-[3px] my-[3px] block bg-black"></span>
        <span className="w-6 h-[3px] block bg-black"></span>
      </div>
    </header>
  );
}