import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./Payment.css";
import { useState } from "react";

const Payment = ({ cost, onBack, onNext }) => {
  const [cvc, setCVC] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "number":
        setNumber(value);
        break;
      case "expiry":
        setExpiry(value);
        break;
      case "cvc":
        setCVC(value);
        break;
      case "name":
        setName(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="cardBox" id="PaymentForm">
      <p>Total price: ${cost}</p>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <form className="cardForm">
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          maxLength={16}
        />
        <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          maxLength={5}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          maxLength={3}
        />
      </form>
      <div className="stepBtns">
        <button className="paymentBtn" onClick={onBack}>
          BACK
        </button>
        <button className="paymentBtn" onClick={onNext}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Payment;
