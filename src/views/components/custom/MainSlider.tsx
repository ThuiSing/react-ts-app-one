import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const MainSlider = () => {
  return (
    <div className="md:px-24">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            className="w-full"
            src="https://icms-image.slatic.net/images/ims-web/d73740d0-cd9f-46db-857a-aab8f329275c.jpg_1200x1200.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/af9662ab-d5e9-41c7-8ea8-bd56f4ea4e25.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/1e655540-ab0b-4e8b-8569-0f03f56c1dff.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/4650ec85-3e15-41f7-ab98-4db1519be798.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
