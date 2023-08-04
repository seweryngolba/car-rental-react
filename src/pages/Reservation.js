import "./Reservation.css";

const Reservation = () => {
  return (
    <div className="reservationContainer">
      <div className="topReservation">
        <h1>Car Reservation</h1>
        <div className="processBars">
          <div className="process active"></div>
          <div className="process"></div>
          <div className="process"></div>
        </div>
      </div>
      {/* <Form />
      <StepTwo />
      <FinalStep /> */}
    </div>
  );
};

export default Reservation;
