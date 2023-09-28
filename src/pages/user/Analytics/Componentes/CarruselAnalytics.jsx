import { TablaAnalytics } from './TablaAnalytics';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';1

export function  CarruselAnalytics() {


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
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
        <div className='mb-5 mt '>
          <h2 className='text-center m-2 font-bold'>Analytics</h2>
          <Slider {...settings}>
            <div>
              <TablaAnalytics
              title="SEMANA 1"
              ejercicio1="Sentadilla"
              ejercicio2="Press Banca"
              
              />
            </div>
            <div>
            <TablaAnalytics
            title="SEMANA 2"
            ejercicio1="Sentadilla"
            ejercicio2="Press Banca"/>
            
            </div>
            <div>
            <TablaAnalytics
            title="SEMANA 3"
            ejercicio1="Sentadilla"
            ejercicio2="Press Banca"/>
            </div>
            {/* Agrega más elementos div para más imágenes */}
          </Slider>
        </div>
      );
    };

