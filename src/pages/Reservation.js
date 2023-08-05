import FormBox from "../components/FormBox/FormBox";
import { useState } from "react";
import LastStep from "../components/LastStep/LastStep";
import "./Reservation.css";

const Reservation = () => {
  const [formData, setFormData] = useState("");

  const handleFormSubmit = (data) => {
    setFormData(data);
  };
  return (
    <>
      <div className="reservationContainer">
        <div className="topReservation">
          <h1>Car Reservation</h1>
          <div className="processBars">
            <div className="process active"></div>
            <div className="process"></div>
            <div className="process"></div>
          </div>
        </div>
      </div>
      <FormBox onFormSubmit={handleFormSubmit} />
      <LastStep formData={formData} />
    </>
  );
};

export default Reservation;
