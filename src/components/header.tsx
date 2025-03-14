import React from "react";
import Navbar from "./navbar";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <header>
        <a
          href="#main"
          id="skip"
          className="absolute left-0 top-0 p-3 m-3 bg-primary text-white -translate-y-full focus:translate-y-0 focus:outline transition-transform"
        >
          Skip to main content
        </a>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
