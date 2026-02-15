import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { CarouselContainer, Image } from "./styled";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

function ImageCarousel() {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500,
                    disableOnInteraction: false
        }}
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide  key={index}>
            <Image src={src} alt={`Tema de festa ${index + 1}`}/>
          </SwiperSlide>
        ))}

      </Swiper>
    </CarouselContainer>
  );
}

export default ImageCarousel;
