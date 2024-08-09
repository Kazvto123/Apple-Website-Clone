import React from "react"; // Importing React library
import { appleImg, bagImg, searchImg } from "../utils"; // Importing image assets
import { navLists } from "../constants"; // Importing navigation items

const Navbar = () => {
  return (
    // The header section of the navbar with padding and flexbox styling
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        {" "}
        {/* Flexbox container for navbar */}
        {/* Apple logo */}
        <img src={appleImg} alt="Apple" width={14} height={18} />
        {/* Centered navigation links, hidden on small screens */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {/* Mapping over navLists array to generate navigation items */}
          {navLists.map((nav) => (
            <div
              key={nav} // Unique key for each item
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav} {/* Displaying the navigation item */}
            </div>
          ))}
        </div>
        {/* Search and bag icons, adjusted for small screens */}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />{" "}
          {/* Search icon */}
          <img src={bagImg} alt="bag" width={18} height={18} /> {/* Bag icon */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar; // Exporting Navbar component
