import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl text-indigo-400">
            MyBrand
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#home"
                className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Close Icon (X)
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#services"
            className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
          <button className="w-full text-left bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-2 rounded-md text-base font-medium mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
