import React from "react";
import { Link, useLocation } from "react-router-dom";

function Subnav() {
  const location = useLocation();

  const links = [
    { name: "Engineering", path: "/engineering" },
    { name: "Procurement", path: "/procurement" },
    { name: "Construction", path: "/construction" },
    { name: "Installation", path: "/installation" },
    { name: "Operations and Maintenance", path: "/operations" },
    { name: "Laser Scanning", path: "/laser" },
    { name: "Manpower Supply", path: "/manpower" },
  ];

  const activeLink = links.find(
    (link) => link.path.toLowerCase() === location.pathname.toLowerCase()
  );

  const otherLinks = links.filter(
    (link) => link.path.toLowerCase() !== location.pathname.toLowerCase()
  );

  const engineeringLink = links.find(
    (link) => link.name.toLowerCase() === "engineering"
  );

  const middleLinks = otherLinks.filter(
    (link) => link.name.toLowerCase() !== "engineering"
  );

  return (
    <div className="fixed top-10 left-0 w-full bg-white border-b-2 text-black pb-4 font-semibold py-4 px-30 z-40">
      <div className="flex justify-between items-center w-full">
        <div className="text-black font-bold text-2xl">
          {activeLink ? (
            <Link to={activeLink.path}>{activeLink.name}</Link>
          ) : (
            <Link to={engineeringLink.path}>{engineeringLink.name}</Link>
          )}
        </div>

        <ul className="flex gap-5 text-black text-sm">
          {middleLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="hover:text-blue-800 transition capitalize"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="text-black font-semibold">
          {activeLink && activeLink.name !== "Engineering" && (
            <Link
              to={engineeringLink.path}
              className="hover:text-blue-800 transition"
            >
              {engineeringLink.name}
            </Link>
          )}
        </div>
        </ul>
      </div>
    </div>
  );
}

export default Subnav;
