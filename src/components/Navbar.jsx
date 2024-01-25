import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { routes } from "../utils/constants";
import { Link as LinkReactScroll } from "react-scroll";

const Navbar = () => {
  const [openMenuForNav, setOpenMenuForNav] = useState(false);
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-10 ">
        <div className="flex items-center justify-between h-16">
          <img className="shrink-0" src="/images/Logo.svg" alt="logo" />
          <ul className="space-x-8 hidden md:block">
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
                    className="font-bold cursor-pointer"
                  >
                    About
                  </LinkReactScroll>
                );
              } else {
                return (
                  <Link
                    className="text-black font-bold"
                    key={`link-to-${route.path}`}
                    to={`${route.path}`}
                  >
                    {route.name}
                  </Link>
                );
              }
            })}
          </ul>
          <div className="-mr-2 flex md:hidden items-center justify-center p-2 rounded-md text-3xl text-black hover:text-white hover:bg-background-color-2 focus:outline-none">
            <button
              type="button"
              id="menu-button"
              aria-expanded={openMenuForNav}
              aria-haspopup="true"
              onClick={() => setOpenMenuForNav(!openMenuForNav)}
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
      {openMenuForNav && <HamburgerMenu routes={routes} />}
    </nav>
  );
};

export default Navbar;
