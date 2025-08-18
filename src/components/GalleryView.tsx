import React from "react";
import { IoMdClose } from "react-icons/io";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

interface Props {
  tattoos: {
    img: string;
    slug: string;
  }[];
  indexPhoto: number;
  setIndexPhoto: React.Dispatch<React.SetStateAction<number | null>>;
}

const GalleryView: React.FC<Props> = ({
  tattoos,
  indexPhoto,
  setIndexPhoto,
}) => {
  const handleNextPhoto = () => {
    setIndexPhoto((prev) =>
      prev !== null ? (prev < tattoos.length - 1 ? prev + 1 : 0) : null
    );
  };

  const handlePrevPhoto = () => {
    setIndexPhoto((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : tattoos.length - 1) : null
    );
  };

  const handleClosePhoto = () => {
    setIndexPhoto(null);
  };
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative h-full w-full flex items-center">
        {indexPhoto > 0 && (
          <IoIosArrowDropleftCircle
            className="absolute left-0 text-primary text-5xl m-5"
            onClick={handlePrevPhoto}
          />
        )}
        {indexPhoto < tattoos.length - 1 && (
          <IoIosArrowDroprightCircle
            className="absolute right-0 text-primary text-5xl m-5"
            onClick={handleNextPhoto}
          />
        )}

        <div className="mx-auto text-center">
          <img
            src={tattoos[indexPhoto].img}
            alt={tattoos[indexPhoto].slug}
            className="max-h-[90vh] rounded-lg"
          />
        </div>
        <IoMdClose
          className="absolute right-0 top-0 text-4xl m-5 text-white"
          onClick={handleClosePhoto}
        />
      </div>
    </div>
  );
};

export default GalleryView;
