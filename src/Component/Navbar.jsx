import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.png";
import React from "react";

const navItems = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Certificate", to: "certificate" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-3 max-w-10xl mx-auto">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Pawan Rathee Logo"
            className="h-[100px] w-[350px] object-contain"  // Custom width and height for logo
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium md:gap-10">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-indigo-600 font-semibold"
                className="cursor-pointer hover:text-indigo-600 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {/* Increase the size of the menu icon */}
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />} {/* Increased icon size */}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-indigo-600 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
