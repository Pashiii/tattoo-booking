import React, { useState } from "react";
import img2 from "../assets/images/img2.jpg";

interface Artist {
  img: string;
  name: string;
  position: string;
}
const ArtistCarousel: React.FC = () => {
  const artists = [
    { img: img2, name: "Full Name", position: "Tattoo & Piercing" },
    { img: img2, name: "Full Name", position: "Tattoo" },
    { img: img2, name: "Full Name", position: "Tattoo" },
    { img: img2, name: "Full Name", position: "Piercing" },
    { img: img2, name: "Full Name", position: "Tattoo & Piercing" },
  ];

  const [transform, setTransform] = useState<Record<number, string>>({});

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    setTransform((prev) => ({
      ...prev,
      [index]: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    }));
  };

  const handleMouseLeave = (index: number) => {
    setTransform((prev) => ({
      ...prev,
      [index]: "rotateX(0) rotateY(0)",
    }));
  };

  return (
    <div className="w-full mx-auto p-10">
      <h1 className="font-righteous text-white text-center text-6xl my-20">
        ARTIST
      </h1>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-10">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="relative transition-transform duration-200"
            style={{
              perspective: "1000px",
            }}
          >
            <div
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative cursor-pointer rounded-lg overflow-hidden transition-transform duration-200 ease-out"
              style={{
                transform: transform[index] || "rotateX(0) rotateY(0)",
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={artist.img}
                alt={artist.name}
                className="w-70 h-full object-cover"
              />
              <div className="absolute bottom-5 left-5">
                <p className="mt-3 text-xl font-righteous text-secondary-bg">
                  {artist.name}
                </p>
                <p className="text-lg text-secondary-bg">{artist.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistCarousel;
