import React from "react";

interface Props {
  items: string[];
  repeat?: number;
  reverse?: boolean;
  divider?: string;
}

const InfiniteText: React.FC<Props> = ({
  items,
  repeat = 5,
  reverse,
  divider = "•",
}) => {
  const repeatedItems = Array.from({ length: repeat }, () => items).flat();

  return (
    <div className="w-full  bg-white flex items-center justify-center">
      <div className="w-full bg-secondary-bg text-lg py-2 border-y-2 flex overflow-hidden select-none gap-[20px] font-righteous hover:animate-none">
        <ul
          className={`flex  items-center shrink-0 gap-[20px]  min-w-full text-secondary ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        >
          {repeatedItems.map((text, index) => (
            <li
              key={index}
              className="font-bold text-7xl flex items-center gap-8"
            >
              <span>{text}</span>
              <span>{divider}</span>
            </li>
          ))}
        </ul>
        <ul
          aria-hidden="true"
          className={`flex  items-center shrink-0  gap-[20px] min-w-full text-secondary ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        >
          {repeatedItems.map((text, index) => (
            <li
              key={index}
              className="font-bold text-7xl flex items-center gap-8"
            >
              <span>{text}</span>
              <span>{divider}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteText;
