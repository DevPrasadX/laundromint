import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../src/assets/image.png";
import video from "../src/assets/Loader.mp4";
import campusimage from "../src/assets/campus_image.jpg";
import "./App.css";
import Navbar from "./navigation";
import Page1 from "./verticalscroll";
import HorizontalScoll from "./HorizontalSroll";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const logoRef = useRef(null);
  const videoRef = useRef(null);
  const navbarRef = useRef(null); // Ref for the navbar
  const [videoEnded, setVideoEnded] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track scrolling

  useEffect(() => {
    const headings = document.querySelectorAll(".helloworld");

    headings.forEach((heading, i) => {
      gsap.fromTo(
        heading,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: heading,
            start: "top 0%",
            end: "bottom 30%",
            scrub: true,
            markers: false, // Make markers invisible
          },
        }
      );
    });

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", () => {
        setVideoEnded(true);
      });
    }

    // Event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (videoEnded) {
      gsap.to(videoRef.current, {
        opacity: 0,
        duration: 0,
        ease: "power1.inOut",
      });
      gsap.to(logoRef.current, {
        opacity: 1,
        height: "12rem",
        duration: 0,
        ease: "power1.inOut",
      }); // Set height directly without animation
      gsap.to(navbarRef.current, {
        top: 0,
        duration: 0.2,
        ease: "power1.inOut",
      }); // Show the navbar
    }
  }, [videoEnded]);

  // Function to handle scrolling
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const previousScrollY = window.previousScrollY || 0;
    const scrollSpeed = Math.abs(scrollY - previousScrollY);

    if (scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // If scrolling down slowly, fade out and change size to 3rem
    if (scrollSpeed < 5 && scrollY > previousScrollY) {
      gsap.to(logoRef.current, { height: "3rem", duration: 0.5 });
    }
    // Reset size to 12rem when scrolling up or scrolling fast
    else {
      gsap.to(logoRef.current, { height: "12rem", duration: 0.5 });
    }

    window.previousScrollY = scrollY;
  };

  return (
    <>
      <section
        className={`helloworld relative ${
          !videoEnded ? "h-[50vh] sm:h-screen" : ""
        } w-full bg-white overflow-y-hidden mx-auto flex items-center justify-center transition-colors duration-2000 `}
      >
        {!videoEnded && (
          <video
            src={video}
            className="w-full h-full object-cover z-[102]"
            autoPlay
            muted
            ref={videoRef}
          ></video>
        )}
        {/* {videoEnded && (
          <img
            src={logo}
            ref={logoRef}
            className={` ${scrolled ? "h-24" : "h-24 z-102"}`}
            alt="Logo"
          />
        )} */}
      </section>
      {videoEnded ? (
        <>
          <Navbar ref={navbarRef} />
          {/* <Page1 /> */}
          <HorizontalScoll />{" "}
        </>
      ) : (
        ""
      )}

      <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/gsap.min.js"
        integrity="sha512-qF6akR/fsZAB4Co1QDDnUXWnaQseLGXoniuSuSlPQK6+aWhlMZcHzkasCSlnWoe+TJuudlka1/IQ01Dnhgq95g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollTrigger.min.js"
        integrity="sha512-IHDCHrefnBT3vOCsvdkMvJF/MCPz/nBauQLzJkupa4Gn4tYg5a6VGyzIrjo6QAUy3We5HFOZUlkUpP0dkgE60A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script src="./js/spinning.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js"></script>
      <script src="https://cdn.tailwindcss.com"></script>
    </>
  );
}

export default App;
