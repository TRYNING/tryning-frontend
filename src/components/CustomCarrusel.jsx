import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function CustomCarrusel({ children, settings, className }) {
  const sliderRef = useRef();

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Utiliza la función slickNext para avanzar
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Utiliza la función slickPrev para retroceder
    }
  };

  return (
    <div>
      <div className="w-full flex justify-between mt-4">
        <button onClick={goToPrev}>
          <svg
            className="text-[var(--color-primary)] w-8 h-8 rotate-180"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
            />
          </svg>
        </button>
        <button onClick={goToNext}>
          <svg
            className="text-[var(--color-primary)] w-8 h-8 "
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
            />
          </svg>
        </button>
      </div>
      <Slider
        {...settings}
        ref={sliderRef}
        className={`w-full rounded-md overflow-hidden ${className}`}
      >
        {children}
      </Slider>
    </div>
  );
}
