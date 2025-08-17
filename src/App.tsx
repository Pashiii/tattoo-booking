import { useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 320,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Nav />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
