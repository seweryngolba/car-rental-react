import "./CompanyPros.css";
import planeImage from "../../assets/plane.png";
import moneyImage from "../../assets/money.png";
import supportImage from "../../assets/support.png";
import loyalImage from "../../assets/loyal.png";
const CompanyPros = () => {
  return (
    <div className="companyPros">
      <div className="prosGrid">
        <div className="prosBox">
          <img src={planeImage} alt="Plane" />
          <h2 className="prosName">AIRPORT PICKUP</h2>
        </div>
        <div className="prosBox">
          <img src={moneyImage} alt="Money" />
          <h2 className="prosName">BEST PRICES</h2>
        </div>
        <div className="prosBox">
          <img src={supportImage} alt="Support" />
          <h2 className="prosName">24/7 SUPPORT</h2>
        </div>
        <div className="prosBox">
          <img src={loyalImage} alt="Loyalty" />
          <h2 className="prosName">LOYALTY PROGRAM</h2>
        </div>
      </div>
    </div>
  );
};

export default CompanyPros;
