import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

interface Props {
  navList: {
    name: string;
    path: string;
  }[];
  handleShowNavBar: () => void;
  showNav: boolean;
}
const MobileNav: React.FC<Props> = ({ navList, handleShowNavBar, showNav }) => {
  return (
    <div
      className={`fixed top-0 left-0 bg-black/60 h-full w-full font-roboto transition-opacity duration-500 lg:hidden ${
        showNav
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 right-0 bg-white w-[65%] h-full transition-transform duration-500 ease-in-out overflow-auto ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <IoMdClose
            className="text-black text-4xl m-5 hover:rotate-90 duration-300"
            onClick={handleShowNavBar}
          />
          <div className="flex items-center justify-center gap-3 text-3xl mx-10">
            <FaFacebook className="text-black hover:text-amber-700 transition-colors duration-300" />
            <FaInstagram className="text-black hover:text-amber-700 transition-colors duration-300" />
            <FaTwitter className="text-black hover:text-amber-700 transition-colors duration-300" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <ul className="flex flex-col items-center justify-center space-y-4 font-bold text-2xl">
            {navList.map((list, index) => (
              <li
                key={index}
                className="text-secondary hover:text-amber-600 transition-colors duration-300"
              >
                <Link to={list.path} onClick={handleShowNavBar}>
                  <a>{list.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/login" onClick={handleShowNavBar}>
            <button
              type="button"
              className="bg-[#ffcda2] text-secondary p-3 px-10 font-bold hover:bg-amber-700 hover:text-primary transition-colors duration-300"
            >
              Book now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
