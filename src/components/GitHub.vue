<template>
  <div class="gitHub">
    <label for="githubPseudo">Pseudo GitHub : </label>
    <input type="text" v-model="githubPseudo" id="githubPseudo">
    <button @click="getGitInfos">GitHub</button>
    <button @click="getGitInfosFetch">GitHub par Fetch</button>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "GitHub",
  data() {
    return {
      githubPseudo: "",
      errors : []
    }
  },
  methods: {
    getGitInfos() {
      axios.get(`https://api.github.com/users/` + this.githubPseudo)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            this.errors.push(e);
            this.$store.commit('displayError', e)

          })

      this.$store.commit('resetValues')
    },
    getGitInfosFetch() {
      fetch(`https://api.github.com/users/` + this.githubPseudo)
          .then((data) => data.json())
          .then((users) => {
            console.log(users);
          })
          .catch(e => {
            this.errors.push(e);
            this.$store.commit('displayError', e)

          })

      this.$store.commit('resetValues')
    }
  }
}
</script>

<style scoped>

</style>