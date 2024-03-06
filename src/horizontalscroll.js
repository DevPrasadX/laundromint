import React, { useEffect, useLayoutEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./horizontal.css";
import ImageSlider from "./Components/ImageSlider";
import image1 from "./assets/images/1.jpg";
import image2 from "./assets/images/2a.jpg";
import image3 from "./assets/images/2b.jpg";
import image4 from "./assets/images/3a.jpg";
import image5 from "./assets/images/3b.jpg";
import image6 from "./assets/images/4a.jpg";
import image7 from "./assets/images/4b.jpg";
import image8 from "./assets/images/4c.jpg";
import image9 from "./assets/images/5. effort of student.jpg";
import image10 from "./assets/images/6.jpg";

const Horizontal = () => {
  //   useEffect(() => {
  //     const ctx = gsap.context(() => {
  //       const horizontalSections = gsap.utils.toArray(".horizontal-section");
  //       gsap.to(horizontalSections, {
  //         xPercent: -100 * (horizontalSections.length - 1),
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: "#container",
  //           pin: true,
  //           scrub: 1,
  //           markers: false,
  //           snap: 1 / (horizontalSections.length - 1),
  //           end: () => "+=" + document.querySelector("#container").offsetWidth,
  //         },
  //       });
  //     });

  //     return () => ctx.revert();
  //   }, []);

  //   useEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);

  //     const tl = gsap?.timeline({
  //       scrollTrigger: {
  //         trigger: "#page1",
  //         start: "top top",
  //         scrub: 1,
  //         scroller: "#main",
  //         pin: true,
  //       },
  //     });

  //     tl.to("#page1 > h1", {
  //       top: "-30%",
  //     });

  //     // Clean up GSAP animation on unmounting
  //     return () => {
  //       tl.kill();
  //     };
  //   }, []);

  const images = [
    {
      text: "The playful, light and happening vibe on the campus",
      src: "https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_1280.jpg",
    },
    {
      text: "The playful, light and happening vibe on the campus",
      src: image1,
    },
    {
      text: "   ,       Lectures and practical engagement of group of students",
      src: image2,
    },
    {
      text: "          Networking and event participation via recreational clubs",
      src: image3,
    },
    {
      text: "Enjoying lunch with friends in canteen, reaching hostel and relaxing and talking with roomies about the day",
      src: image4,
    },
    {
      text: "The day to day efforts a student ideally takes towards academic  studies and revision",
      src: image5,
    },
    {
      text: "The playful, light and happening vibe on the campus",
      src: image6,
    },
    {
      text: "The playful, light and happening vibe on the campus",
      src: image7,
    },
    {
      text: "The playful, light and happening vibe on the campus",
      src: image8,
    },
    {
      text: "The playful, light and happening vibe on the campus",
      src: image9,
    },
    {
      text: "The playful, light and happening vibe on the campus",
      src: image10,
    },
  ];

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

    tl6.to("#page1>h1", {
      top: `-30%`,
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
          // scroller: `#root`,
          // markers: true,
          pin: true,
        },
      },
      service2Ref.current
    );

    tl6.to("#page2>h1", {
      top: `-30%`,
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
      top: `-30%`,
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
      top: `-30%`,
    });

    tl6.scrollTrigger.refresh();

    return () => tl6.revert();
  }, [service4Ref]);

  return (
    // <main id="container ">
    //   {" "}
    //   {/* section 01 */}
    //   <section className="horizontal-section  " id="page1">
    //     <h1 className="heading">
    //       {" "}
    //       The playful, light and happening vibe on the campus
    //     </h1>
    //   </section>
    //   {/* section 02 */}
    //   <section className="horizontal-section">
    //     <h1 className="heading">
    //       {" "}
    //       Lectures and practical engagement of group of students
    //     </h1>
    //   </section>
    //   {/* section 03 */}
    //   <section className="horizontal-section">
    //     <h1 className="heading">
    //       {" "}
    //       Networking and event participation via recreational clubs
    //     </h1>
    //   </section>
    //   {/* section 04 */}
    //   <section className="horizontal-section">
    //     <h1 className="heading">
    //       {" "}
    //       Enjoying lunch with friends in canteen, reaching hostel and relaxing
    //       and talking with roomies about the day
    //     </h1>
    //   </section>
    //   <section className="horizontal-section">
    //     <h1 className="heading">
    //       {" "}
    //       The day to day efforts a student ideally takes towards academic
    //       studies and revision
    //     </h1>
    //   </section>
    //   <section className="horizontal-section">
    //     <h1 className="heading">
    //       {" "}
    //       the Inescapable cloth care management by students in their room or
    //       through incomplete Laundromats
    //     </h1>
    //   </section>{" "}
    // </main>
    // <div>
    //   <ImageSlider images={images} />
    // </div>
    // <div id="main" ref={service1Ref}>
    //   <div id="page1">
    //     <h1>Welcome to the era of spatial computing</h1>
    //     <video
    //       src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4"
    //       autoplay
    //       loop
    //       muted
    //     ></video>
    //   </div>
    //   <div id="page1">
    //     <h1>Welcome to the era of spatial computing</h1>
    //     <video
    //       src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4"
    //       autoplay
    //       loop
    //       muted
    //     ></video>
    //   </div>
    //   <div id="page1">
    //     <h1>Welcome to the era of spatial computing</h1>
    //     <video
    //       src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4"
    //       autoplay
    //       loop
    //       muted
    //     ></video>
    //   </div>
    // </div>
    <div id="main">
      <div id="page1" ref={service1Ref}>
        <h1 className="text-center text-black font-semibold h-fit p-2 bg-slate-300 bg-opacity-25">
          The playful, light and happening <br /> vibe on the campus"
        </h1>
        <img src={image1}></img>
      </div>
      <div id="page2" ref={service2Ref}>
        <h1 className="text-center text-black font-semibold h-fit p-2 bg-slate-300 bg-opacity-25">
          The playful, light and happening <br /> vibe on the campus"
        </h1>
        <img src={image2}></img>
      </div>
      <div id="page3" ref={service3Ref}>
        <h1 className="text-center text-black font-semibold h-fit p-2 bg-slate-300 bg-opacity-25">
          The playful, light and happening <br /> vibe on the campus"
        </h1>
        <img src={image3}></img>
      </div>
      <div id="page4" ref={service4Ref}>
        <h1 className="text-center text-black font-semibold h-fit p-2 bg-slate-300 bg-opacity-25">
          The playful, light and happening <br /> vibe on the campus"
        </h1>
        <img src={image4}></img>
      </div>
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));

export default Horizontal;
