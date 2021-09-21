import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SectionHeader from "../SectionHeader";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";

export default function About() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1.5,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        //nComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <SectionHeader title="about" />

      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        We're a small startup from Bali island in Indonesia, and we're working
        in a local village with local craftsman and gardeners that lost their
        income stream due to the global economical crisis. We're locals and
        we're making this mostly for the locals. &nbsp;
      </p>
      <br></br>
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Our ingredients are coconut fibers, that is locally abundant. Did you
        even know that Indonesia is the biggest producer of coconut based
        products? and did you know that all those products ended up as waste
        still? Yes, we're accountable for almost 60% of all the world's coconut
        waste, so its time to take action.&nbsp;
      </p>
      <br></br>
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Kelapot is a dream of a distant future, where planters and growers grows
        thing in a more holistic approach. Our mission is to bring alternatives
        to the global nursery and planting industry. A future that is less
        wasteful and a little bit more fibrous.&nbsp;
      </p>
    </section>
  );
}
