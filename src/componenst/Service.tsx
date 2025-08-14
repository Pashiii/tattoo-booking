import img from "../assets/images/img3.jpg";
import { PiEarBold } from "react-icons/pi";
import { LuPenTool } from "react-icons/lu";

const Service = () => {
  return (
    <div className="h-full w-full p-5 py-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full mx-auto">
        <img src={img} alt="" width={500} />
        <div className="text-white space-y-5 m-10  w-full">
          <h1 className="text-6xl font-bold font-righteous">Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            aut reprehenderit architecto molestias labore repellendus ea
            consectetur sit asperiores laboriosam nam sapiente expedita iste ab,
            excepturi quam quia placeat omnis!
          </p>
          <div className="grid grid-cols-2 gap-6 max-w-2xl w-full">
            <div className="flex flex-col items-center space-y-4  p-4 rounded border-white border-1">
              <LuPenTool className="text-4xl" />
              <h1 className="font-righteous font-bold text-xl">TATTOO</h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                voluptates nobis quae tempora voluptatem modi alias
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4  p-4 rounded border-white border-1">
              <PiEarBold className="text-4xl" />
              <h1 className="font-righteous font-bold text-xl">PIERCING</h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                voluptates nobis quae tempora voluptatem modi alias
              </p>
            </div>
          </div>
          <button className="w-full text-secondary bg-secondary-bg p-4  md:p-4 font-semibold text-xl hover:bg-amber-700 hover:text-primary hover:p-7 transition-all  duration-300">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
