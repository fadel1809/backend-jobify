/* eslint-disable react/prop-types */
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/Links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { user, toggleSidebar } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, icon, path } = link;
        if (user.role !== "admin" && path === "admin") return;
        return (
          <NavLink
            className="nav-link"
            to={path}
            key={text}
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span> {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
