import React from 'react';
import classnames from 'classnames';
import * as styles from './darkModeBtn.module.scss';

const DarkModeBtn = ({onChange}) => {
  return (
    <button type={'button'} onClick={onChange} className={classnames(styles.btn)}>
      btn
    </button>
  );
};

export default DarkModeBtn;