const SIZES = Object.freeze({
  DEFAULT: '',
  LARGE: 'lg',
  SMALL: 'sm',
});

export default {
  SIZE: SIZES,

  isSizes(size) {
    return Object.values(SIZES).includes(size);
  },
};
