<template>
  <div>
    <span class="errorMessage">{{errorMessage}}</span>
  </div>
</template>

<script>
export default {
name: "ErrorDiv",
  data() {
    return {
      errorMessage: "",
    }
  }
}
</script>

<style scoped>

</style>