import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './horizontal.css';


gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const horizontalSections = gsap.utils.toArray(".horizontal-section");
            gsap.to(horizontalSections, {
                xPercent: -100 * (horizontalSections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: "#container",
                    pin: true,
                    scrub: 1,
                    markers:false,
                    snap: 1 / (horizontalSections.length - 1),
                    end: () => "+=" + document.querySelector("#container").offsetWidth
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <main id="container">
            {/* section 01 */}
            <section className="horizontal-section">
                <h1 className="heading">  The playful, light and happening vibe on the campus</h1>
            </section>

            {/* section 02 */}
            <section className="horizontal-section">
                <h1 className="heading"> Lectures and practical engagement of group of students</h1>
            </section>

            {/* section 03 */}
            <section className="horizontal-section">
                <h1 className="heading">  Networking and event participation via recreational clubs</h1>
            </section>

            {/* section 04 */}
            <section className="horizontal-section">
                <h1 className="heading">  Enjoying lunch with friends in canteen, reaching hostel and relaxing and talking with roomies about the day</h1>
            </section>
            <section className="horizontal-section">
                <h1 className="heading">  The day to day efforts a student ideally takes towards academic studies and revision</h1>
            </section>

            <section className="horizontal-section">
                <h1 className="heading"> the Inescapable cloth care management by students in their room or through incomplete Laundromats</h1>
            </section>              
        </main>
    );
};

// ReactDOM.render(<App />, document.getElementById("root"));

export default Horizontal;
