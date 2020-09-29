<template>
  <div id="home">
    <h1> {{msg}} </h1>
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
  props: {
    msg: String
  },
  data() {
    return {
      films: [],
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
      axios.get('https://pifogroup-7b34b.firebaseio.com/users-new.json')
          .then(response => {
            this.films = response.data;
          })
          .catch(e => {
            this.errors.push(e);
            this.$store.commit('displayError', e)
          });
      this.$store.commit('resetValues');
    }
  }
}

</script>

<style scoped>

</style>