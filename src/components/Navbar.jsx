import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="McDonald's Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-yellow-500">
            McDonald's
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-800 font-medium">
          <a href="#ourstory" className="hover:text-yellow-500 transition">Our Story</a>
          <a href="#menu" className="hover:text-yellow-500 transition">Menu</a>
          <a href="#deals" className="hover:text-yellow-500 transition">Deals</a>
          <a href="#app" className="hover:text-yellow-500 transition">App</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 my-1 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Order Button (desktop only) */}
        <button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold transition">
          Order Now
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col items-center gap-4 py-4 font-medium text-gray-800">
              <a
                href="#ourstory"
                className="hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                Our Story
              </a>
              <a
                href="#menu"
                className="hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#deals"
                className="hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                Deals
              </a>
              <a
                href="#app"
                className="hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                App
              </a>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold transition">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
