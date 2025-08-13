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
const Home = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-screen bg-black">
      <div
        className="w-full h-screen bg-fixed"
        style={{
          backgroundImage: `url(${Header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50  w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white font-bold uppercase">
            Welcome to Our Tattoo Shop
          </h1>
          <h1 className="text-2xl text-white mt-2">
            Your journey to self-expression starts here
          </h1>
          <div className="mt-5 space-x-4">
            <button className="p-5 text-white border-1 font-bold">
              BOOK NOW
            </button>
            <button className="p-5 text-white border-1 font-bold">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black border-t-1 border-gray-600 w-full h-[1000px] flex flex-col justify-center items-center p-10 space-y-5">
        <div className="grid grid-cols-2">
          <div className="text-white space-y-5">
            <h1 className="text-4xl font-bold">Our Services</h1>
            <p className="text-lg">
              We offer a wide range of tattoo styles and services to suit your
              needs. From traditional to modern designs, our skilled artists are
              here to bring your vision to life.
            </p>
            <div>
              <p className="text-lg">
                Whether you're looking for a small piece or a full sleeve, we
                have the expertise to create stunning tattoos that you'll be
                proud to wear.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
              <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded">
                <FaUserCheck className="text-amber-600 text-2xl" />
                <span className="text-lg text-gray-200">
                  Experienced and passionate tattoo artists
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded">
                <FaShieldAlt className="text-amber-600 text-2xl" />
                <span className="text-lg text-gray-200">
                  Clean, safe, and welcoming environment
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded">
                <FaPenFancy className="text-amber-600 text-2xl" />
                <span className="text-lg text-gray-200">
                  Custom designs tailored to your ideas
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded">
                <FaStar className="text-amber-600 text-2xl" />
                <span className="text-lg text-gray-200">
                  High-quality inks and equipment
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded">
                <FaSmile className="text-amber-600 text-2xl" />
                <span className="text-lg text-gray-200">
                  Friendly customer service and aftercare support
                </span>
              </div>
            </div>
            <button className="text-white bg-amber-700 p-6 font-bold text-xl">
              Learn more about us
            </button>
          </div>
          <div className="relative flex mx-20">
            <img src={tattooImage1} alt="" className="h-100 w-80" />
            <img
              src={tattooImage2}
              alt=""
              style={{
                transform: `translateY(${offset * 0.02}px)`,
              }}
              className="h-100 w-80 absolute top-50 left-40 transition-transform duration-500 ease-out "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
