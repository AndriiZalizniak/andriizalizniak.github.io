import React from 'react';
import classnames from 'classnames';
import Icon from '@/components/ui/Icon';
import * as styles from './btn.module.scss';

const Btn = (props) => {
  return (
    <button
      type={'button'}
      className={classnames(styles.btn, props.className && props.className)}
      onClick={ props.onChange }
    >
      { props.text && <span>{props.text}</span> }
      { props.svg && <Icon name={ props.svg } /> }
    </button>
  );
};

export default Btn;