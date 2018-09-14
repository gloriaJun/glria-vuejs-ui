<template>
  <iframe
      :src='`https://codesandbox.io/embed/${hash}`'
      :style="style"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      class="code-sand-box">
  </iframe>
</template>

<script>
  export default {
    name: 'codeSandBox',
    props: {
      hash: {
        type: String,
        require: true,
      },
      height: {
        type: Number,
        default: 400,
      },
    },
    computed: {
      style() {
        return {
          height: `${this.height}px`,
        };
      },
    },
  };
</script>

<style lang="scss" scoped>
iframe.code-sand-box {
  width: 100%;
  border: 0;
  border-radius: 4px;
  overflow:hidden;
}
</style>
