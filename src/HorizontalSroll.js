import React, { useState, useEffect, useRef } from "react";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useInView } from "react-intersection-observer";

// import logo from "../assets/logo_white.svg";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Mousewheel } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import Cookies from "../components/Cookies";

import RemoteVideo from "./ship-videos/Remote_v2.mp4";
import Decarbonize from "./ship-videos/iStock-1420272956_Decarbo.mp4";
import FuelPerformance from "./ship-videos/iStock-1215695584_Fuel Performance.mp4";
import ConditionMonitor from "./ship-videos/iStock-641350596_Condition Monitoring.mp4";
import MEPerformance from "./ship-videos/ME performance_v4.mp4";
import VoyagePerformance from "./ship-videos/SSH_Voyage performance.mp4";
// import smartship1 from "/smartship1.png";
// import smartship2 from "/smartship2.png";

import image1 from "./assets/images/1.png";
import image2 from "./assets/images/2.png";
import image3 from "./assets/images/3.png";
import image4 from "./assets/images/4.png";
import image5 from "./assets/images/5.png";
import image6 from "./assets/images/6.png";
import image7 from "./assets/images/7.png";
import image8 from "./assets/images/8.png";
import image9 from "./assets/images/9.png";
import image10 from "./assets/images/10.png";

import infinity1 from "./assets/infinity/infinity.jpeg";
import infinityVideo from "./assets/infinity/infinity_video.mp4";

// init Swiper:

