import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card/Card";
import { Video } from "../types";
import { Box, BoxProps, styled, useMediaQuery, useTheme } from "@mui/material";

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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SliderContainer>
      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        style={{ paddingRight: theme.spacing(4) }}
        breakpoints={{
          750: { spaceBetween: 30 },
          1020: { spaceBetween: 40 },
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
