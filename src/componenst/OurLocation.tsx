import Studio from "../assets/images/studio.jpg";
const OurLocation = () => {
  return (
    <div className="h-full w-full bg-white p-10">
      <div className="flex flex-col items-center  max-w-7xl w-full mx-auto">
        <h1 className="font-bold text-6xl font-righteous text-center">
          Our Location
        </h1>
        <p className="text-lg text-gray-600 mt-2 w-full lg:w-1/2 text-center">
          Discover our branches across the Philippines. Visit us in Manila,
          Cebu, or Davao for your next tattoo experience!
        </p>
        <div className="mt-4 space-y-4 flex flex-col md:flex-row  md:space-y-0 md:justify-center">
          <div className="flex flex-col items-center mx-auto w-full md:w-2/7 group">
            <div className="overflow-hidden rounded-t-lg shadow-lg">
              <img
                src={Studio}
                alt=""
                className="w-full group-hover:scale-110 transition duration-300 object-cover"
              />
            </div>
            <div className="bg-secondary p-5 rounded-b-lg shadow-lg w-full text-white relative text-center">
              <h2 className="font-semibold text-3xl font-righteous text-center">
                Manila
              </h2>
              <p>123 Rizal Avenue, Manila, Philippines</p>
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                <span className="font-righteous text-lg font-semibold translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-in-out">
                  View Details
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mx-auto w-full md:w-2/7 group">
            <div className="overflow-hidden rounded-t-lg shadow-lg">
              <img
                src={Studio}
                alt=""
                className="w-full group-hover:scale-110 transition duration-300 object-cover"
              />
            </div>
            <div className="bg-secondary p-5 rounded-b-lg shadow-lg w-full text-white relative text-center">
              <h2 className="font-semibold text-3xl font-righteous text-center">
                Cebu
              </h2>
              <p>456 Osmeña Blvd, Cebu City, Philippines</p>
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                <span className="font-righteous text-lg font-semibold translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-in-out">
                  View Details
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mx-auto w-full md:w-2/7  group">
            <div className="overflow-hidden rounded-t-lg shadow-lg">
              <img
                src={Studio}
                alt=""
                className="w-full group-hover:scale-110 transition duration-300 object-cover"
              />
            </div>
            <div className="bg-secondary p-5 rounded-b-lg shadow-lg w-full text-white relative text-center">
              <h2 className="font-semibold text-3xl font-righteous">Davao</h2>
              <p>789 Roxas Avenue, Davao City, Philippines</p>
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                <span className="font-righteous text-lg font-semibold translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-in-out">
                  View Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
