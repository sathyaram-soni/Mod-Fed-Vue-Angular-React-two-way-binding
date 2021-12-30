<template>
  <div ref="reactPlaceholder"></div>
</template>

<script>
export default {
  name: "ReactApp",
  mounted() {
    import("reactCalc/app").then((reactApp) => {
      reactApp.default(this.$refs.reactPlaceholder);
    });
  },
};
</script>
