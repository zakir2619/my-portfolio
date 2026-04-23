import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="text-2xl font-bold text-blue-600">Portfolio</div>

          
          <ul className="hidden md:flex space-x-8">
            <li><NavLink to="/" className="text-white hover:text-blue-600 font-medium">Home</NavLink></li>
            <li><NavLink to="/services" className="text-white hover:text-blue-600 font-medium">Services</NavLink></li>
            <li><NavLink to="/team" className="text-white hover:text-blue-600 font-medium">Team</NavLink></li>
            <li><NavLink to="/pricing" className="text-white hover:text-blue-600 font-medium">Pricing</NavLink></li>
            <li><NavLink to="/faq" className="text-white hover:text-blue-600 font-medium">FAQ</NavLink></li>
            <li><NavLink to="/contact" className="text-white hover:text-blue-700 font-medium">Contact</NavLink></li>
          </ul>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white border-t p-4 space-y-4">
          <li><NavLink to="/my-portfolio" onClick={() => setIsOpen(false)} className="block text-gray-700">Home</NavLink></li>
          <li><NavLink to="/services" onClick={() => setIsOpen(false)} className="block text-gray-700">Services</NavLink></li>
          <li><NavLink to="/team" onClick={() => setIsOpen(false)} className="block text-gray-700">Team</NavLink></li>
          <li><NavLink to="/pricing" onClick={() => setIsOpen(false)} className="block text-gray-700">Pricing</NavLink></li>
          <li><NavLink to="/faq" onClick={() => setIsOpen(false)} className="block text-gray-700">FAQ</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700">Contact</NavLink></li>
        </ul>
      )}
    </nav>
  );
};
export default Header;