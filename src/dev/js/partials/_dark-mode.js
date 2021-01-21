export default () => {
  const body = document.querySelector('body');
  const DATE = new Date();

  let hours = DATE.getHours();
  let month = DATE.getMonth() + 1;

  const autoToggle = () => {
    //  summer time
    if(month > 3 && month <= 10) {
      console.log('summer');

      if (hours >= 21 || hours >= 0 && hours <= 5 ) {
        console.log('dark');
        body.classList.add('js-dark-mode');
  
      } else if (hours > 5 && hours < 21) {
        console.log('light');
        body.classList.remove('js-dark-mode');
      };

    // winter time
    } else if (month <= 3 || month > 10) {
      console.log('winter');
  
      if (hours >= 16 || hours >= 0 && hours <= 7 ) {
        console.log('dark');
        body.classList.add('js-dark-mode');
  
      } else if (hours > 7 && hours < 16) {
        console.log('light');
        body.classList.remove('js-dark-mode');
      };
    };
  };

  const manualToggle = () => {
    console.log('manualToggle');
  }

  autoToggle();
  manualToggle();
};