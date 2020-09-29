<template>
  <div id="home">
    <Compteur />
    <Courses />
    <GitHub />
    <ErrorDiv />
    <Films v-bind:filmList="this.films"/>
    <button @click="getFilmsTitles">Click</button>
  </div>
</template>

<script>

import Compteur from './Compteur.vue'
import Courses from './Courses.vue'
import GitHub from './GitHub.vue'
import ErrorDiv from './ErrorDiv.vue'
import Films from './Films.vue'

import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      films: []
    }
  },
  components: {
    Compteur,
    Courses,
    GitHub,
    ErrorDiv,
    Films
  },
  mounted() {
    this.getFilmsTitles();
  },
  methods: {
    getFilmsTitles() {
      axios.get('https://api.github.com/users/Ldqtheone')
          .then(response => {
            this.films.push(response.data);
            console.log(this.films);
          })
          .catch(e => {
            this.errors.push(e);
            this.$store.commit('displayError', e)
          })
      this.$store.commit('resetErrors');
    }
  }
}

</script>

<style scoped>

</style>