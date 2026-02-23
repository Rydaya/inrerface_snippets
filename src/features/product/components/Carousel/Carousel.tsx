import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { CarouselProps } from "./Carousel.types";
import ProductCard from "../ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import styles from "./Carousel.module.css";

const Carousel: React.FC<CarouselProps> = ({ products, options }) => {
  if (!products) {
    return null;
  }

  const modules = [Navigation];
  const swiperProps: any = {
    spaceBetween: 16,
    slidesPerView: 4,
    navigation: true,
  };

  if (options?.pagination) {
    modules.push(Pagination);
    swiperProps.pagination = { clickable: true };
  }

  if (options?.scrollbar) {
    modules.push(Scrollbar);
    swiperProps.scrollbar = { draggable: true, hide: false };
  }

  if (options?.autoplay) {
    modules.push(Autoplay);
    swiperProps.autoplay = {
      delay: 2000,
      disableOnInteraction: false,
    };
    swiperProps.loop = true;
  }

  const swiperKey = `${options?.pagination}-${options?.scrollbar}-${options?.autoplay}`;

  return (
    <div>
      <Swiper
        key={swiperKey}
        className={styles.customSwiper}
        modules={modules}
        {...swiperProps}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
