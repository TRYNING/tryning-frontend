import { TablaAnalytics } from "./TablaAnalytics";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
1;

export function CarruselAnalytics({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-5 mt ">
      <h2 className="text-center m-2 font-bold">Analytics</h2>
      <Slider {...settings}>
        {data.map((semana, i) => {
          return (
            <TablaAnalytics
              key={i}
              title={semana.title}
              ejercicios={semana.ejercicios}
            />
          );
        })}
        {/* Agrega más elementos div para más imágenes */}
      </Slider>
    </div>
  );
}
