import "./Reviews.css";
import ReviewSlider from "../ReviewSlider/ReviewSlider";

const Reviews = () => {
  return (
    <div>
      <div className="reviewContainer">
        <h2 className="reviewsTitle">NOT SURE WHETHER TO CHOOSE US?</h2>
        <h3 className="reviewsSub">READ REVIEWS ABOUT OUR COMPANY</h3>
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Reviews;
