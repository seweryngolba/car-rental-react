import AboutUs from "../components/AboutUs/AboutUs";
import CompanyPros from "../components/CompanyPros/CompanyPros";
import ContactUs from "../components/ContactUs/ContactUs";
import Hero from "../components/Hero/Hero";
import OurCars from "../components/OurCars/OurCars";
import Reviews from "../components/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <CompanyPros />
      <OurCars />
      <AboutUs />
      <Reviews />
      <ContactUs />
    </>
  );
};

export default Home;
