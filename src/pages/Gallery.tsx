import Header from "../assets/images/header2.jpg";
import img2 from "../assets/images/img1.jpg";
import img3 from "../assets/images/img3.jpg";
import GalleryView from "../components/GalleryView";
import { useState } from "react";

const Gallery = () => {
  const tattoos = [
    { img: img2, slug: "img1" },
    { img: img3, slug: "img2" },
    { img: img2, slug: "img3" },
    { img: img3, slug: "img4" },
    { img: img2, slug: "img5" },
  ];

  const [indexPhoto, setIndexPhoto] = useState<number | null>(null);

  const handleViewPhoto = (index: number) => {
    setIndexPhoto(index);
  };
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-120 bg-fixed "
        style={{
          backgroundImage: `url(${Header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50  w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-6xl font-righteous text-center text-white font-bold ">
            Our Tattoo's Gallery
          </h1>

          <div className="mt-5 space-x-4">
            <button className="p-5 text-white border-1 font-bold hover:bg-amber-700 hover:border-amber-700 transition-colors duration-300 ">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black h-full border-t-1 border-gray-50/70 text-white py-20">
        <h1
          className="text-center font-righteous font-bold text-5xl"
          data-aos="fade-up"
        >
          TATTOO PHOTOS
        </h1>
        <p
          className="text-center text-xl max-w-5xl w-full mx-auto mt-5"
          data-aos="fade-up"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum
          culpa perspiciatis dolores et dolore accusantium nemo voluptatum porro
          nostrum, fugit, fugiat ab illo sed id iusto in quisquam fuga.
        </p>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-5 py-20">
          {tattoos.map((tattoo, index) => (
            <div
              className="overflow-hidden rounded-full"
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <img
                src={tattoo.img}
                alt=""
                className="w-50 md:w-70 h-full object-cover hover:scale-110  duration-400 ease-in-out"
                onClick={() => handleViewPhoto(index)}
              />
            </div>
          ))}
        </div>
      </div>
      {indexPhoto !== null && (
        <GalleryView
          tattoos={tattoos}
          indexPhoto={indexPhoto}
          setIndexPhoto={setIndexPhoto}
        />
      )}
    </div>
  );
};

export default Gallery;
