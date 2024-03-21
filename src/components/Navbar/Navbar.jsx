import { useState } from 'react';
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

function Menu() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // Define an array of objects containing link data
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'La société', href: '#La_société' },
    { label: 'Help', href: '#Help' },
  ];

  return (
    <div className="bg-white fixed top-0 w-full z-10">
      <nav className="px-10 mx-auto py-2 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <h1>
            <img className="w-16 sm:w-24" src={Logo} alt="" />
          </h1>
          <button className="h-6 w-6 md:hidden" id="menu" onClick={toggleLinks}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className={`${showLinks ? 'flex' : 'hidden'} flex-col items-center md:flex md:flex-row md:space-x-6`} id="links">
          {/* Map through the links array and generate anchor elements */}
          {links.map((link, index) => (
            <a key={index} href={link.href} className="text-xl hover:text-pink-500">
              {link.label}
            </a>
          ))}
          <Link to="/Contact">
            <button className="p-[2px] relative bounce" >
              <div className="absolute inset-0 bg-gradient-to-r  from-lime-400 to-lime-200 rounded-lg" />
              <div className="px-8 py-2   bg-lime-400 hover:text-indigo-800 rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent">
                contactez-nous
              </div>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
