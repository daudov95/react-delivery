import React, { FC } from "react";
import { Navigation } from "swiper"; // Pagination, Scrollbar, A11y
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/img/main/slider/1.jpg";
import img2 from "../../../assets/img/main/slider/2.jpg";
import img3 from "../../../assets/img/main/slider/3.jpg";
import img4 from "../../../assets/img/main/slider/4.jpg";
import img5 from "../../../assets/img/main/slider/5.jpg";
import img6 from "../../../assets/img/main/slider/6.jpg";

import "swiper/css";
import "swiper/css/navigation";

interface SliderProps {}

const Slider: FC<SliderProps> = ({ children }) => {
  const prevRef = React.useRef<HTMLDivElement>(null);
  const nextRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="main-slider">
      <div ref={prevRef} className="swiper-button-prev">
        <svg
          width="14"
          height="22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m4.833 11 8.333-8.334L11.083.583.667 11l10.416 10.417 2.083-2.083L4.833 11Z"
            fill="#212121"
          />
        </svg>
      </div>
      <div ref={nextRef} className="swiper-button-next">
        <svg
          width="14"
          height="22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.167 11 .833 2.666 2.917.583 13.334 11 2.917 21.417.833 19.334 9.167 11Z"
            fill="#212121"
          />
        </svg>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        // onSlideChange={() => console.log("slide change")}
        modules={[Navigation]}
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevRef.current;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          // eslint-disable-next-line no-param-reassign
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide>
          <a href="#" className="main-slider__link">
            <img src={img} alt="Shop" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="main-slider__link">
            <img src={img2} alt="Shop" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="main-slider__link">
            <img src={img3} alt="Shop" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="main-slider__link">
            <img src={img4} alt="Shop" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="main-slider__link">
            <img src={img5} alt="Shop" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="main-slider__link">
            <img src={img6} alt="Shop" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="main-slider__link">
            <img src={img3} alt="Shop" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="main-slider__link">
            <img src={img4} alt="Shop" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
