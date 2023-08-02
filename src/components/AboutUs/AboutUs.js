import "./AboutUs.css";
import topCar from "../../assets/topcar.png";

const AboutUs = () => {
  return (
    <div className="aboutSection">
      <div className="allAbout">
        <div className="aboutTextbox">
          <h2 className="aboutTitle">ABOUT US</h2>
          <p className="aboutText">
            "AT CARS. WE ARE PASSIONATE ABOUT PROVIDING TOP-NOTCH CAR RENTAL
            SERVICES TO OUR VALUED CUSTOMERS. WITH A WIDE SELECTION OF
            WELL-MAINTAINED VEHICLES TO CHOOSE FROM, WE STRIVE TO CATER TO ALL
            YOUR TRAVEL NEEDS. OUR DEDICATED TEAM IS COMMITTED TO ENSURING A
            SEAMLESS AND ENJOYABLE RENTAL EXPERIENCE, ALLOWING YOU TO FOCUS ON
            MAKING UNFORGETTABLE MEMORIES. CHOOSE CARS. FOR YOUR NEXT JOURNEY
            AND LET US DRIVE YOU TOWARDS AN EXTRAORDINARY ADVENTURE."
          </p>
        </div>
        <img className="aboutPhoto" src={topCar} alt="Car top view" />
      </div>
    </div>
  );
};

export default AboutUs;
