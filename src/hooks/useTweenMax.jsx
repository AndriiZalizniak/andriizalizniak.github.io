import React, { useState, useCallback, useRef } from "react";
import { TweenMax } from "gsap/all";

const useTweenMax = () => {
  console.log(TweenMax);
  const { current: tl } = useRef(TweenMax());

  return tl;
};

export default useTweenMax;
