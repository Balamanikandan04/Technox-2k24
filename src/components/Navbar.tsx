import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { agnilogo } from "../assets/events/eventsImages";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={agnilogo} className="h-14" alt="Logo" />
          <span className="self-center text-1.5xl font-semibold whitespace-nowrap dark:text-white">
            Agni College Of Technology 
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-end p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                // className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                className={({ isActive }): string =>
                  `${isActive ? "text-yellow-200" : ""} nav-link`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }): string =>
                  `${isActive ? "text-yellow-200" : ""} nav-link`
                }
              >
                Events
              </NavLink>
            </li>
            {/* <li> */}
              {/* <NavLink
                to="/gallery"
                className={({ isActive }): string =>
                  `${isActive ? "text-blue-700" : ""} nav-link`
                }
              >
                Gallery
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/workshop"
                className={({ isActive }): string =>
                  `${isActive ? "text-blue-700" : ""} nav-link`
                }
              >
                Workshop
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }): string =>
                  `${isActive ? "text-yellow-200" : ""} nav-link`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://docs.google.com/forms/d/e/1FAIpQLSd0VZM5Z-dq3FdAzyJW71xXDKUa8xvpdv34gA2tTgIKTXjpAg/viewform?usp=sf_link"
                className={({ isActive }): string =>
                  `${isActive ? "text-yellow-200" : ""} nav-link`
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;