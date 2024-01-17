import { Link } from "react-router-dom";

const HamburgerMenu = ({ routes }) => {
  return (
    <div className="transition-transform ease-out duration-300 transform scale-100 opacity-100">
      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1" role="none">
          {(routes ?? []).map((route) => {
            return (
              <Link
                className="text-gray-700 block px-4 py-2 text-sm transition-opacity duration-300"
                key={`link-to-${route.path}`}
                to={`${route.path}`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                {route.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
