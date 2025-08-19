import { useParams } from "react-router";
import Header from "../assets/images/header2.jpg";
import img2 from "../assets/images/img1.jpg";
import img3 from "../assets/images/img3.jpg";

import React, { Suspense, useState } from "react";
import { useArtist } from "../context/ArtistContext";
import ErrorPage from "../components/ErrorPage";

const GalleryView = React.lazy(() => import("../components/GalleryView"));

const Artist = () => {
  const tattoos = [
    { img: img2, slug: "img1" },
    { img: img3, slug: "img2" },
    { img: img2, slug: "img3" },
    { img: img3, slug: "img4" },
    { img: img2, slug: "img5" },
  ];

  const { slug } = useParams();
  const { data } = useArtist();

  const [indexPhoto, setIndexPhoto] = useState<number | null>(null);
  const findArtist = data.find(
    (e) => e.name.split(" ").join("-").toLowerCase() == slug
  );

  const handleViewPhoto = (index: number) => {
    setIndexPhoto(index);
  };
  if (!findArtist) return <ErrorPage />;
  return (
    <div className="w-full h-full">
      <Suspense key={slug} fallback={<div>Loading...</div>}>
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
              {slug?.toUpperCase().split("-").join(" ")}
            </h1>
          </div>
        </div>
        <div className="bg-black h-full border-t-1 border-gray-50/70 text-white py-20">
          <h1
            className="text-center font-righteous font-bold text-5xl"
            data-aos="fade-up"
          >
            {slug?.toUpperCase().split("-").join(" ")} PHOTOS
          </h1>
          <p
            className="text-center text-xl max-w-5xl w-full mx-auto mt-5"
            data-aos="fade-up"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum
            culpa perspiciatis dolores et dolore accusantium nemo voluptatum
            porro nostrum, fugit, fugiat ab illo sed id iusto in quisquam fuga.
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
                  className="w-30 sm:w-50 md:w-70 h-full object-cover hover:scale-110  duration-400 ease-in-out"
                  onClick={() => handleViewPhoto(index)}
                />
              </div>
            ))}
          </div>
        </div>
        {indexPhoto !== null && (
          <Suspense fallback={<div>Loading...</div>}>
            <GalleryView
              tattoos={tattoos}
              indexPhoto={indexPhoto}
              setIndexPhoto={setIndexPhoto}
            />
          </Suspense>
        )}
      </Suspense>
    </div>
  );
};

export default Artist;
