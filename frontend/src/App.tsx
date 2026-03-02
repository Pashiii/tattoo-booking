import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import type { Artist } from "./types/types";
import { ArtistData } from "./api/mockData";
import { ArtistContext } from "./context/ArtistContext";
import { Outlet, ScrollRestoration } from "react-router-dom";
const App = () => {
  const [data, setData] = useState<Artist[]>([]);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    const getData = () => {
      const res = ArtistData;
      setData(res);
    };
    getData();
  }, []);

  return (
    <>
      <ArtistContext.Provider value={{ data, setData }}>
        <Nav />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </ArtistContext.Provider>
    </>
  );
};

export default App;
