import "./ReviewSlider.css";
import stars from "../../assets/stars.png";
import { reviewsData } from "../../data/revData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlider = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="fullReview">
      <Slider {...settings}>
        {reviewsData.map((item) => (
          <div className="reviewBox" key={item.id}>
            <div className="reviewName">
              <img
                src={require(`../../assets/${item.photo}`)}
                alt={item.title}
              />
              <div className="nameRight">
                <h3 className="fullName">{item.fullName}</h3>
                <img src={stars} alt="Stars" />
              </div>
            </div>
            <p className="opinion">{item.opinion}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
