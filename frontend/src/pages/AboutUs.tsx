import Header from "../assets/images/header.jpg";
import img from "../assets/images/header2.jpg";
import img2 from "../assets/images/img2.jpg";

const AboutUs = () => {
  return (
    <div className="h-full w-full ">
      <div
        className="w-full h-120 bg-fixed "
        style={{
          backgroundImage: `url(${Header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50  w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-center text-5xl text-white font-extrabold uppercase font-righteous">
            About Us
          </h1>
          <h1 className="text-2xl text-white mt-2 text-center max-w-5xl w-full mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            error voluptatum pariatur sunt iusto nobis nam nulla voluptas. Nemo
            iure molestias itaque. Quam eum nemo perferendis ducimus ad, rerum
            vel.
          </h1>
        </div>
      </div>
      <div className="bg-white h-full w-full grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto py-10 gap-10 px-5">
        <div
          className="w-full space-y-5 flex flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <h1 className="text-6xl font-bold font-righteous text-center">
            Our Mission
          </h1>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            delectus aliquam aperiam earum non. Ea corporis ducimus error unde
            accusamus quas sint dolore sunt cum reiciendis vitae quis, amet
            pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos delectus aliquam aperiam earum non. Ea corporis ducimus error
            unde accusamus quas sint dolore sunt cum reiciendis vitae quis, amet
            pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos delectus aliquam aperiam earum non. Ea corporis ducimus error
            unde accusamus quas sint dolore sunt cum reiciendis vitae quis, amet
            pariatur.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <img src={img} alt="" className="w-full" />
        </div>
      </div>
      <div className="bg-white h-full w-full grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto py-10 gap-10 px-5">
        <div data-aos="fade-up">
          <img src={img} alt="" className="w-full" />
        </div>
        <div
          className="w-full space-y-5 flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-6xl font-bold font-righteous text-center">
            Our Vission
          </h1>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            delectus aliquam aperiam earum non. Ea corporis ducimus error unde
            accusamus quas sint dolore sunt cum reiciendis vitae quis, amet
            pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos delectus aliquam aperiam earum non. Ea corporis ducimus error
            unde accusamus quas sint dolore sunt cum reiciendis vitae quis, amet
            pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos delectus aliquam aperiam earum non. Ea corporis ducimus error
            unde accusamus quas sint dolore sunt cum reiciendis vitae quis, amet
            pariatur.
          </p>
        </div>
      </div>
      <div className="bg-black text-white p-10">
        <div className=" max-w-7xl w-full mx-auto">
          <h1
            className="text-center font-righteous font-bold text-5xl mt-10"
            data-aos="fade-up"
          >
            TATTOO FOUNDER'S
          </h1>
          <div className="my-20 flex flex-col md:flex-row  md:space-y-0 md:justify-center gap-10">
            <div
              className="overflow-hidden w-full md:w-1/4 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={img2}
                alt=""
                className="w-full group-hover:scale-110 transition duration-300 object-cover"
              />
              <div className="absolute inset-0 bg-black/80 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                <span className="font-righteous text-lg font-semibold translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-in-out">
                  FULL NAME
                </span>
              </div>
            </div>

            <div
              className="overflow-hidden w-full md:w-1/4 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={img2}
                alt=""
                className="w-full group-hover:scale-110 transition duration-300 object-cover"
              />
              <div className="absolute inset-0 bg-black/80  bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                <span className="font-righteous text-lg font-semibold translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-in-out">
                  FULL NAME
                </span>
              </div>
            </div>
            <div
              className="overflow-hidden  w-full md:w-1/4 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={img2}
                alt=""
                className="w-full group-hover:scale-110 transition duration-300 object-cover"
              />
              <div className="absolute inset-0 bg-black/80  bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                <span className="font-righteous text-lg font-semibold translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-in-out">
                  FULL NAME
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
