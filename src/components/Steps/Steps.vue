<template>
  <div class="vu-steps">
    <ul
      :class="classes"
      class="nav border shadow-sm bg-white rounded">
      <template v-for="(step, index) in steps">
        <li
          :key="step.uuid"
          :class="[{disabled: step.disabled}, {active: step.isActive}]"
          class="nav-item">
          <div class="step-item rounded-circle">
            <template v-if="step.$slots.label">
              <vu-slot
                :component="step"
                tag="span"
                name="label"></vu-slot>
            </template>
            <template v-else>
              {{ index }}
            </template>
          </div>
        </li>

        <hr
          v-if="steps.length - 1 > index"
          :key="index"
          class="liner">
      </template>
    </ul>

    <div class="step-content border p-3 bg-white rounded">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VuSlot from '../../utils/SlotComponent';

/**
 * @example ../../../docs/examples/Steps.md
 */
export default {
  name: 'VuSteps',
  components: {
    VuSlot,
  },
  props: {
    /**
     * current activation step
     */
    active: {
      type: Number,
      default: 0,
    },
    /**
     * type of Tab
     */
    type: {
      type: String,
      default: '',
      validator: value => Object.values([
      ]).includes(value),
    },
  },
  data() {
    return {
      currentStep: this.active,
      steps: [],
    };
  },
  computed: {
    classes() {
      return [
        `nav-${this.type}`,
      ];
    },
  },
  mounted() {
    this.steps = this.$children.filter(child => child.$options._componentTag === 'vu-step-item');
    // set step is active
    this.steps = this.steps.map((step, index) => {
      step.isActive = (index === this.currentStep);
      return step;
    });
  },
  methods: {
    handleClickTab(tab) {
      let activeIndex = 0;
      this.steps.map((obj, index) => {
        obj.isActive = (obj.id === tab.id);
        if (obj.isActive) activeIndex = index;
        return obj;
      });

      this.$emit('tab-click', activeIndex, tab.name);
    },
  },
};
</script>
