import React, { useEffect } from "react";
import classnames from "classnames";
import { gsap } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

import * as styles from "./styles.module.scss";

const Circles = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3" });

  // const refCircle = useRef(null);

  useEffect(() => {
    // const elements = gsap.utils.toArray(".circle");

    // console.log(elements);

    // const circle = (el) => el.map((item) => item);

    // gsap.to(circle(elements), {
    //   // scale: 0.1,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: circle(elements),
    //     start: "top top",
    //     // end: () => window.innerWidth * 4,
    //     scrub: true,
    //     onEnter: (batch) =>
    //       gsap.to(batch, {
    //         opacity: 0.5,
    //         y: 30,
    //         stagger: { each: 0.15 },
    //         // overwrite: true,
    //       }),
    //     // pin: true,
    //     // invalidateOnRefresh: true,
    //     // anticipatePin: 1,
    //     // markers: true,
    //   },
    // });

    ScrollTrigger.batch(".circle", {
      horizontal: true,
      markers: true,
      scrub: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 0.5,
          scale: 0.5,

          start: "top 0%",
          end: "top 60%",
          stagger: { each: 0.15 },
          overwrite: true,
        }),
    });
  }, []);

  return (
    <div className={classnames(styles.circlesWrap)}>
      <span
        className={classnames(styles.circle, "circle")}
        /*ref={refCircle}*/
      ></span>
      <span
        className={classnames(styles.circle, styles.red, "circle")}
        /*ref={refCircle}*/
      ></span>
      <span
        className={classnames(styles.circle, styles.blue, "circle")}
        /*ref={refCircle}*/
      ></span>
      <span
        className={classnames(styles.circle, styles.yellow, "circle")}
        /*ref={refCircle}*/
      ></span>
    </div>
  );
};

export default Circles;
