import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Card from './Card/Card'
import { CardType } from '../types'

interface ISlider<T> {
  list: T[]
}

const Slider = <T extends CardType>({ list }: ISlider<T>) => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView="auto"
      className="slider_wrapper"
      breakpoints={{
        750: { spaceBetween: 30 },
        1020: { spaceBetween: 40 }
      }}
    >
      {list.map(el => (
        <SwiperSlide className="slide" key={el._id}>
          <Card el={el} type="trend" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
