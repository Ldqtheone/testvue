<template>
  <div>
    <span class="errorMessage">{{$store.getters.errorMessage}}</span>
  </div>
</template>

<script>
export default {
  name: "ErrorDiv",
}
</script>

<style scoped>
  .errorMessage{
    color: red;
    font-size: 12px;
    font-weight: bold;
  }
</style>