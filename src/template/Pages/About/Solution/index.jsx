import React, { useEffect, useRef } from "react";
import classnames from "classnames";
import { gsap } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

import Circles from "./components/Circles";

import * as styles from "./styles.module.scss";

const Solution = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sec = useRef(null);

  useEffect(() => {
    const element = sec.current;

    // console.log(element);

    gsap.to(element, {
      xPercent: -100,
      x: () => window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: () => window.innerWidth * 2,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        // markers: true,
      },
    });
  }, []);

  return (
    <div id="hero_sec" className={classnames(styles.section)} ref={sec}>
      <h2 className={classnames("az-h1")}>Section horizontal scroll </h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam
        quae repellat veniam doloribus nesciunt sequi, rerum quo iusto eaque
        iste voluptatum inventore quis sapiente tenetur libero consequatur illo
        veritatis? Facere labore error culpa iste tempora quas. Delectus nobis
        quasi, at placeat saepe hic doloremque? Quam nulla, consectetur cumque
        mollitia, est expedita eum reprehenderit necessitatibus quod natus
        facilis. Itaque, fugit. Veritatis eaque iste sapiente temporibus debitis
        nostrum vel numquam ad tenetur inventore distinctio at, fuga obcaecati
        provident expedita amet dolorum maxime. Inventore repudiandae sed
        repellat? Molestias quasi ex impedit expedita. Aliquid, vero. Qui sint
        corrupti minus quo dolorem. Similique deleniti facilis quod minus
        voluptatibus at necessitatibus fugiat mollitia, ullam quaerat facere
        nulla voluptatem recusandae veniam laudantium accusamus. Esse,
        similique. Amet! Ipsum nemo totam maiores deleniti voluptate amet soluta
        neque enim accusantium cupiditate, corporis suscipit dolor nulla magnam!
        Rerum doloribus fugiat praesentium incidunt vero iste, repudiandae,
        corrupti quo quibusdam est ex! Maiores similique sequi, laboriosam dolor
        quibusdam, laborum recusandae consequuntur, commodi rem minima nesciunt
        explicabo ab consectetur optio repudiandae aliquam sed doloremque
        cupiditate asperiores nostrum iusto culpa. Numquam natus et in. Odit
        numquam, minima in distinctio aperiam, fugit hic nesciunt aut, deserunt
        omnis aliquam? Ad tempora distinctio officiis incidunt iure aut aliquid
        sint omnis, odit dolorum necessitatibus esse, eius deleniti officia?
        Nesciunt blanditiis quasi, cupiditate voluptas tenetur fugiat, et,
        possimus iste rem repellat deleniti neque quia. Officia quis nobis, eos
        debitis quasi assumenda. Sint unde ullam commodi est et. Cum, harum?
        Ducimus inventore provident odio assumenda! Qui est nisi necessitatibus,
        voluptates, ut ex enim quam ad, similique quos recusandae consequuntur
        eius quis? Repudiandae nihil odio aspernatur iure inventore, suscipit
        vel minus! Saepe voluptatibus natus, ipsam aliquid veniam sint
        praesentium porro nisi beatae. Culpa recusandae at delectus asperiores
        consequuntur. Dicta quas dignissimos corrupti blanditiis in accusamus,
        eaque repellendus, rem, quia iusto nobis!
      </p>

      <div className={styles.wrapContainer}>
        <Circles />
      </div>
    </div>
  );
};

export default Solution;
