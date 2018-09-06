<template>
  <ul
    :class="[{'border-none': !border}]"
    class="vu-pagination pagination">
    <li
      :class="{ disabled: current <= 1 }"
      class="page-item">
      <a
        class="page-link"
        href="#"
        @click.stop.prevent="handleClickPrev">&lsaquo;</a>
    </li>
    <li
      v-for="(page, index) in pageRange"
      :key="index"
      :class="[{ disabled: page === ellipsisText }, { active: current === page }]"
      class="page-item">
      <a
        class="page-link"
        href="#"
        @click.stop.prevent="handleClickPage(page)"
        v-html="page"></a>
    </li>
    <li
      :class="{ disabled: current >= pageCount }"
      class="page-item">
      <a
        class="page-link"
        href="#"
        @click.stop.prevent="handleClickNext">&rsaquo;</a>
    </li>
  </ul>
</template>

<script>
/**
 * @example ../../../docs/examples/Pagination.md
 */
export default {
  name: 'VuPagination',
  components: {
  },
  props: {
    /**
     * @model
     * current page number
     */
    value: {
      type: Number,
      default: 1,
    },
    /**
     * total item count
     */
    total: {
      type: Number,
      validation: val => val % 1 === 0,
    },
    /**
     * item count of each page,
     */
    perPage: {
      type: Number,
      default: 10,
    },
    /**
     * whether border
     */
    border: Boolean,
  },
  data() {
    return {
      current: this.value,
      visibleCount: 7,
      ellipsisText: '&hellip;',
    };
  },
  computed: {
    // total page size
    pageCount() {
      return Math.ceil(this.total / this.perPage);
    },
    // set page range
    pageRange() {
      const { pageCount, visibleCount, current } = this;
      const setRange = (from, to) => {
        const range = [];
        for (let i = from; i <= to; i++) {
          range.push(i);
        }
        return range;
      };

      if (pageCount <= visibleCount) {
        return setRange(1, pageCount);
      }

      const even = visibleCount % 2 === 0 ? 1 : 0;
      const prev = Math.floor(visibleCount / 2);
      const next = (pageCount - prev) + 1 + even;

      if (current > prev && current < next) {
        const from = (current - prev) + 2;
        const to = (current + prev) - 2 - even;
        return [
          1,
          this.ellipsisText,
          ...setRange(from, to),
          this.ellipsisText,
          pageCount];
      }

      return [
        ...setRange(1, prev),
        this.ellipsisText,
        ...setRange((pageCount - prev) + 1 + even, pageCount),
      ];
    },
  },
  watch: {
    value(val) {
      this.current = val;
    },
    current(value) {
      this.$emit('change', value);
      this.$emit('input', value);
      this.$emit('update', value);
    },
  },
  methods: {
    /**
     * @event triggers when current-page changes
     * @param page
     */
    handleClickPage(page) {
      this.current = page;
      this.$emit('current-change', this.current);
    },
    /**
     * @event triggers when the prev button
     */
    handleClickPrev() {
      this.current = this.current - 1;
      this.$emit('prev-click', this.current);
    },
    /**
     * @event triggers when the next button
     */
    handleClickNext() {
      this.current = this.current + 1;
      this.$emit('next-click', this.current);
    },
  },
};
</script>
