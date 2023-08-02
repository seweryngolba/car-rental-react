import "./OurCars.css";
import audiPhoto from "../../assets/audir8.png";
import kiaPhoto from "../../assets/kiastinger.png";
import bmwPhoto from "../../assets/bmw3.png";
import teslaPhoto from "../../assets/tesla3.png";
import peoplePhoto from "../../assets/people.png";
import speedPhoto from "../../assets/speed.png";
import gasPhoto from "../../assets/gasoline.png";
import wheelPhoto from "../../assets/wheel.png";

const OurCars = () => {
  return (
    <div className="offer">
      <h2 className="carsTitle">OUR CARS</h2>
      <div className="carsDisplay">
        <div className="carBox active">
          <h3 className="carName">AUDI R8</h3>
          <img className="audiPhoto" src={audiPhoto} alt="Audi R8" />
        </div>
        <div className="carBox">
          <h3 className="carName">STINGER</h3>
          <img className="carPhoto" src={kiaPhoto} alt="Audi R8" />
        </div>
        <div className="carBox">
          <h3 className="carName">BMW M3</h3>
          <img className="carPhoto" src={bmwPhoto} alt="Audi R8" />
        </div>
        <div className="carBox">
          <h3 className="carName">TESLA</h3>
          <img className="teslaPhoto" src={teslaPhoto} alt="Audi R8" />
        </div>
      </div>
      <div className="carHighlight">
        <img className="photoHighlight" src={audiPhoto} alt="Audi R8" />
        <div className="carSpecs">
          <h2 className="specsName">AUDI R8</h2>
          <div className="specsGrid">
            <div className="specsBox">2018</div>
            <div className="specsBox">
              <img src={peoplePhoto} alt="people" />5 People
            </div>
            <div className="specsBox">
              <img src={speedPhoto} alt="speed" />
              240 HP
            </div>
            <div className="specsBox">
              <img src={gasPhoto} alt="gas" />
              Gasoline
            </div>
            <div className="specsBox">
              <img src={wheelPhoto} alt="wheel" />
              Automatic
            </div>
            <div className="specsBox">from 120$</div>
          </div>
          <button className="specsBtn">RENT</button>
        </div>
      </div>
    </div>
  );
};

export default OurCars;
