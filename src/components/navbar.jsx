// @flow strict
import { useState, useEffect, useRef } from "react";
import { personalData } from "@utils/data/personal-data";
import Link from "next/link";

const menu = [
  { path: "/#about", label: "About" },
  { path: "/#experience", label: "Experience" },
  { path: "/#skills", label: "Skills" },
  { path: "/#education", label: "Education" },
  { path: "/blog", label: "Blogs" },
  { path: "/#projects", label: "Projects" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        document.getElementById("menuOpen").focus();
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-transparent mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            {personalData.name?.toUpperCase()}
          </Link>
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              document.getElementById("menuClose").focus();
            }}
            className="text-white focus:outline-1 focus:p-1"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            role="button"
            id="menuOpen"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        <ul
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-64 bg-[#0d1224] p-6 transition-transform duration-300 ease-in-out transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } z-[9999] md:static md:h-auto md:w-auto md:flex md:flex-row md:space-x-1 md:bg-transparent md:opacity-100 md:translate-x-0`}
          id="navbar-default"
        >
          <button
            onClick={() => {
              setMenuOpen(false);
              document.getElementById("menuOpen").focus();
            }}
            className="text-white self-end mb-4 md:hidden focus:outline-1 focus:p-1"
            aria-label="Close menu"
            id="menuClose"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {menu?.map((navItem) => (
            <li key={navItem.path} className="w-full md:w-auto">
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline focus:underline focus:underline-offset-2 focus:border focus:border-pink-600"
                href={navItem.path}
                onClick={() => setMenuOpen(false)} // Close the menu on link click
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 uppercase">
                  {navItem.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
