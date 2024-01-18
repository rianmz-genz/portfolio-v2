import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
const Navbar = () => {
  return (
    <header className="pt-1 transition-all duration-500 w-full">
      <nav
        className="w-full px-6 py-4 rounded-full max-sm:rounded-lg bg-transparent transition-all duration-300 flex flex-col gap-6  dark:bg-transparent backdrop-blur-md bg-opacity-25"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <p className="text-white text-center text-lg italic font-bold">Adrian</p>
        <NavItem>
          <NavLink target="/">About</NavLink>
          <NavLink target="/skills">Skills</NavLink>
          <NavLink target="/projects">Projects</NavLink>
          <NavLink target="#contact">Contact</NavLink>
        </NavItem>
      </nav>
    </header>
  );
};

export default Navbar;