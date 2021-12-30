<template>
  <div style="margin: 0 250px">
    <app-shared-grid></app-shared-grid>
  </div>
</template>

<script>
export default {
  name: "AngularApp",
  mounted() {
    import("angularHub/app").then((angularApp) => {
      angularApp.default();
    });
  },
};
</script>
