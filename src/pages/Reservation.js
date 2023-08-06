import FormBox from "../components/FormBox/FormBox";
import { useState } from "react";
import LastStep from "../components/LastStep/LastStep";
import "./Reservation.css";
import Payment from "../components/Payment/Payment";

const Reservation = () => {
  const [formData, setFormData] = useState("");
  const [calculatedCost, setCalculatedCost] = useState(0);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setCalculatedCost(data.cost);
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
      <Payment cost={calculatedCost} />
      <LastStep formData={formData} />
    </>
  );
};

export default Reservation;
