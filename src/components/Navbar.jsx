import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNavbar = () => {
    setToggleMenu(true);
  };

  useEffect(() => {
    if (toggleMenu) {
      const timer = setTimeout(() => {
        setToggleMenu(false);
      }, 1000); // mobile nav closes in 1 sec

      return () => clearTimeout(timer);
    }
  }, [toggleMenu]);

  return (
    <div className="flex justify-between px-5 py-2">
      
      {/* Brand */}
      <Link className="link font-serif font-bold atag" to="/sreejith">
        SREEJITH S V
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li><Link className="atag link" to="*">HOME</Link></li>
          <li><Link className="atag link" to="/skills">SKILLS</Link></li>
          <li><Link className="atag link" to="/education">EDUCATION</Link></li>
          <li><Link className="atag link" to="/project">PROJECT</Link></li>
          <li><Link className="atag link" to="/about">ABOUT</Link></li>
          <li><Link className="atag link" to="/contact">CONTACT</Link></li>
          <li><Link className="atag link" to="/resume">RESUME</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="block md:hidden mobile-nav bg-gray-600">
          <ul className="flex flex-col bg-black">
            <li className="py-2 text-center"><Link className="atag-nav" to="*">HOME</Link></li>
            <li className="py-2 text-center"><Link className="atag-nav" to="/skills">SKILLS</Link></li>
            <li className="py-2 text-center"><Link className="atag-nav" to="/education">EDUCATION</Link></li>
            <li className="py-2 text-center"><Link className="atag-nav" to="/project">PROJECT</Link></li>
            <li className="py-2 text-center"><Link className="atag-nav" to="/about">ABOUT</Link></li>
            <li className="py-2 text-center"><Link className="atag-nav" to="/contact">CONTACT</Link></li>
            <li className="py-2 text-center"><Link className="atag-nav" to="/resume">RESUME</Link></li>
          </ul>
        </nav>
      )}

      {/* Mobile Icon */}
      <button onClick={toggleNavbar} className="md:hidden block text-white text-2xl">
        <FaBars />
      </button>

    </div>
  );
};

export default Navbar;
