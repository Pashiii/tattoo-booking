import { useEffect, useState } from "react";
import Header from "../assets/images/header.jpg";
import tattooImage1 from "../assets/images/img3.jpg";
import tattooImage2 from "../assets/images/img2.jpg";
import {
  FaPenFancy,
  FaShieldAlt,
  FaSmile,
  FaStar,
  FaUserCheck,
} from "react-icons/fa";
import OurLocation from "../componenst/OurLocation";
import Service from "../componenst/Service";
const Home = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-full bg-black font-roboto">
      <div
        className="w-full h-screen bg-fixed"
        style={{
          backgroundImage: `url(${Header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50  w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-center text-5xl text-white font-extrabold uppercase font-righteous">
            Welcome to Our Tattoo Shop
          </h1>
          <h1 className="text-2xl text-white mt-2 text-center">
            Your journey to self-expression starts here
          </h1>
          <div className="mt-5 space-x-4">
            <button className="p-5 text-white border-1 font-bold hover:bg-amber-700 hover:border-amber-700 transition-colors duration-300 ">
              BOOK NOW
            </button>
            <button className="p-5 text-white border-1 font-bold hover:bg-amber-700 hover:border-amber-700 transition-colors duration-300 ">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black border-t-1 border-gray-600 w-full h-[1800px] sm:h-[1200px] md:h-[1800px] lg:h-full lg:flex flex-col justify-center items-center p-10 space-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full">
          <div className="text-white space-y-5 mx-10">
            <h1 className="text-2xl md:text-4xl font-bold font-righteous">
              What We Offer
            </h1>
            <p className="text-md md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ab sunt velit ratione minima consequatur exercitationem
              nisi error maxime commodi. Cum cumque tenetur illum odit quas
              maxime minima qui facilis?
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-2xl w-full">
              <div className="flex items-center space-x-4 bg-secondary p-4 rounded">
                <FaUserCheck className="text-secondary-bg text-md md:text-2xl" />
                <span className="text-md md:text-lg text-secondary-bg">
                  Experienced and passionate tattoo artists
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-secondary p-4 rounded">
                <FaShieldAlt className="text-secondary-bg text-md md:text-2xl" />
                <span className="text-md md:text-lg text-secondary-bg">
                  Clean, safe, and welcoming environment
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-secondary p-4 rounded">
                <FaPenFancy className="text-secondary-bg text-md md:text-2xl" />
                <span className="text-md md:text-lg text-secondary-bg">
                  Custom designs tailored to your ideas
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-secondary p-4 rounded">
                <FaStar className="text-secondary-bg text-md md:text-2xl" />
                <span className="text-md md:text-lg text-secondary-bg">
                  High-quality inks and equipment
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-[#201E1F] p-4 rounded">
                <FaSmile className="text-secondary-bg text-md md:text-2xl" />
                <span className="text-md md:text-lg text-secondary-bg">
                  Friendly customer service and aftercare support
                </span>
              </div>
            </div>
            <button className="text-secondary bg-secondary-bg p-4 md:p-6 font-semibold text-xl hover:bg-amber-700 hover:text-primary hover:p-7 transition-all  duration-300">
              Learn more about us
            </button>
          </div>

          <div className="flex  justify-center w-full">
            <div className="relative w-80 ">
              <img
                src={tattooImage1}
                alt=""
                className="w-40 h-60 sm:w-60 sm:h-80 lg:h-100 lg:w-80 "
              />
              <img
                src={tattooImage2}
                alt=""
                style={{
                  transform: `translateY(${offset * 0.03}px)`,
                }}
                className="w-40 h-60 sm:w-60 sm:h-80 md:w-56 md:h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-100 object-cover  absolute right-5 top-15 sm:right-[-20%] sm:top-30 lg:top-50 lg:right-[-50%] transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
      <Service />
      <OurLocation />
    </div>
  );
};

export default Home;
