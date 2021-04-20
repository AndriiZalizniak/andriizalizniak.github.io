export default (styles) => Object.entries(styles).forEach(([key, value]) => {
  document.querySelector('.az-page-wrapper').style
    .setProperty(`--${key}`, value);
})