import React from 'react';
import classnames from 'classnames';
import Icon from '@/components/ui/Icon';
import * as styles from './socialBtn.module.scss';

const SocialBtn = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className={classnames(styles.socialBtn)}>
      <Icon name={props.svg} />
    </a>
  );
};

export default SocialBtn;