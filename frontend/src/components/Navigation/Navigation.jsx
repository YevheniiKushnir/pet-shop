import { NavLink } from "react-router-dom";
import { LINKS } from "../../utils/routes.js";

const Navigation = ({ className = "" }) => {
  return (
    <nav className={className}>
      {LINKS.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `hover:text-main-blue hover:-translate-y-0.5 active:text-main-blue active:scale-95 transition-all duration-300 w-max ${
              isActive ? "text-main-blue" : "text-main-black"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
