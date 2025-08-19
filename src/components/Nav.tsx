import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { useArtist } from "../context/ArtistContext";

const navList = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery", children: [] },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const [scrollY, setScrollY] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const { data } = useArtist();

  const handleShowNavBar = () => {
    setShowNav(!showNav);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full  p-5 text-white font-roboto ${
        scrollY ? "bg-black" : ""
      } transition-all duration-500 z-50`}
    >
      <MobileNav
        navList={navList}
        handleShowNavBar={handleShowNavBar}
        showNav={showNav}
        data={data}
      />

      <div className="flex justify-between items-center w-full container">
        <Link to="/">
          <div className="font-bold text-2xl">LOGO</div>
        </Link>
        <div className="lg:flex items-center space-x-4 hidden">
          <ul className="flex space-x-6 ">
            {navList.map((list, index) => (
              <li key={index} className=" font-semibold group relative">
                <Link
                  to={list.path}
                  className="hover:text-amber-600 transition-colors duration-300"
                >
                  {list.name}
                </Link>
                {list.children && (
                  <div className="absolute hidden group-hover:block w-50 space-y-2 py-4">
                    {data.map((artist, index) => (
                      <p
                        key={index}
                        className="hover:text-amber-600 transition-colors duration-300 cursor-pointer"
                      >
                        <Link
                          to={`/artist/${artist.name
                            .split(" ")
                            .join("-")
                            .toLowerCase()}`}
                        >
                          {artist.name}
                        </Link>
                      </p>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Link to="/login">
            <button
              type="button"
              className="bg-[#ffcda2] text-secondary p-3 font-bold hover:bg-amber-700 hover:text-primary transition-colors duration-300 "
            >
              Book now
            </button>
          </Link>

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
