import Slider from "react-slick";
import img from "@assets/images/cbum.webp";

export function CustomCarrusel() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="CustomCarrousel-container">
      <div>
        <img src={img} width={300} style={{ margin: "auto" }} />
      </div>
      <div>
        <img src={img} width={300} style={{ margin: "auto" }} />
      </div>
      <div>
        <img src={img} width={300} style={{ margin: "auto" }} />
      </div>
    </Slider>
  );
}
