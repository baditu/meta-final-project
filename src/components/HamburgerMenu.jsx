import { Link } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

const HamburgerMenu = ({ routes, isOpen, onClose }) => {
  const handleLinkClick = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "flex" : "hidden"} items-end sm:items-center justify-center`}
    >
      <div className="h-full w-full bg-black opacity-50" onClick={onClose} />
      <div className="w-64 h-full bg-white p-5 absolute right-0 top-0 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 p-2"
          aria-label="Close menu"
        >
          <IoMdCloseCircle style={{ color: "#495E57", fontSize: "32px" }} />
        </button>
        <div className="py-1" role="none">
          {(routes ?? []).map((route) => {
            if (route.name === "About") return null;

            return (
              <Link
                className="text-gray-700 block px-4 py-2 text-sm transition-opacity duration-300 hover:text-text-color-1"
                key={`link-to-${route.path}`}
                to={`${route.path}`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={handleLinkClick}
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
