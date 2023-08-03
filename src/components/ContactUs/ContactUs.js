import "./ContactUs.css";
import contactCar from "../../assets/contactphoto.png";

const ContactUs = () => {
  return (
    <div className="contactSection">
      <div className="contactContainer">
        <h2 className="contactTitle">CONTACT US</h2>
        <div className="contactTextbox">
          <h3 className="contactAddress">
            1234 AVENUE OF INNOVATION,CITYVILLE, MOTOPIA STATE,AUTOTOPIA COUNTRY
          </h3>
          <h3 className="contactPhone">
            CUSTOMER SERVICE: +1 (800) 123-4567 CORPORATE OFFICE: +1 (555)
            987-6543
          </h3>
          <h3 className="contactEmail">
            CUSTOMER SERVICE: INFO@CARSCORPORATION.COM BUSINESS INQUIRIES:
            SALES@CARSCORPORATION.COM
          </h3>
        </div>

        <img className="contactPhoto" src={contactCar} alt="Contact Car" />
      </div>
    </div>
  );
};

export default ContactUs;
