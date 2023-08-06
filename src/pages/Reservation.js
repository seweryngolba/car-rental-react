import FormBox from "../components/FormBox/FormBox";
import { useState } from "react";
import LastStep from "../components/LastStep/LastStep";
import "./Reservation.css";
import Payment from "../components/Payment/Payment";

const Reservation = () => {
  const [formData, setFormData] = useState("");
  const [calculatedCost, setCalculatedCost] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setCalculatedCost(data.cost);
    setCurrentStep(2);
  };

  const handleStepBack = () => {
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    setCurrentStep(3);
  };

  return (
    <>
      <div className="reservationContainer">
        <div className="topReservation">
          <h1>Car Reservation</h1>
          <div className="processBars">
            <div
              className={`process ${currentStep === 1 ? "active" : ""}`}
            ></div>
            <div
              className={`process ${currentStep === 2 ? "active" : ""}`}
            ></div>
            <div
              className={`process ${currentStep === 3 ? "active" : ""}`}
            ></div>
          </div>
        </div>
      </div>
      {currentStep === 1 && <FormBox onFormSubmit={handleFormSubmit} />}
      {currentStep === 2 && (
        <Payment
          cost={calculatedCost}
          onBack={handleStepBack}
          onNext={handleNextStep}
        />
      )}
      {currentStep === 3 && <LastStep formData={formData} />}
    </>
  );
};

export default Reservation;
