import "./Reviews.css";
import leftArrow from "../../assets/left.png";
import rightArrow from "../../assets/right.png";
import stars from "../../assets/stars.png";

const Reviews = () => {
  return (
    <div>
      <div className="reviewContainer">
        <h2 className="reviewsTitle">NOT SURE WHETHER TO CHOOSE US?</h2>
        <h3 className="reviewsSub">READ REVIEWS ABOUT OUR COMPANY</h3>
        <div className="fullReview">
          <img className="arrows" src={leftArrow} />
          <div className="reviewBox">
            <div className="reviewName">
              <div className="photoCircle"></div>
              <div className="nameRight">
                <h3 className="fullName">MIKE JOHNSON</h3>
                <img src={stars} />
              </div>
            </div>
            <p className="opinion">
              "CARS EXCEEDED ALL MY EXPECTATIONS! FANTASTIC SERVICE AND
              TOP-NOTCH PRODUCTS. HIGHLY RECOMMENDED!"
            </p>
          </div>
          <img className="arrows" src={rightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
