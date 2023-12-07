import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigation } from "react-router-dom";
import { motion } from "framer-motion";
const navitems = ["Home", "Contacts", "About Us", "Leader Board"];

const divVariants = {
  rest: {
    position: "relative",
    borderBottom: "2px solid  transparent", // Set the initial border style
    transition: {
      duration: 0.3,
      delay: 0.1,
      ease: "ease-out",
    },
  },
  hover: {
    position: "relative",
    borderBottom: "2px solid #ff0000", // Set the border style on hover
  },
};

const MenuButton = ({ item, className = "" }) => {
  return (
    <>
      <motion.div
        variants={divVariants}
        whileHover="hover"
        whileTap="rest"
        style={{
          position: "relative",
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        }}
        initial="rest"
      >
        <NavLink
          className={`${className} mx-10 text-xl uppercase`}
          to={`${item}`}
        >
          {item}
        </NavLink>
      </motion.div>
    </>
  );
};

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div className="navbar px-10 fixed z-10"
    initial={{ backgroundColor: 'transparent' }}
    animate={{ 
      backgroundColor: scrolling ? '#303031' : 'transparent' ,
      color: scrolling ? '#fff' : '#000' 
    }}
    transition={{ duration: 0.5 }}
    >
      <div className="navbar-start my-[-80px]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navitems.map((item) => {
              return (
                <MenuButton
                  className=" mx-10  text-2xl"
                  key={item}
                  item={item}
                />
              );
            })}
          </ul>
        </div>

        <MenuButton className="text-xl uppercase" item="Contestor"></MenuButton>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal w-full px-1">
          {navitems.map((item) => {
            return (
              <MenuButton
                className="uppercase text-2xl "
                key={item}
                item={item}
              />
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
