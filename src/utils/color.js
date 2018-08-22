const STATUS_TYPES = Object.freeze({
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'danger',
});

const COLOR_TYPES = Object.assign({
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LIGHT: 'light',
  DARK: 'dark',
}, STATUS_TYPES);

export default {
  COLORS: COLOR_TYPES,

  isColor(color) {
    return Object.values(COLOR_TYPES).includes(color);
  },
  statusColorIcon(color) {
    let icon = null;

    switch (color) {
      case STATUS_TYPES.INFO:
        icon = 'info-circle';
        break;
      case STATUS_TYPES.SUCCESS:
        icon = 'check-circle';
        break;
      case STATUS_TYPES.WARNING:
        icon = 'exclamation-triangle';
        break;
      case STATUS_TYPES.ERROR:
        icon = 'exclamation-circle';
        break;
      default:
        break;
    }

    return icon;
  },
};
