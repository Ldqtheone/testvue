<template>
  <div class="compteur">
    <input v-model="age">
    <h1 v-if="age <= 29">J'ai {{ age }} ans et je suis jeune</h1>
    <h1 v-else>J'ai {{ age }} ans et je suis Antony !</h1>

    <button @click="increm">Incrémente !</button>
    <button @click="decrem">Decrémente !</button>
  </div>
</template>

<script>

export default {
  name: "Compteur",
  data() {
    return {
      age: 30
    }
  },
  methods: {
    increm() {
      this.age++;
      console.log("Compteur + 1");
    },

    decrem() {
      this.age--;
      console.log("Compteur - 1");
    }
  }
}

</script>

<style scoped>

</style>