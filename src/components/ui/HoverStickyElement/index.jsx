import React, { useCallback, useRef } from "react";
import classnames from "classnames";
// import gsap from 'gsap';
import { TweenMax } from "gsap/all";
import * as styles from "./hoverStickyElement.module.scss";

const HoverStickyElement = ({ children }) => {
  // const { tl } = useTweenMax();

  const container = useRef(null);
  const inner = useRef(null);
  const element = useRef(null);

  const onHover = useCallback(
    (e) => {
      const outerWrap = inner.current;
      const elemWrap = element.current;

      const i = outerWrap,
        s = e.clientX - i.getBoundingClientRect().left,
        o = e.clientY - i.getBoundingClientRect().top;

      TweenMax.to(outerWrap, 0.3, {
        x: ((s - i.offsetWidth / 2) / i.offsetWidth) * 4,
        y: ((o - i.offsetHeight / 2) / i.offsetHeight) * 4,
        scale: 1.2,
        ease: "Power2.easeOut",
      });

      TweenMax.to(elemWrap, 0.3, {
        x: ((s - i.offsetWidth / 2) / i.offsetWidth) * 6,
        y: ((o - i.offsetHeight / 2) / i.offsetHeight) * 6,
        ease: "Power2.easeOut",
      });
    },
    [inner, element]
  );

  const onLeave = useCallback(
    (e) => {
      const outerWrap = inner.current;
      const elemWrap = element.current;

      const i = outerWrap,
        s = e.clientX - i.getBoundingClientRect().left,
        o = e.clientY - i.getBoundingClientRect().top;

      TweenMax.to(outerWrap, 0.3, {
        x: 0,
        y: 0,
        scale: 1,
        ease: "Power2.easeOut",
      });

      TweenMax.to(elemWrap, 0.3, {
        x: 0,
        y: 0,
        ease: "Power2.easeOut",
      });
    },
    [inner, element]
  );

  return (
    <div
      className={classnames(styles.stickyContainer, "az-sticky-container")}
      ref={container}
      onMouseMove={onHover}
      onMouseLeave={onLeave}
    >
      <div className={classnames(styles.stickyInner)} ref={inner}>
        <div className={classnames(styles.stickyElement)} ref={element}>
          {children()}
        </div>
      </div>
    </div>
  );
};

export default HoverStickyElement;
