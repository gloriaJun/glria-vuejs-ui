<template>
  <div class="vu-step">
    <ul class="nav border shadow-sm bg-white rounded">
      <template v-for="(step, index) in steps">
        <li
          :key="step.uuid"
          :class="[
            {disabled: step.disabled},
            {active: step.isActive},
            {done: index < active}
          ]"
          class="nav-item step-item">
          <div class="step-item-icon rounded-circle">
            <template v-if="index >= active">
              <vu-icon
                v-if="step.icon"
                :icon="step.icon"></vu-icon>
              <span v-else>
                {{ index + 1 }}
              </span>
            </template>
            <vu-icon
              v-else
              icon="check"></vu-icon>
          </div>
          <div
            v-if="step.title"
            class="step-item-content">
            <div class="step-item-title">{{ step.title }}</div>
            <div class="step-item-description">{{ step.description}}</div>
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

export default {
  name: 'VuStep',
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
  },
  data() {
    return {
      steps: [],
    };
  },
  watch: {
    active() {
      this.setCurrentStep();
    },
  },
  mounted() {
    this.steps = this.$children.filter(child => child.$options._componentTag === 'vu-step-item');
    this.setCurrentStep();
  },
  methods: {
    setCurrentStep() {
      this.steps = this.steps.map((step, index) => {
        step.isActive = (index === this.active);
        return step;
      });
    },
  },
};
</script>
