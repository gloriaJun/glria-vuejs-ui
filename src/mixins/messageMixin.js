import colorUtility from '../utils/color';

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
      default: colorUtility.COLORS.PRIMARY,
      validator: value => colorUtility.isColor(value),
    },
    /**
     * message title
     */
    title: String,
    /**
     * message icon
     */
    icon: {
      type: String,
    },
    /**
     * icon show or not
     * - if not define icon, show icon depends on color
     */
    showIcon: Boolean,
  },
  data() {
    return {
      active: true,
    };
  },
  computed: {
    hasIcon() {
      return this.showIcon && this.iconName;
    },
    iconName() {
      return this.icon ? this.icon : colorUtility.statusColorIcon(this.color);
    },
  },
};
