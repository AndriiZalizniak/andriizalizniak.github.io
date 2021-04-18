import React from 'react';
import SvgSymbols from 'assets/svg/svg-symbols.svg';
import './styles.scss';

const Icon = (props) => (
  <svg className={`az-icon az-icon-${props.name}`}>
    <use 
      xlinkHref={`${SvgSymbols}#${props.name}`} 
      width="100%" 
      height="100%"
    />
  </svg>);

export default Icon;