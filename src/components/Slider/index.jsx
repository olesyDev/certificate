import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Slide } from "./Slide";
import { slides } from "../../utils/slides";
import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";

export const Slider = ({ onSelect }) => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        modules={[Navigation]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
          },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Slide src={item} onSelect={onSelect} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
