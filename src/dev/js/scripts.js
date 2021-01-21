import 'core-js/es/object/values.js';
import ACCORDEON from './plugs/Accordion';

const INIT_ACC = () => {
  if (window.innerWidth <= 576 && document.querySelector('.js-accord__wrap')) {
    const accordList = new ACCORDEON(
      document.querySelector('.js-accord__wrap'), {
        accItem: 'js-accord__item',
        targetClass: 'js-accord__target',
        buttonClass: 'js-accord__btn',
        accItemShowClass: 'js-accord__show',
        accordionClass: 'js-accord__accordion'
      });

    accordList.init();
  };
};

INIT_ACC();