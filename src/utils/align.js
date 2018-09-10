const ALIGNMENT = Object.freeze({
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
});

export default {
  ALIGN: ALIGNMENT,

  isAlign(value) {
    return Object.values(ALIGNMENT).includes(value);
  },
  class(value) {
    if (!value || value === ALIGNMENT.LEFT) return '';

    const align = value === ALIGNMENT.RIGHT ? 'end' : value;
    return `justify-content-${align}`;
  },
};
