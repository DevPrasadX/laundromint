import React, { useEffect, useLayoutEffect, useRef } from "react";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// init Swiper:

const ImageSlider = (props) => {
  const { images } = props;

  return (
    <section className=" relative bg-gray-100 max-h-[104vh] max-w-[100vw] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Mousewheel, Autoplay]}
        effect="fade"
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: true,
        // }}
        speed={1000}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        autoHeight={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        onReachEnd={() => {}}
        touchReleaseOnEdges={true}
      >
        {images?.map((img, idx) => (
          <SwiperSlide key={idx} className="swiper-slide relative ">
            <img
              src={img.src}
              alt=""
              className="hidden min-h-[104vh] md:block min-w-[100vw]"
            />
            {/* <h1 className="absolute top-[20%] text-black">{img.text}</h1> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;
