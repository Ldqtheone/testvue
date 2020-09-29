<template>
  <div>
    <h2> Liste des Films : </h2>
    <ul>
      <li v-for="(film, index) of filmList" v-bind:key="index">
        {{film.name}}
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: "Films",
  props: {
    filmList: Array
  }
}

</script>

<style scoped>

</style>