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

import image0 from "../assets/images/image0.png";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2a.jpg";
import image3 from "../assets/images/2b.jpg";
import image4 from "../assets/images/3a.jpg";
import image5 from "../assets/images/3b.jpg";
import image6 from "../assets/images/4a.jpg";
import image7 from "../assets/images/4b.jpg";
import image8 from "../assets/images/4c.jpg";
import image9 from "../assets/images/5. effort of student.jpg";
import image10 from "../assets/images/6.jpg";
// init Swiper:

const ImageSlider = (props) => {
  const { images } = props;

  const service1Ref = useRef();
  const service2Ref = useRef();
  const service3Ref = useRef();
  const service4Ref = useRef();
  const service5Ref = useRef();
  const service6Ref = useRef();

  useLayoutEffect(() => {
    const tl6 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: service1Ref.current,
          start: `top top`,
          end: `bottom top`,
          scrub: 1,
          // scroller: `#root`,
          // markers: true,
          pin: true,
        },
      },
      service1Ref.current
    );

    tl6.to("#page1>h3", {
      top: `-100%`,
    });

    tl6.scrollTrigger.refresh();

    return () => tl6.revert();
  }, [service1Ref]);

  useLayoutEffect(() => {
    const tl6 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: service2Ref.current,
          start: `top top`,
          end: `bottom top`,
          scrub: 1,
          scroller: `#root`,
          markers: true,
          pin: true,
        },
      },
      service2Ref.current
    );

    tl6.to("#page2>h1", {
      top: `-50%`,
    });

    tl6.scrollTrigger.refresh();

    return () => tl6.revert();
  }, [service2Ref]);
  useLayoutEffect(() => {
    const tl6 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: service3Ref.current,
          start: `top top`,
          end: `bottom top`,
          scrub: 1,
          // scroller: `#root`,
          // markers: true,
          pin: true,
        },
      },
      service3Ref.current
    );

    tl6.to("#page3>h1", {
      top: `-50%`,
    });

    tl6.scrollTrigger.refresh();

    return () => tl6.revert();
  }, [service3Ref]);

  useLayoutEffect(() => {
    const tl6 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: service4Ref.current,
          start: `top top`,
          end: `bottom top`,
          scrub: 1,
          // scroller: `#root`,
          // markers: true,
          pin: true,
        },
      },
      service4Ref.current
    );

    tl6.to("#page4>h1", {
      top: `-50%`,
    });

    tl6.scrollTrigger.refresh();

    return () => tl6.revert();
  }, [service4Ref]);

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
        <SwiperSlide className="swiper-slide  ">
          <div id="page1" className="" ref={service1Ref}>
            <img
              src={image0}
              alt=""
              className="hidden min-h-[104vh] md:block min-w-[100vw]"
            />
            <h3 className=" absolute top-[50%]  text-2xl font-semibold  p-3 left-[30%] bg-black bg-opacity-25 ">
              The playful, light and happening <br /> vibe on the campus"
            </h3>
          </div>

          {/* <h1 className="absolute top-[20%] text-black">{img.text}</h1> */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide relative ">
          <img
            src={image1}
            alt=""
            className="hidden min-h-[104vh] md:block min-w-[100vw]"
          />
          {/* <h1 className="absolute top-[20%] text-black">{img.text}</h1> */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide relative ">
          <img
            src={image2}
            alt=""
            className="hidden min-h-[104vh] md:block min-w-[100vw]"
          />
          {/* <h1 className="absolute top-[20%] text-black">{img.text}</h1> */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide relative ">
          <img
            src={image3}
            alt=""
            className="hidden min-h-[104vh] md:block min-w-[100vw]"
          />
          {/* <h1 className="absolute top-[20%] text-black">{img.text}</h1> */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide relative ">
          <img
            src={image4}
            alt=""
            className="hidden min-h-[104vh] md:block min-w-[100vw]"
          />
          {/* <h1 className="absolute top-[20%] text-black">{img.text}</h1> */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide relative ">
          <img
            src={image5}
            alt=""
            className="hidden min-h-[104vh] md:block min-w-[100vw]"
          />
          {/* <h1 className="absolute top-[20%] text-black">{img.text}</h1> */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide relative ">
          <img
            src={image6}
            alt=""
            className="hidden min-h-[104vh] md:block min-w-[100vw]"
          />
          {/* <h1 className="absolute top-[20%] text-black">{img.text}</h1> */}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ImageSlider;
