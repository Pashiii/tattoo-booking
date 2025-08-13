import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

const navList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const [scrollY, setScrollY] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleShowNavBar = () => {
    setShowNav(!showNav);
  };
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 350) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  });

  return (
    <div
      className={`fixed w-full  p-5 text-white font-roboto ${
        scrollY ? "bg-black" : "bg-transparent"
      } transition-all duration-500 z-50`}
    >
      <MobileNav
        navList={navList}
        handleShowNavBar={handleShowNavBar}
        showNav={showNav}
      />

      <div className="flex justify-between items-center w-full container">
        <div className="font-bold text-2xl">LOGO</div>
        <div className="lg:flex items-center space-x-4 hidden">
          <ul className="flex space-x-6 font-medium">
            {navList.map((list, index) => (
              <li
                key={index}
                className="hover:text-amber-600 transition-colors duration-300"
              >
                <a>{list.name}</a>
              </li>
            ))}
          </ul>
          <button className="bg-[#ffcda2] text-secondary p-3 font-bold hover:bg-amber-700 hover:text-primary transition-colors duration-300">
            Book now
          </button>
          <div className="flex items-center justify-center gap-3 text-3xl ml-5 ">
            <FaFacebook className="hover:text-amber-700 transition-colors duration-300" />
            <FaInstagram className="hover:text-amber-700 transition-colors duration-300" />
            <FaTwitter className="hover:text-amber-700 transition-colors duration-300" />
          </div>
        </div>

        <GiHamburgerMenu
          className="text-3xl block lg:hidden"
          onClick={handleShowNavBar}
        />
      </div>
    </div>
  );
};

export default Nav;
