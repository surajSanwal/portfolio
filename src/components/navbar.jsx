// @flow strict
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
  return (
    <nav className="bg-transparent mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
            {personalData.name?.toUpperCase()}
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          {menu?.map((navItem) => (
            <li key={navItem.path}>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline focus:underline focus:underline-offset-2"
                href={navItem.path}
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
