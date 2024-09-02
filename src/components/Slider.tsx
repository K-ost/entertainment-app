import { Swiper, SwiperSlide } from "swiper/react";
import { Box, BoxProps, styled, useTheme } from "@mui/material";
import useMediaTools from "../hooks/useMediaTools";
import "swiper/css";
import Card from "./Card/Card";
import { Video } from "../types";

type SliderProps<T> = {
  list: T[];
};

const SliderContainer = styled(Box)<BoxProps>(({ theme }) => ({
  marginRight: `-${theme.spacing(4)}`,
  marginBottom: theme.spacing(5),
}));

const Slider = <T extends Video>(props: SliderProps<T>): JSX.Element => {
  const { list } = props;
  const theme = useTheme();
  const { isMobile } = useMediaTools();

  return (
    <SliderContainer>
      <Swiper
        spaceBetween={theme.spacing(2)}
        slidesPerView="auto"
        style={{ paddingRight: theme.spacing(4) }}
        breakpoints={{
          750: { spaceBetween: theme.spacing(4) },
          1020: { spaceBetween: theme.spacing(5) },
        }}
      >
        {list.map((el) => (
          <SwiperSlide
            key={el.id}
            style={{ width: isMobile ? "240px" : "470px" }}
          >
            <Card el={el} type="trend" />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
