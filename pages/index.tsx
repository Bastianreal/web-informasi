import Navbar from "./navbar"
import Home from "./home"
import Location from "./location";
import About from "./about-us";
import Menu from "./menu";
import Footer from "./footer";
export default function Index() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Location />
      <Footer />
    </>
  );
}
