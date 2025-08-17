import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegCopyright,
} from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <div className="bg-black w-full  text-secondary-bg px-20 pb-10">
      <div className="grid grid-cols-5 gap-5 py-10">
        <div className="col-span-2 w-2/3">
          <h1 className="text-3xl font-righteous w-full">LOGO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            perspiciatis esse voluptate ipsa culpa, eius maiores placeat
            repellendus debitis quisquam in dicta veniam velit corrupti nobis
            facilis fuga delectus maxime.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold font-righteous">Menu</h1>
          <ul className="flex flex-col gap-2 justify-center p-2 text-md text-secondary-bg/70">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold font-righteous">Service</h1>
          <ul className="flex flex-col gap-2 justify-center p-2 text-md text-secondary-bg/70">
            <li>Tattoo</li>
            <li>Piercing</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold font-righteous">Location</h1>
          <ul className="flex flex-col gap-2 justify-center p-2 text-md text-secondary-bg/70">
            <li>Manila</li>
            <li>Cebu</li>
            <li>Davao</li>
          </ul>
        </div>
      </div>
      <hr className="border-t-1 text-secondary-bg/50" />
      <div className="flex justify-between ">
        <div className="flex items-center justify-center gap-2 text-lg">
          <FaRegCopyright />
          Feliciano
        </div>
        <div>
          <h1 className="text-xl font-righteous px-2 py-5">Follow us</h1>
          <div className="flex justify-center items-center gap-3 text-3xl">
            <FaFacebookF className="bg-secondary-bg text-secondary rounded-full p-3 w-12 h-12" />
            <FaInstagram className="bg-secondary-bg text-secondary rounded-full p-3 w-12 h-12" />
            <FaTwitter className="bg-secondary-bg text-secondary rounded-full p-3 w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
