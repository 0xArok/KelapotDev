import React, { useEffect } from "react";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";

import "./style.scss";

export default function Header() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });
    
    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1.5,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <section className="header" data-scroll-section>
      <div className="header-container">
      
      <h1 className="header-h1" id="header-text" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-class="appear" data-scroll-repeat="true">Hello, We Are Kelapot</h1>
      <img src="https://i.ibb.co/dPZN29f/DSCF8355-min.jpg" data-scroll data-scroll-direction="vertical" data-scroll-speed="-3" data-scroll-class="appear" data-scroll-repeat="true"/>
      
      </div>
    </section>
  );
}
