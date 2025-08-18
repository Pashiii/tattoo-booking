import { useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router";
import SmoothScrollRestoration from "./components/SmoothScrollRestoration";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Nav />
      <SmoothScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
