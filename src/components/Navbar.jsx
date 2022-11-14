import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import Modal from "./Modal";

export default function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const [modalState, setModalState] = useState(false);

  return (
    <header
      data-aos="fade-in"
      className="flex items-center justify-between gap-14 px-6 py-6 w-full mx-auto max-w-[1240px] lg:gap-0 lg:py-[2.9rem] xl:px-0"
    >
      <Link to="/">
        <img
          data-aos="fade-right"
          className="w-44 lg:w-60"
          src={logo}
          alt="logo"
        />
      </Link>

      <nav
        className={`
          ${
            menuState
              ? `absolute top-0 left-0 bg-black/75 w-full flex flex-col gap-12 lg:pl-0 lg:w-fit text-xl lg:items-center lg:flex-row`
              : `hidden lg:flex `
          } lg:relative`}
      >
        {/* Menu */}
        <div className="flex flex-col gap-8 pt-8 pl-6 bg-white h-screen w-3/4 lg:pt-0 lg:pl-0 lg:w-fit lg:h-fit lg:flex-row lg:items-center">
          <i
            className="ri-close-fill cursor-pointer text-5xl w-fit h-fit lg:hidden"
            onClick={() => setMenuState((prevState) => !prevState)}
          ></i>
          <ul className="flex flex-col gap-6 md:text-xl lg:flex-row lg:gap-12">
            <NavLink
              to="/"
              className="w-fit cursor-pointer hover:font-medium transition-colors"
              onClick={() => setMenuState((prevState) => !prevState)}
            >
              Home
            </NavLink>
            <NavLink
              to="/places"
              className="w-fit cursor-pointer hover:font-medium transition-colors"
              onClick={() => setMenuState((prevState) => !prevState)}
            >
              Place to stay
            </NavLink>
            <NavLink
              to="/NFTs"
              className="w-fit cursor-pointer hover:font-medium transition-colors"
              onClick={() => setMenuState((prevState) => !prevState)}
            >
              NFTs
            </NavLink>
            <NavLink
              to="/community"
              className="w-fit cursor-pointer hover:font-medium transition-colors"
              onClick={() => setMenuState((prevState) => !prevState)}
            >
              Community
            </NavLink>
          </ul>
          <button
            className="px-7 py-[13px] text-white rounded-xl bg-gradient-to-t from-[#a02279] to-[#a02279] w-fit hover:opacity-90 lg:hidden"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setModalState((prevState) => !prevState);
            }}
          >
            Connect wallet
          </button>
        </div>
      </nav>

      <button
        data-aos="fade-left"
        className="px-7 py-[13px] text-center hidden lg:inline-block text-white rounded-xl bg-gradient-to-t from-[#a02279] to-[#a02279] w-fit hover:opacity-90"
        onClick={() => setModalState((prevState) => !prevState)}
      >
        Connect wallet
      </button>

      {/* hamburger icon */}
      <div
        data-aos="fade-left"
        className="cursor-pointer lg:hidden"
        onClick={() => setMenuState((prevState) => !prevState)}
      >
        <span className="w-6 h-[3px] block bg-black"></span>
        <span className="w-6 h-[3px] my-[3px] block bg-black"></span>
        <span className="w-6 h-[3px] block bg-black"></span>
      </div>
      {modalState ? <Modal setModalState={setModalState} /> : null}
    </header>
  );
}
