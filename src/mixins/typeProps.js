import { COLOR_TYPES, SIZES } from '../utils/constants';

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
