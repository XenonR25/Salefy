import React from "react";
import Logo from "../assets/Logo.png"; // Adjust the path as necessary
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6'; 
import Darkmode from "./Darkmode"; // Adjust the path as necessary
import { FaCaretDown } from 'react-icons/fa6'; // Importing caret down icon for dropdown


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
},{
    id: 2,
    name: "Services",
    link: "/#services",
},{
    id:3,
    name: "Kid's Wear",
    link: "/#kids",
},{
    id: 4,
    name: "Men's Wear",
    link: "/#men",
},{
    id: 5,
    name: "Women's Wear",
    link: "/#women",
}];

const DropDownlinks = [
  {id:1,name:"Trending Products",link:"/#trending"},
  {id:2,name:"New Arrivals",link:"/#new"},
  {id:3,name:"Best Sellers",link:"/#best"}
]


const Navbar = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.trending-dropdown')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside); //the mousedown event is used to detect clicks outside the dropdown
    // Cleanup the event listener on component unmount
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full shadow-md shadow-purple-200/40 text-gray-800 duration-300 z-40 dark:text-gray-200 dark:shadow-lg dark:shadow-purple-900/40">
      {/* upper navbar */}
      <div className="bg-purple-500/90 py-4 sm:py-1 dark:bg-purple-800/80 dark:bg-opacity-80"> 
        <div className="flex justify-between items-center mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo.png" className="w-8 dark:border-1 dark:border-gray-800 dark:bg-gray-800 dark:rounded" />
              Salefy
            </a>
          </div>
          {/* search bar */}
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Desktop search bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300 rounded-full border border-gray-300 dark:border-gray-600 px-2 py-1 outline-none focus:outline-none focus:ring-2 focus:border-1 focus:ring-purple-500 dark:focus:ring-gray-500"
              />
              <button className="absolute right-0.5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 px-4 py-1 rounded-full transition-colors duration-300 group-hover:text-white">
                <IoMdSearch size={20} />
              </button>
            </div>

            {/* Mobile search bar */}
            <div className="relative group sm:hidden block w-[120px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300 rounded-full border border-gray-300 dark:border-gray-600 px-2 py-1 outline-none focus:outline-none focus:ring-2 focus:border-1 focus:ring-purple-500 dark:focus:ring-gray-500"
              />
              <button className="absolute right-0.5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 px-2 py-1 rounded-full transition-colors duration-300 group-hover:text-white">
                <IoMdSearch size={18} />
              </button>
            </div>

            {/* order button */}
            <button onClick={() => alert("Ordering not available")} className="bg-gradient-to-r from-purple-800 to-purple-600 text-white px-4 py-1 rounded-full hover:bg-purple-700 transition-all duration-400 flex items-center gap-5 group dark:text-gray-900 dark:bg-gradient-to-r dark:from-purple-400 dark:to-purple-600 dark:hover:bg-purple-600">
              <span className="group-hover:block hidden transition-all duration-300">Order</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Dark/Light Mode Toggle */}
            <Darkmode/>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className="flex justify-center items-center bg-white dark:bg-gray-800 dark:text-gray-200">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4 text-gray-800 dark:text-gray-200 hover:text-purple-500 duration-300">{data.name}</a>
            </li>
          ))}
          {/* Simple dropdown & Links */}
          <li
            className="trending-dropdown group relative cursor-pointer"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <div className="flex items-center gap-[2px] py-2 hover:text-purple-500 duration-300 select-none">
              Trending
              <span>
                <FaCaretDown className={`transition-all duration-200 ${showDropdown ? "rotate-180" : ""}`} />
              </span>
            </div>
            {showDropdown && (
              <div className="absolute left-0 top-full z-[9999] mt-2 bg-white dark:bg-gray-800 dark:text-white w-[180px] shadow-lg rounded-lg">
                <ul>
                  {DropDownlinks.map((data) => (
                    <li
                      key={data.id}
                      className="trending-dropdown flex px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-300"
                      onClick={() => { window.location.href = data.link; setShowDropdown(false); }}
                    >
                      <span className="w-full text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">
                        {data.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
