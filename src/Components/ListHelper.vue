<template>
  <!-- <slot></slot> -->
  <slot name="header"></slot>
  <h1>List helper</h1>
  <slot name="pera"></slot>
  <slot name="other">Loading....</slot>
</template>

<script>
export default {};
</script>
<style scoped>
ul li {
  color: red;
}
</style>