import React from "react";
import classnames from "classnames";

import * as styles from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={classnames(styles.section)}>
      <h1 className={"az-h1"}>Hero sec</h1>
    </div>
  );
};

export default Hero;
