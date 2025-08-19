import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet, ScrollRestoration } from "react-router";
import type { Artist } from "./types/types";
import { ArtistContext } from "./context/ArtistContext";
import { ArtistData } from "./api/mockData";
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
