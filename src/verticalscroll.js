import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page1 = () => {
  const root = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(root.current);

    gsap.to(q(".b"), {
      y: -600,
      scrollTrigger: {
        trigger: q(".b"),
        start: "top center",
        end: "top 10px",
        scrub: true,
        markers: false,
        id: "scrub",
      },
    });

    ScrollTrigger.create({
      trigger: root.current,
      start: "top top",
      onEnter: () => {
        gsap.to(imageRef.current, { opacity: 1, scale: 0.95, duration: 1 });
      },
      onLeaveBack: () => {
        gsap.to(imageRef.current, { opacity: 0, scale: 1, duration: 1 });
      },
      markers: false, // Set to false in production
    });

    ScrollTrigger.create({
      trigger: q(".b"),
      start: "top 60%", // Start revealing the image when the text reaches 60% from the top
      onEnter: () => {
        gsap.to(imageRef.current, { opacity: 1, duration: 1 });
      },
      onLeaveBack: () => {
        gsap.to(imageRef.current, { opacity: 0, duration: 1 });
      },
      markers: false, // Set to false in production
    });
  }, []); // No dependencies needed

  return (
    <div
      id="page1"
      ref={root}
      className="mt-32 z-1"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        ref={imageRef}
        src="https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_1280.jpg"
        className="w-full object-fit"
        style={{ opacity: 0, transition: "opacity 1s, transform 1s" }}
      />

      <h1 className="b">Laundromint</h1>
    </div>
  );
};

export default Page1;
