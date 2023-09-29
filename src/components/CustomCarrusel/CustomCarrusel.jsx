import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function CustomCarrusel({ children, settings, className }) {
  return (
    <Slider
      {...settings}
      className={`w-full rounded-md overflow-hidden} ${className}`}
    >
      {children}
    </Slider>
  );
}
