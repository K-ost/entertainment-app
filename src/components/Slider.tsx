import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card/Card";
import { Video } from "../types";

interface ISlider<T> {
  list: T[];
}

const Slider = <T extends Video>({ list }: ISlider<T>) => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView="auto"
      className="slider_wrapper"
      breakpoints={{
        750: { spaceBetween: 30 },
        1020: { spaceBetween: 40 },
      }}
    >
      {list.map((el) => (
        <SwiperSlide className="slide" key={el.id}>
          <Card el={el} type="trend" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;