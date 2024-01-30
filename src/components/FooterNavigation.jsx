import { routes } from "../utils/constants";
import { Link } from "react-router-dom";

const FooterNavigation = () => {
  return (
    <div className="flex-col hidden md:flex">
      <h1 className="font-bold md:text-2xl">Navigation</h1>
      {(routes ?? []).map((route) => {
        if (route.name === "About") {
          return null;
        }

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
    </div>
  );
};

export default FooterNavigation;
