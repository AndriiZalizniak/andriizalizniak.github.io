import React, { useCallback, useState } from "react";
import classnames from "classnames";
import { useSpring, animated } from "@react-spring/web";
import SocialBtn from "@/components/ui/SocialBtn";
import Btn from "@/components/ui/Btn";
import HoverStickyElement from "@/components/ui/HoverStickyElement";
import URL from "@/mocks/urls.js";
import * as styles from "./socials.module.scss";

const Socials = () => {
  const [isSocials, setSocials] = useState(false);
  const [bousedBtn, setBouncedBtn] = useState(false);

  const { btnBounce } = useSpring({
    from: { btnBounce: 0 },
    btnBounce: bousedBtn ? 1 : 0,
    config: { duration: 1000 },
  });

  // const { socBtnBounce } = useSpring({
  //   from: { socBtnBounce: 0 },
  //   socBtnBounce: bousedSocBtns ? 1 : 0,
  //   config: { duration: 300 },
  // });

  const socials = [
    {
      svg: "youtube",
      href: URL.utube,
    },
    {
      svg: "instagram",
      href: URL.instagram,
    },
    {
      svg: "vk",
      href: URL.vk,
    },
    {
      svg: "github",
      href: URL.github,
    },
  ];

  const showSocials = () => {
    setSocials(!isSocials);
  };

  const onBounceBtn = useCallback(() => {
    setBouncedBtn(!bousedBtn);
  }, [bousedBtn]);

  // const onBounceSoc = useCallback(() => {
  //   setBousedSocBtns(!bousedSocBtns);
  // }, [bousedSocBtns]);

  return (
    <div
      className={classnames(
        styles.container,
        isSocials && styles.socialsIsShow
      )}
    >
      <div className={classnames(styles.inner)}>
        <ul className={classnames(styles.list)}>
          {socials.map((social) => {
            return (
              <li key={social.href}>
                <SocialBtn
                  svg={social.svg}
                  href={social.href}
                  className={classnames(styles.social)}
                />
              </li>
            );
          })}
        </ul>

        <div
          className={"az-btnToShowSocials-wrap"}
          onMouseLeave={onBounceBtn}
          role={"button"}
          tabIndex={-2}
        >
          <animated.div
            style={{
              scale: btnBounce.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
            }}
          >
            <HoverStickyElement>
              {(commonData) => (
                <>
                  <Btn
                    svg={"visit"}
                    onChange={showSocials}
                    className={styles.btnToShowSoc}
                  />
                </>
              )}
            </HoverStickyElement>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
