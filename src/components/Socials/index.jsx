import React, { useState } from 'react';
import classnames from 'classnames';
import SocialBtn from '@/components/ui/SocialBtn';
import Btn from '@/components/ui/Btn';
import HoverStickyElement from '@/components/ui/HoverStickyElement';
import URL from '@/mocks/urls.js';
import * as styles from './socials.module.scss';

const Socials = () => {
  const [isSocials, setSocials] = useState(false);

  const socials = [
    {
      svg: 'youtube',
      href: URL.utube
    },
    {
      svg: 'instagram',
      href: URL.instagram
    },
    {
      svg: 'vk',
      href: URL.vk
    },
    {
      svg: 'github',
      href: URL.github
    }
  ];

  const showSocials = () => {
    setSocials(!isSocials);
  };

  return (
    <div className={classnames(styles.container, isSocials && styles.socialsIsShow)}>
      <div className={classnames(styles.inner)}>
        <ul className={classnames(styles.list)}>
          {
            socials.map(social => {
              return (
                <li key={social.href}>
                  <SocialBtn
                    svg={social.svg}
                    href={social.href}
                  />
                </li>
              )
            })
          }
        </ul>

          <HoverStickyElement>
            {
              commonData => 
                <>
                  <Btn svg={'visit'} onChange={ showSocials } className={styles.btnToShowSocials} />
                </>
            }
          </HoverStickyElement>
      </div>
    </div>
  );
};

export default Socials;