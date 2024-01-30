import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { routes } from "../utils/constants";
import { Link as LinkReactScroll } from "react-scroll";

const Navbar = () => {
  const [openMenuForNav, setOpenMenuForNav] = useState(false);

  const toggleMenu = () => {
    setOpenMenuForNav(!openMenuForNav);
  };

  return (
    <nav className="relative">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between h-16">
          <img className="shrink-0 h-3/4" src="/images/Logo.svg" alt="logo" />
          <ul className="hidden md:flex space-x-8">
            {(routes ?? []).map((route) => {
              if (route.name === "About") {
                return (
                  <LinkReactScroll
                    to={"about"}
                    key={`${route}-about`}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    activeStyle={{ color: "black" }}
                    className="font-bold cursor-pointer hover:text-text-color-1"
                  >
                    About
                  </LinkReactScroll>
                );
              } else {
                return (
                  <Link
                    className="text-black font-bold hover:text-text-color-1"
                    key={`link-to-${route.path}`}
                    to={`${route.path}`}
                  >
                    {route.name}
                  </Link>
                );
              }
            })}
          </ul>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-3xl text-black hover:text-white hover:bg-background-color-2 focus:outline-none"
              aria-expanded={openMenuForNav}
              aria-label="Open menu"
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
      {openMenuForNav && (
        <HamburgerMenu
          routes={routes}
          isOpen={openMenuForNav}
          onClose={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
