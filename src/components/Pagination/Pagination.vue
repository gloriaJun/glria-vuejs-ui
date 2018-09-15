<template>
  <ul
    :class="classes"
    class="vu-pagination pagination">
    <li
        :class="{ disabled: current <= 1 }"
        class="page-item">
      <a
          class="page-link"
          href="#"
          @click.stop.prevent="handleClickPage(1)">&laquo;</a>
    </li>
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
    <li
        :class="{ disabled: current >= pageCount }"
        class="page-item">
      <a
          class="page-link"
          href="#"
          @click.stop.prevent="handleClickPage(pageCount)">&raquo;</a>
    </li>
  </ul>
</template>

<script>
import sizeUtility from '../../utils/size';
import alignUtility from '../../utils/align';

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
      validator: val => val % 1 === 0,
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
    /**
     * size
     */
    size: {
      type: String,
      validator: value => sizeUtility.isSizes(value),
    },
    /**
     * align
     */
    align: {
      type: String,
      validator: value => alignUtility.isAlign(value),
    },
  },
  data() {
    return {
      current: this.value,
      // The maximum pages that should be shown
      pageLinkCount: 7,
      ellipsisText: '&hellip;',
    };
  },
  computed: {
    classes() {
      return [
        { 'border-none': !this.border },
        this.size && `pagination-${this.size}`,
        alignUtility.class(this.align),
      ];
    },
    // total page size
    pageCount() {
      return Math.ceil(this.total / this.perPage);
    },
    // set page range
    pageRange() {
      let pages = [];
      const { pageLinkCount, pageCount, current } = this;
      const setPages = (from, to) => {
        const range = [];
        for (let i = from; i <= to; i++) range.push(i);
        return range;
      };

      if (pageCount <= pageLinkCount) {
        return setPages(1, pageCount);
      }

      const even = pageLinkCount % 2 === 0 ? 1 : 0;
      const prev = Math.floor(pageLinkCount / 2);
      const next = (pageCount - prev) + 1 + even;

      if (current >= prev && current <= next) {
        const start = (current - prev) + 2;
        const end = (current + prev) - 2 - even;
        pages = [
          1,
          this.ellipsisText,
          ...setPages(start, end),
          this.ellipsisText,
          pageCount,
        ];
      } else {
        pages = [
          ...setPages(1, prev),
          this.ellipsisText,
          ...setPages(next, pageCount),
        ];
      }

      return pages;
    },
  },
  watch: {
    value(val) {
      this.setCurrentPage(val);
    },
    current(value) {
      this.$emit('change', value);
      this.$emit('input', value);
      this.$emit('update', value);
    },
    perPage() {
      this.setCurrentPage(this.current);
    },
    total() {
      this.setCurrentPage(this.current);
    },

  },
  mounted() {
    this.setCurrentPage(this.current);
  },
  methods: {
    setCurrentPage(page) {
      this.current = (page > this.pageCount) ? this.pageCount : page;
    },
    /**
     * @event page-change
     * @description triggers when current-page changes
     * @param page
     */
    handleClickPage(page) {
      this.current = page;
      this.$emit('page-change', this.current);
    },
    /**
     * @event prev-click
     * @description triggers when the prev button
     */
    handleClickPrev() {
      this.current = this.current - 1;
      this.$emit('page-change', this.current);
      this.$emit('prev-click', this.current);
    },
    /**
     * @event next-click
     * @description triggers when the next button
     */
    handleClickNext() {
      this.current = this.current + 1;
      this.$emit('page-change', this.current);
      this.$emit('next-click', this.current);
    },
  },
};
</script>
