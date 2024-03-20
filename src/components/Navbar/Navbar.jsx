import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Menu = [
  {
    id: 1,
    name: "Accueil",
    link: "/",
  },
  {
    id: 2,
    name: "Services",
    link: "#services",
  },
  {
    id: 3,
    name: "La société",
    link: "#La_société",
  },
  {
    id: 4,
    name: "Help",
    link: "#Help",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="shadow-xl bg-white fixed w-full top-0 z-10">
      <div className="container py-1 sm:py-2">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-xl sm:text-3xl flex gap-1">
              <img src={Logo} alt="Logo" className="w-16 sm:w-24" />
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                />
              </svg>
            </button>
          </div>

          <div className={`w-full flex-grow sm:flex justify-end items-center ${isOpen ? "block" : "hidden"}`}>

            <ul className="flex gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-4 px-4 hover:text-primary duration-300"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="p-[2px] relative bounce">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-lime-200 rounded-lg" />
              <div className="px-8 py-2  bg-lime-400 hover:text-indigo-800 rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent">
                <Link to="/Contact">Contactez-nous</Link>
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
