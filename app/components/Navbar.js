"use client"

import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img src="/Logo.png" alt="Logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-white text-sm font-bold font-serif">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/About" className="hover:text-yellow-500">How It Work</a></li>
            <li><a href="/Portfolio" className="hover:text-yellow-500">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact Us</a></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full bg-black text-white z-40 md:hidden px-8 py-10
          transform transition-transform duration-500
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="space-y-6 text-lg font-bold font-serif mt-16">
          <li><a href="/" className="block hover:text-yellow-500">Home</a></li>
          <li><a href="/About" className="block hover:text-yellow-500">How It Work</a></li>
          <li><a href="/Portfolio" className="block hover:text-yellow-500">Portfolio</a></li>
          <li><a href="/contact" className="block hover:text-yellow-500">Contact Us</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
