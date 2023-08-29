import Slider from "react-slick";

export function CustomCarrusel({
  children,
  slidesToShow = 1,
  slidesToScroll = 1,
  dots = false,
  infinite = false,
  speed = 500,
  autoplay = false,
  autoplaySpeed = 3000,
}) {
  const settings = {
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    dots: dots,
    infinite: infinite,
    speed: speed,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
  };

  return (
    <Slider {...settings} className="CustomCarrousel-container">
      {children}
    </Slider>
  );
}
