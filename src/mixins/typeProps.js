export const STATUS_TYPES = Object.freeze({
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'danger',
});

export const COLOR_TYPES = Object.assign({
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LIGHT: 'light',
  DARK: 'dark',
}, STATUS_TYPES);

export const SIZES = Object.freeze({
  DEFAULT: '',
  LARGE: 'lg',
  SMALL: 'sm',
});

/**
 * @mixin
 */
export default {
  props: {
    /**
     * The color for the button.
     */
    color: {
      type: String,
      default: COLOR_TYPES.PRIMARY,
      validator: value => Object.values(COLOR_TYPES).indexOf(value) > -1,
    },
    /**
     * The size for the button.
     */
    size: {
      type: String,
      validator: value => Object.values(SIZES).indexOf(value) > -1,
    },
  },
};
