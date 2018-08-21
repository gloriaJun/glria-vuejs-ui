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

// export const ICON_NAME = type => (type === COLOR_TYPES.SUCCESS) ? 'check_circle' : type;

export const POSITIONS = Object.freeze({
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center',
});

export const SIZES = Object.freeze({
  DEFAULT: '',
  LARGE: 'lg',
  SMALL: 'sm',
});
