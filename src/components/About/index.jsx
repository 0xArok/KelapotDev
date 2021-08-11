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
        A iaculis at erat pellentesque adipiscing commodo elit. Cum sociis
        natoque penatibus et magnis dis parturient montes nascetur. Lacinia at
        quis risus sed vulputate odio. Amet est placerat in egestas. Pulvinar
        neque laoreet suspendisse interdum consectetur libero id. Metus
        vulputate eu scelerisque felis imperdiet proin fermentum. Pellentesque
        habitant morbi tristique senectus. At varius vel pharetra vel turpis.
        Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet.
        Ultricies integer quis auctor elit sed vulputate. Ipsum dolor sit amet
        consectetur adipiscing elit ut aliquam. Sed turpis tincidunt id aliquet.
        Enim ut tellus elementum sagittis vitae et leo duis ut. Quis commodo
        odio aenean sed adipiscing diam. Nisl rhoncus mattis rhoncus urna neque
        viverra justo nec.&nbsp;
      </p>
      <br></br>
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Sit amet risus nullam eget felis eget nunc lobortis mattis. Nibh mauris
        cursus mattis molestie a iaculis at erat pellentesque. Amet mauris
        commodo quis imperdiet massa. Id semper risus in hendrerit gravida
        rutrum quisque non. Neque egestas congue quisque egestas diam in
        arcu.&nbsp;
      </p>
    </section>
  );
}