const HorizontalScroll = () => {
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
      <div className="">
        <section
          ref={sectionRef}
          className={`duration-300 ${
            isSectionVisible
              ? "transition-opacity opacity-100 text-black"
              : "opacity-0"
          } xs:transition-opacity xs:opacity-100 xs:text-black`}
        >
          <Swiper
            onSlideChangeTransitionEnd={handleSlideChanges}
            // allowSlidePrev={true}
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
              <img className="sm:hidden block" src={image1} alt="" />
              <img className="hidden sm:block " src={image1} alt="" />
              <div
                id="content__1"
                className="hidden absolute top-[65%]  left-1/2 -translate-x-1/2 sm:flex flex-col w-full max-w-[960px] sm:flex-row p-6 gap-12 z-[100]"
              >
                {/* <div id="content__1__img">
                  <img
                    className="h-[84px] object-contain mx-auto sm:mx-0"
                    src={logo}
                    alt=""
                  />
                </div> */}
                <div
                  id="content__1__text"
                  className="space-y-2 max-w-4xl text-center sm:text-left "
                >
                  <h3
                    id="content__1__heading"
                    className="text-[50px] font-semibold text-center  text-[#00C6C6] bg-gray-500 bg-opacity-15 p-3"
                  >
                    The playful, light and happening vibe on the campus
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide relative sm:block">
              <img className="sm:hidden block" src={image2} alt="" />
              <img className="hidden sm:block " src={image2} alt="" />
              <div
                id="content__1"
                className="hidden absolute top-[65%]  left-1/2 -translate-x-1/2 sm:flex flex-col w-full max-w-[960px] sm:flex-row p-6 gap-12 z-[100]"
              >
                {/* <div id="content__1__img">
                  <img
                    className="h-[84px] object-contain mx-auto sm:mx-0"
                    src={logo}
                    alt=""
                  />
                </div> */}
                <div
                  id="content__1__text"
                  className="space-y-2 max-w-4xl text-center sm:text-left "
                >
                  <h3
                    id="content__1__heading"
                    className="text-[50px] font-semibold text-center  text-[#00C6C6] bg-gray-500 bg-opacity-15 p-3"
                  >
                    Lectures and practical engagement of group of students
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide relative sm:block">
              <img className="sm:hidden block" src={image3} alt="" />
              <img className="hidden sm:block " src={image3} alt="" />
              <div
                id="content__1"
                className="hidden absolute top-[65%]  left-1/2 -translate-x-1/2 sm:flex flex-col w-full max-w-[960px] sm:flex-row p-6 gap-12 z-[100]"
              >
                {/* <div id="content__1__img">
                  <img
                    className="h-[84px] object-contain mx-auto sm:mx-0"
                    src={logo}
                    alt=""
                  />
                </div> */}
                <div
                  id="content__1__text"
                  className="space-y-2 max-w-4xl text-center sm:text-left "
                >
                  <h3
                    id="content__1__heading"
                    className="text-[50px] font-semibold text-center  text-[#00C6C6] bg-gray-500 bg-opacity-15 p-3"
                  >
                    Networking and event participation via recreational clubs
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide relative sm:block">
              <img className="sm:hidden block" src={image4} alt="" />
              <img className="hidden sm:block " src={image4} alt="" />
              <div
                id="content__1"
                className="hidden absolute top-[65%]  left-1/2 -translate-x-1/2 sm:flex flex-col w-full  sm:flex-row p-6 gap-12 z-[100]"
              >
                {/* <div id="content__1__img">
                  <img
                    className="h-[84px] object-contain mx-auto sm:mx-0"
                    src={logo}
                    alt=""
                  />
                </div> */}
                <div
                  id="content__1__text"
                  className="space-y-2  text-center sm:text-left "
                >
                  <h3
                    id="content__1__heading"
                    className="text-[50px] font-semibold text-center  text-[#00C6C6] bg-gray-500 bg-opacity-15 p-3"
                  >
                    Enjoying lunch with friends in canteen, reaching hostel and
                    relaxing and talking with roomies about the day
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide relative sm:block">
              <img className="sm:hidden block" src={image5} alt="" />
              <img className="hidden sm:block " src={image5} alt="" />
              <div
                id="content__1"
                className="hidden absolute top-[65%]  left-1/2 -translate-x-1/2 sm:flex flex-col w-full w-full sm:flex-row p-6 gap-12 z-[100]"
              >
                {/* <div id="content__1__img">
                  <img
                    className="h-[84px] object-contain mx-auto sm:mx-0"
                    src={logo}
                    alt=""
                  />
                </div> */}
                <div
                  id="content__1__text"
                  className="space-y-2  text-center sm:text-left "
                >
                  <h3
                    id="content__1__heading"
                    className="text-[50px] font-semibold text-center  text-[#00C6C6] bg-gray-500 bg-opacity-15 p-3"
                  >
                    The day to day efforts a student ideally takes towards
                    academic studies and revision
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide relative sm:block">
              <img className="sm:hidden block" src={image6} alt="" />
              <img className="hidden sm:block " src={image6} alt="" />
              <div
                id="content__1"
                className="hidden absolute top-[65%]  left-[50%] -translate-x-1/2 sm:flex flex-col w-full  mx-auto sm:flex-row p-2 gap-12 z-[100]"
              >
                {/* <div id="content__1__img">
                  <img
                    className="h-[84px] object-contain mx-auto sm:mx-0"
                    src={logo}
                    alt=""
                  />
                </div> */}
                <div
                  id="content__1__text"
                  className="space-y-2 w-full text-center sm:text-left "
                >
                  <h3
                    id="content__1__heading"
                    className="text-[50px] font-semibold text-center  text-[#00C6C6] bg-gray-500 bg-opacity-30 p-2"
                  >
                    And finally, the Inescapable cloth care management by
                    students in their room or through incomplete Laundromats
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className="overflow-hidden swiper-slide relative relative flex justify-center items-center bg-white"
              ref={ref}
            >
              <video
                className={`hidden sm:block mt-14 h-full items-center sm:block swiper-zoom-container h-[100vh] w-full `}
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
                  src={infinityVideo}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <img
                className="sm:hidden md:hidden block w-full h-auto"
                src={image3}
                alt=""
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
            </SwiperSlide>

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
              <h1 className="text-xl font-semibold lg:text-3xl text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
                Remote Maintainance
              </h1>
              <video
                className="w-full h-full object-cover"
                src={RemoteVideo}
                autoPlay
                loop
                muted
              ></video>
            </section>

            {/* <FeatureSection
              className="bg-white"
              service="Remote Fleet Management"
              description="Smart Ship Hub Remote gives vessel owners, operators, charter parties and insurers the tools to manage any vessel in real time. Optimize performance and fuel consumption according to current sea and weather conditions. Diagnose equipment and machinery condition with accurate predictive maintenance tools – live from the shore. Enhance efficiency with remote video streams, alerts, alarms and escalations. Accurately predict arrival at port to aid transfer logistics and minimize time spent at anchor and in port."
            /> */}

            <section
              ref={service2Ref}
              id="service__2"
              className="relative h-[50vh] sm:h-screen w-full bg-white overflow-y-hidden mx-auto"
            >
              <h1 className="text-xl font-semibold lg:text-3xl text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
                Decarbonization
              </h1>
              <video
                className="w-full h-full object-cover"
                src={Decarbonize}
                autoPlay
                loop
                muted
              ></video>
            </section>
            {/* <FeatureSection
              service="Reduce Carbon Footprint"
              description="Digitalization improves ship-shore communications for reporting current carbon intensity and maturity in vessel decarbonization. Smart Ship© Hub's performance advisory can show you how to effectively move forward with decarbonization, monitoring and measuring vessel CO2 emissions. Smart Ship© Hub provides quick-to-deploy maritime digitalization technologies from a single unified platform to ensure zero-emission commercial vessels operate on deep-sea trade routes."
            /> */}
            {/* <section
              ref={service3Ref}
              id="service__3"
              className="relative h-[50vh] sm:h-screen w-full bg-white overflow-y-hidden mx-auto"
            >
              <h1 className="text-xl font-semibold lg:text-3xl text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
                Condition Monitoring
              </h1>
              <video
                className="w-full h-full object-cover"
                src={ConditionMonitor}
                autoPlay
                loop
                muted
              ></video>
            </section> */}
            {/* <FeatureSection
              service="Remote Vessel Performance"
              description="Savings through On- demand maintenance  alert based on live machinery data. Predictive  diagnostics leading to deferred maintenance &  condition based procurement. Smart Ship© Hub encourages a proactive approach in which early study of the vessel machinery condition and health is initiated while it is still operating normally."
            /> */}
            {/* <section
              ref={service4Ref}
              id="service__4"
              className="relative h-[50vh] sm:h-screen w-full bg-white overflow-y-hidden mx-auto"
            >
              <h1 className="text-xl font-semibold lg:text-3xl text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
                Fuel Performance
              </h1>
              <video
                className="w-full h-full object-cover"
                src={FuelPerformance}
                autoPlay
                loop
                muted
              ></video>
            </section> */}
            {/* <FeatureSection
              service="Save 3-15% on Fuel Cost"
              description="Smart Ship Hub Insights provides predictive fuel consumption based on current and forecast weather and sea conditions, vessel condition, laden state and the route. Historical and vessel class data enables comparison and correlation between fuel and various other vessel parameters. Smart Ship Hub Insights enables complete clarity on fuel utilization and optimization in real time."
            /> */}
            {/* <section
              ref={service5Ref}
              id="service__5"
              className="relative h-[50vh] sm:h-screen w-full bg-white overflow-y-hidden mx-auto"
            >
              <h1 className="text-xl font-semibold lg:text-3xl text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
                ME Performance
              </h1>
              <video
                className="w-full h-full object-cover"
                src={MEPerformance}
                autoPlay
                loop
                muted
              ></video>
            </section> */}
            {/* <FeatureSection
              service="Vessel Health Index"
              description="Machinery condition and health monitoring involve continuously observing a set of voyage metrics and shipping process variables that indicate the state of the monitored vessel. It is crucial to conduct timely maintenance activities for the vessel's structural integrity and stability to comply with safety standards and environmental regulations. "
            /> */}
            {/* <section
              ref={service6Ref}
              id="service__6"
              className="relative h-[50vh] sm:h-screen w-full bg-white overflow-y-hidden mx-auto"
            >
              <h1 className="text-xl font-semibold lg:text-3xl text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
                Voyage Performance
              </h1>
              <video
                className="w-full h-full object-cover"
                src={VoyagePerformance}
                autoPlay
                loop
                muted
              ></video>
            </section> */}
            {/* <FeatureSection
              service="Dollar Per Nautical Per Mile Savings"
              description="Smart Ship© Hub is leveraging high-frequency data through its digital platform and use the data for weather routing and route optimisation, charter party compliance and consumption management, and decarbonisation measures across the fleet. Smart Ship© Hub is a Unified Digital Platform: for Chartering & Commercial teams, Shore-based Voyage Operators, Vessel Performance for Ship Management teams. "
            /> */}
            {/* <News />

            <Footer /> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll;
