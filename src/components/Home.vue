<template>
  <div id="home">
    <Compteur />
    <Courses />
    <GitHub />
    <ErrorDiv />
  </div>
</template>

<script>

import Compteur from './Compteur.vue'
import Courses from './Courses.vue'
import GitHub from './GitHub.vue'
import ErrorDiv from './ErrorDiv.vue'

export default {
  name: "Home",
  components: {
    Compteur,
    Courses,
    GitHub,
    ErrorDiv
  }
}

</script>

<style scoped>

</style>