import React, { useEffect } from "react";
import classnames from "classnames";
import { gsap } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

import * as styles from "./styles.module.scss";

const arr = [1, 2, 3, 4, 5];

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "back.inOut(2)" });

    ScrollTrigger.batch(".li-item", {
      start: "top 50% ",
      // interval: 0.1,
      scrab: true,

      // markers: true,
      end: "top 60%",
      onEnter: (batch) =>
        gsap.to(batch, {
          scaleX: 0.7,
          stagger: { each: 0.15 },
          overwrite: true,
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          scaleX: 1,
          stagger: { each: 0.15 },
          overwrite: true,
        }),
    });
  }, []);

  return (
    <div className={classnames(styles.section)}>
      {/* <h1 className={"az-h1"}>Hero sec</h1> */}

      <div className={styles.container}>
        <ul className={styles.list}>
          {arr.map((el) => (
            <li className="li-item">{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
