import React, { useState, useEffect, useRef } from "react";
import FeatureSection from "../components/FeatureSection";
import News from "../components/News";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useInView } from "react-intersection-observer";

import logo from "../assets/logo_white.svg";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Mousewheel } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Cookies from "../components/Cookies";

import RemoteVideo from "../assets/infinity/infinity_video.mp4";
import Decarbonize from "../ship-videos/iStock-1420272956_Decarbo.mp4";
import FuelPerformance from "../ship-videos/iStock-1215695584_Fuel Performance.mp4";
import ConditionMonitor from "../ship-videos/iStock-641350596_Condition Monitoring.mp4";
import MEPerformance from "../ship-videos/ME performance_v4.mp4";
import VoyagePerformance from "../ship-videos/SSH_Voyage performance.mp4";
import smartship1 from "/smartship1.png";
import smartship2 from "/smartship2.png";
// init Swiper:

const Home = () => {
  const homeBannerRef = useRef();
  const navLogo = useRef();
  const service1Ref = useRef();
  const service2Ref = useRef();
  const service3Ref = useRef();
  const service4Ref = useRef();
  const service5Ref = useRef();
  const service6Ref = useRef();
  const [isNavLogoVisible, setIsNavLogoVisible] = useState(false);
  // useLayoutEffect(() => {
  //     const swiper = new Swiper('.swiper', {
  //         // configure Swiper to use modules
  //         modules: [Navigation, Pagination],
  //         direction: "vertical",
  //         slidesPerView: 1,
  //         spaceBetween: 30,
  //         mousewheel: true
  //     });
  // })

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx1 = gsap.context(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: service1Ref.current,
          start: `top top`,
          end: `bottom top`,
          scrub: 1,
          // scroller: `#root`,
          // markers: true,
          pin: true,
        },
      });

      // tl1.to("section#service__1 > h1", {
      //     top: "-50%"
      // })

      tl1.to(service1Ref.current, {
        scale: 0.95,
      });

      tl1.scrollTrigger.refresh();
    }, service1Ref.current);

    return () => ctx1.revert();
  }, [service1Ref]);

  useLayoutEffect(() => {
    const ctx2 = gsap.context(() => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: service2Ref.current,
          start: `top top`,
          end: `bottom top`,
          scrub: 1,
          // scroller: `#root`,
          // markers: true,
          pin: true,
        },
      });

      // tl2.to("section#service__2 > h1", {
      //     top: "-50%"
      // })

      tl2.to(service2Ref.current, {
        scale: 0.95,
      });

      tl2.scrollTrigger.refresh();
    }, service2Ref.current);

    return () => ctx2.revert();
  }, [service2Ref]);

  useLayoutEffect(() => {
    const ctx3 = gsap.context(() => {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: service3Ref.current,
          start: `top top`,
          end: `bottom top`,
          scrub: 1,
          // scroller: `#root`,
          // markers: true,
          pin: true,
        },
      });

      // tl3.to("section#service__3 > h1", {
      //     top: "-50%"
      // })

      tl3.to(service3Ref.current, {
        scale: 0.95,
      });

      tl3.scrollTrigger.refresh();
    }, service3Ref.current);

    return () => ctx3.revert();
  }, [service3Ref]);

  useLayoutEffect(() => {
    const ctx4 = gsap.context(() => {
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: service4Ref.current,
          start: `top top`,
          end: `bottom top`,
          scrub: 1,
          // scroller: `#root`,
          // markers: true,
          pin: true,
        },
      });

      // tl4.to("section#service__4 > h1", {
      //     top: "-50%"
      // })

      tl4.to(service4Ref.current, {
        scale: 0.95,
      });

      tl4.scrollTrigger.refresh();
    }, service4Ref.current);

    return () => ctx4.revert();
  }, [service4Ref]);

  useLayoutEffect(() => {
    const ctx5 = gsap.context(() => {
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: service5Ref.current,
          start: `top top`,
          end: `bottom top`,
          scrub: 1,
          // scroller: `#root`,
          // markers: true,
          pin: true,
        },
      });

      // tl5.to("section#service__5 > h1", {
      //     top: "-50%"
      // })

      tl5.to(service5Ref.current, {
        scale: 0.95,
      });

      tl5.scrollTrigger.refresh();
    }, service5Ref.current);

    return () => ctx5.revert();
  }, [service5Ref]);

  useLayoutEffect(() => {
    const ctx6 = gsap.context(() => {
      const tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: service6Ref.current,
          start: `top top`,
          end: `bottom top`,
          scrub: 1,
          // scroller: `#root`,
          // markers: true,
          pin: true,
        },
      });

      // tl6.to("section#service__6 > h1", {
      //     top: "-50%"
      // })

      tl6.to(service6Ref.current, {
        scale: 0.95,
      });

      tl6.scrollTrigger.refresh();
    }, service6Ref.current);

    return () => ctx6.revert();
  }, [service6Ref]);

  const handleNavLogo = (index) => {
    if (index > 0) {
      setIsNavLogoVisible(true);
      return;
    }
    setIsNavLogoVisible(false);
  };

  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 0 means as soon as even 1px is visible, 1 means the entire element should be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  // const [swiper, setSwiper] = useState(null);
  // const [videoPlayed, setVideoPlayed] = useState(false);

  // useEffect(() => {
  //   if (swiper && swiper.activeIndex === 0 && !videoPlayed) {
  //     gsap.fromTo(
  //       '.swiper-slide video',
  //       { opacity: 0 },
  //       {
  //         opacity: 1,
  //         duration: 1, // Adjust the duration as needed
  //         onStart: () => {
  //           // Play the video
  //           document.querySelectorAll('.swiper-slide video').forEach((video) => {
  //             video.play();
  //           });
  //           setVideoPlayed(true);
  //         },
  //       }
  //     );
  //   }
  // }, [swiper, videoPlayed]);
  const [swiper, setSwiper] = useState(null);

  const ref = useRef(null); // Define ref here
  const [inView, setInView] = useState(false);
  const handleSlideChanges = () => {
    const activeIndex = swiper.activeIndex;
    const videoSlideIndex = 2; // Index of the slide containing the video (assuming it's slide 3)

    if (activeIndex === videoSlideIndex) {
      // Start playing the video
      const videos = document.querySelectorAll(".swiper-slide video");

      videos.forEach((video) => {
        video.currentTime = 0;
        const timeoutId = setTimeout(() => {
          video.play();
        }, 1000);
      });
    } else {
      // // Pause the video if it's playing
      // const videos = document.querySelectorAll('.swiper-slide video');
      // videos.forEach(video => {
      //     video.pause();
      // });
    }
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
    setIsVisible(false);
  }, []); // Run this effect only once

  const [showContent, setShowContent] = useState(true);

  useEffect(() => {}, []);

  const handleSlideChange = () => {
    // Reset videoPlayed when changing slides
    setVideoPlayed(false);
  };
  const [played, setPlayed] = useState(false);

  const handleVideoClick = () => {
    if (!played) {
      // Set the played state to true and play the video
      setPlayed(true);

      // Your code to play the video
      // For example, you can use the ref to access the video element and call play()
      // videoRef.current.play();
    }
  };

  const [isSectionVisible, setIsSectionVisible] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSectionVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.8, // Adjust the threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const [isSectionsVisible, setIsSectionsVisible] = useState(true);
  const sectionRefs = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSectionsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.9, // Adjust the threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const videoRef1 = useRef(null); // Ref for the first video
  const videoRef2 = useRef(null); // Ref for the second video
  const [videoPlayed, setVideoPlayed] = useState(false);

  useEffect(() => {
    // Check if the video has been played before by checking local storage
    const videoPlayedBefore = localStorage.getItem("videoPlayed");

    // If the video has not been played before, play it
    if (!videoPlayedBefore) {
      console.log("no");
      if (videoRef1.current && videoRef2.current) {
        videoRef1.current.play();
        videoRef2.current.play();
      }
      setVideoPlayed(true);

      // Store in local storage that the video has been played
      localStorage.setItem("videoPlayed", "true");
      console.log("yes");
    } else {
      // If the video has been played before, you can handle it here, such as pausing it or hiding it
      // For example, you can pause the videos:
      if (videoRef1.current && videoRef2.current) {
        videoRef1.current.pause();
        videoRef2.current.pause();
      }
    }
  }, []);

  return (
    <div>
      <Cookies />
      <Navbar isNavLogoVisible={isNavLogoVisible} />
      <div className="bg-black">
        <section
          ref={sectionRef}
          className={`duration-300 ${
            isSectionVisible
              ? "transition-opacity opacity-100 text-black"
              : "opacity-0"
          } xs:transition-opacity xs:opacity-100 xs:text-black`}
        >
          <Navbar isNavLogoVisible={isNavLogoVisible} />
          <Swiper
            onSlideChangeTransitionEnd={handleSlideChanges}
            allowSlidePrev={false}
            className="mySwiper bg-white-600"
            modules={[Navigation, Pagination, EffectFade, Mousewheel]}
            effect="fade"
            autoplay={{
              delay: 2100,
              disableOnInteraction: true,
            }}
            speed={1000}
            direction="vertical"
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            onSlideChange={(swiper) => {
              handleNavLogo(swiper.activeIndex);
              handleSlideChanges(swiper);
            }}
            onSwiper={(swiper) => setSwiper(swiper)}
            onReachEnd={() => {}}
            touchReleaseOnEdges={true}
          >
            <SwiperSlide className="swiper-slide relative sm:block">
              <img
                className="sm:hidden block"
                src="https://ik.imagekit.io/dfh1m6dw7/Ship/1%20(5)_tV3d-EajHn.png?updatedAt=1699297949090"
                alt=""
              />
              <img
                className="hidden sm:block "
                src="https://ik.imagekit.io/dfh1m6dw7/Ship/img_1_n77XNNU-m0.png?updatedAt=1698478215585"
                alt=""
              />
              <div
                id="content__1"
                className="hidden absolute top-[15%] left-1/2 -translate-x-1/2 sm:flex flex-col w-full max-w-[960px] sm:flex-row p-6 gap-12 z-[100]"
              >
                <div id="content__1__img">
                  <img
                    className="h-[84px] object-contain mx-auto sm:mx-0"
                    src={logo}
                    alt=""
                  />
                </div>
                <div
                  id="content__1__text"
                  className="space-y-2 max-w-2xl text-center sm:text-left"
                >
                  <h3
                    id="content__1__heading"
                    className="text-[28px] font-semibold text-orange-500"
                  >
                    Digital Platform For Global Maritime
                  </h3>
                  <p
                    id="content__1__description"
                    className="text-base text-white/90"
                  >
                    All in One Platform for Fleet Performance Optimization,
                    Decarbonization, Condition & Health Monitoring, Performance
                    Diagnostics, Voyage planning, Weather Routing
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide relative">
              <img
                className="sm:hidden"
                src="https://ik.imagekit.io/dfh1m6dw7/Ship/1%20(4)_boCxdTr1n-.png?updatedAt=1699297949085"
                alt=""
              />
              <img
                className="hidden sm:block"
                src="https://ik.imagekit.io/dfh1m6dw7/Ship/img-1%20(1)_HIi_71daD8.png?updatedAt=1698831466617"
                alt=""
              />
              <div
                id="content__1"
                className="hidden sm:block absolute top-[15%] left-1/2 -translate-x-1/2 z-[100] text-center"
              >
                <h3
                  id="content__1__heading"
                  className="text-[40px] font-semibold text-orange-500"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Digital Platform For Global Maritime
                </h3>
              </div>
            </SwiperSlide>

            {/* Video  */}
            <SwiperSlide
              className="overflow-hidden swiper-slide relative relative flex justify-center items-center bg-black"
              ref={ref}
            >
              <img
                className="sm:hidden md:hidden block w-full h-auto"
                src="https://ik.imagekit.io/athxbsw68/Frame%2011.jpg?updatedAt=1707288999040"
                alt=""
                onLoad={() => {

                }}
              />
              <div
                id="content__2"
                className="sm:hidden md:hidden  block absolute top-[30%] right-[10%] left-[10%] z-50 -translate-y-1/2"
              >
                <h3 className="text-4xl font-semibold text-orange-600 text-center">
                  Digital Platform
                  <br />
                  For Global Maritime
                </h3>
              </div>

              <video
                className={`hidden sm:block mt-14 h-full items-center swiper-zoom-container bg-black`}
                muted
                playsInline
                ref={videoRef2}
                style={{ objectFit: "cover" }} // Set object fit to cover
                onLoadedData={(event) => {
                  event.target.currentTime = 0;
                }}
              >
                <source
                  // src="https://ik.imagekit.io/athxbsw68/Black_1_3%20-%20Trim%20-%20Trim.mp4?updatedAt=1707372504122"
                  src="https://ik.imagekit.io/amtbwsfcdk/Black_1v8_2.mp4?updatedAt=1708760155046"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>

            {/* <SwiperSlide className="lastSection swiper-slide relative">


                            <img
                                className="block mt-14 pr-24 pl-24 pb-4 h-full items-center sm:block swiper-zoom-container bg-black"
                                src="https://ik.imagekit.io/athxbsw68/Web%201920%20_%2032.png?updatedAt=1707941825505"
                                alt=""
                                style={{ objectFit: 'cover' }}
                            />
                        </SwiperSlide> */}

            <SwiperSlide className="swiper-slide relative"></SwiperSlide>
          </Swiper>
        </section>
      </div>
      <div className="bg-black">
        <section
          ref={sectionRefs}
          className={` bg-black-600 transition-opacity duration-1000 ${
            isSectionsVisible ? "opacity-0" : "opacity- 100"
          }`}
        >
          <div className="bg-white">
            <section
              ref={service1Ref}
              id="service__1"
              className="bg-white-600 relative h-[50vh] sm:h-screen w-full bg-white overflow-y-hidden mx-auto"
            >
              <video
                className="w-full h-full object-cover"
                src={RemoteVideo}
                autoPlay
                loop
                muted
              ></video>
            </section>

            
           
           
            {/* <News />

            <Footer /> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
