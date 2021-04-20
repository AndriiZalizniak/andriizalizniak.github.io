import React, { useCallback, useRef } from "react";
import classnames from "classnames";
import { TweenMax } from "gsap/all";
import "./hoverStickyElement.scss";

const HoverStickyElement = ({ children, className }) => {
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
        scale: 1.4,
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
      className={classnames("az-sticky-container", className)}
      ref={container}
      onMouseMove={onHover}
      onMouseLeave={onLeave}
    >
      <div className={classnames("az-sticky-inner")} ref={inner}>
        <div className={classnames("az-sticky-element")} ref={element}>
          {children()}
        </div>
      </div>
    </div>
  );
};

export default HoverStickyElement;
