import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Reservations",
    path: "/reservations",
  },
  {
    name: "Order",
    path: "/order",
  },
  {
    name: "Login",
    path: "/login",
  },
];

const Navbar = () => {
  const [openMenuForNav, setOpenMenuForNav] = useState(false);

  console.log("open:", openMenuForNav);

  return (
    <div className="w-full">
      <nav className="bg-light-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <img className="shrink-0" src="/images/Logo.svg" alt="logo" />
            <ul className="space-x-8 hidden md:block">
              {(routes ?? []).map((route) => {
                return (
                  <Link
                    className="text-black font-bold"
                    key={`link-to-${route.path}`}
                    to={`${route.path}`}
                  >
                    {route.name}
                  </Link>
                );
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
    </div>
  );
};

export default Navbar;
