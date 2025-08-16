import { useEffect, useState } from "react";
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
import ArtistCarousel from "../componenst/ArtistCarousel";
import InfiniteText from "../componenst/InfiniteText";
import Hero from "../componenst/Hero";
const Home = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-full bg-black font-roboto">
      <Hero />
      <div className="bg-black border-t-1 border-gray-600 w-full h-full lg:flex flex-col justify-center items-center p-10 py-25 space-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full">
          <div className="text-white space-y-5 sm:mx-10">
            <h1 className="text-2xl md:text-4xl font-bold font-righteous">
              What We Offer
            </h1>
            <p className="text-md md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ab sunt velit ratione minima consequatur exercitationem
              nisi error maxime commodi. Cum cumque tenetur illum odit quas
              maxime minima qui facilis?
            </p>

            <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2  max-xl:grid-cols-1 xl:grid-cols-2 gap-6 max-w-2xl w-full">
              <div className="flex items-center space-x-4 bg-secondary p-4 rounded">
                <FaUserCheck className="text-secondary-bg text-md md:text-2xl xl:text-3xl" />
                <span className="text-md md:text-lg text-secondary-bg">
                  Experienced and passionate tattoo artists
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-secondary p-4 rounded">
                <FaShieldAlt className="text-secondary-bg text-md md:text-2xl xl:text-3xl" />
                <span className="text-md md:text-lg text-secondary-bg">
                  Clean, safe, and welcoming environment
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-secondary p-4 rounded">
                <FaPenFancy className="text-secondary-bg text-md md:text-2xl xl:text-3xl" />
                <span className="text-md md:text-lg text-secondary-bg">
                  Custom designs tailored to your ideas
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-secondary p-4 rounded">
                <FaStar className="text-secondary-bg text-md md:text-2xl xl:text-3xl" />
                <span className="text-md md:text-lg text-secondary-bg">
                  High-quality inks and equipment
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-[#201E1F] p-4 rounded">
                <FaSmile className="text-secondary-bg text-md md:text-2xl xl:text-3xl" />
                <span className="text-md md:text-lg text-secondary-bg">
                  Friendly customer service and aftercare support
                </span>
              </div>
            </div>
            <button className="text-secondary bg-secondary-bg p-4 md:p-6 font-semibold text-xl hover:bg-amber-700 hover:text-primary hover:p-7 transition-all  duration-300">
              Learn more about us
            </button>
          </div>

          <div className="flex  justify-center w-full mb-30 lg:mb-20">
            <div className="relative w-80 ">
              <img
                src={tattooImage1}
                alt=""
                className="w-40 h-60 sm:w-60 sm:h-80 lg:h-80 lg:w-56 xl:w-80 xl:h-100 "
              />
              <img
                src={tattooImage2}
                alt=""
                style={{
                  transform: `translateY(${offset * 0.03}px)`,
                }}
                className="w-40 h-60 sm:w-60 sm:h-80 lg:w-56 lg:h-80 xl:w-80 xl:h-100 object-cover  absolute right-5 top-15 sm:right-[-20%] sm:top-30 xl:top-30 xl:right-[-50%] transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
      <Service />
      <OurLocation />
      <InfiniteText items={["TATTOO STUDIO"]} />
      <InfiniteText items={["TITLE"]} reverse repeat={10} />
      <ArtistCarousel />
    </div>
  );
};

export default Home;
