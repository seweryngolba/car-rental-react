import { useEffect, useState } from "react";
import "./LastStep.css";

const LastStep = ({ formData }) => {
  const [showFullCircle, setShowFullCircle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullCircle(true);
    }, 3200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="lastContainer">
      <div
        id="animationCircle"
        className={`animationCircle ${showFullCircle ? "hidden" : ""}`}
      >
        <i className="fa-solid fa-car-side"></i>
      </div>
      <div
        id="fullCircle"
        className={`fullCircle ${showFullCircle ? "visible" : ""}`}
      >
        <i className="fa-solid fa-check"></i>
      </div>
      {showFullCircle && (
        <div className="sumBox">
          <h3 className="reservationSum">RESERVATION DONE</h3>
          {FormData && (
            <div className="reservationDetails">
              <p>Reservation for: {formData.fullName}</p>
              <p>Selected car: {formData.car}</p>
              <p>From: {new Date(formData.startDate).toDateString()}</p>
              <p>To: {new Date(formData.endDate).toDateString()}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LastStep;
