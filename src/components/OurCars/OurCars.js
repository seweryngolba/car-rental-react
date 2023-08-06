import React, { useState, useEffect } from "react";
import "./OurCars.css";
import peoplePhoto from "../../assets/people.png";
import speedPhoto from "../../assets/speed.png";
import gasPhoto from "../../assets/gasoline.png";
import wheelPhoto from "../../assets/wheel.png";
import carsData from "../../data/carsData";

const OurCars = () => {
  const [activeCar, setActiveCar] = useState(carsData[0]);

  useEffect(() => {
    document.querySelector(".photoHighlight").classList.add("slideInAnimation");

    setTimeout(() => {
      document
        .querySelector(".photoHighlight")
        .classList.remove("slideInAnimation");
    }, 500);
  }, [activeCar]);

  const handleCarClick = (car) => {
    setActiveCar(car);
  };

  return (
    <div id="offer" className="offer">
      <h2 className="carsTitle">OUR CARS</h2>
      <div className="carsDisplay">
        {carsData.map((car) => (
          <div
            key={car.name}
            className={`carBox ${car === activeCar ? "active" : ""}`}
            onClick={() => handleCarClick(car)}
          >
            <h3 className="carName">{car.name}</h3>
            <img className="carPhoto" src={car.photo} alt={car.name} />
          </div>
        ))}
      </div>
      <div className="carHighlight">
        <img
          className="photoHighlight"
          src={activeCar.photo}
          alt={activeCar.name}
        />
        <div className="carSpecs">
          <h2 className="specsName">{activeCar.name}</h2>

          <div className="specsGrid">
            <div className="specsBox">{activeCar.year}</div>
            <div className="specsBox">
              <img src={peoplePhoto} alt="people" />
              {activeCar.capacity}
            </div>

            <div className="specsBox">
              <img src={speedPhoto} alt="speed" />
              {activeCar.power}
            </div>

            <div className="specsBox">
              <img src={gasPhoto} alt="gas" />
              {activeCar.fuel}
            </div>

            <div className="specsBox">
              <img src={wheelPhoto} alt="wheel" />
              {activeCar.transmission}
            </div>
            <div className="specsBox">{`from ` + activeCar.price + `$`}</div>
          </div>
          <a href="car-rental-react/#/rent" className="specsBtn">
            RENT
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurCars;
