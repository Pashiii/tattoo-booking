import React from "react";

const NavList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const [scrollY, setScrollY] = React.useState(false);
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 350) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  });

  return (
    <div
      className={`fixed top-0 right-0 w-full flex justify-between items-center p-5 text-white ${
        scrollY ? "bg-black" : "bg-transparent"
      } transition-all duration-500`}
    >
      <div className="font-bold text-2xl">LOGO</div>
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-6 font-medium">
          {NavList.map((list, index) => (
            <li
              key={index}
              className="hover:text-amber-600 transition-colors duration-300"
            >
              <a>{list.name}</a>
            </li>
          ))}
        </ul>
        <button className="bg-amber-600 p-3 font-bold">Book now</button>
      </div>
    </div>
  );
};

export default Nav;
