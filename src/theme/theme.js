import breakpoints from './breakpoints';
import './form-reset.css';
import colors from './colors';
import fonts from './fonts';
import animation from './animation';
import sizes from './sizes';
import heirarchy from './heirarchy';
import shadows from './shadows';
import borders from './borders';
import('./fonts');

export * from './utils';
export * from './styles';
export * from './components';


const mq = Object.entries(breakpoints).reduce((obj, [key, value]) => {
  obj[key] = `@media (min-width: ${value})`;
  obj[`${key}Inverted`] = `@media (max-width: ${value})`;
  return obj;
}, {});

const bpsArray = Object.entries(breakpoints).reduce((arr, bp) => {
  arr.push(bp[1]);
  // eslint-disable-next-line no-param-reassign
  arr[bp[0]] = bp[1];
  return arr;
}, []);

const theme = {
  breakpoints: bpsArray,
  mq,
  colors: colors,
  animation: animation,
  sizes: sizes,
  heirarchy: heirarchy,
  shadows: shadows,
  fonts: fonts,
  borders: borders,
};

export default theme;