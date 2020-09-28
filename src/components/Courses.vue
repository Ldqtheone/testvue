<template>
  <div class="course">
    <label for="article"> Article à ajouter : </label>
    <input type="text" id="article" v-model="article" @keyup.enter="courseEdit(1)">
    <br>
    <ul>
      <li v-for="(courseArticle, index) of courses" v-bind:key="index" @click="courseEdit(2, index)">
        {{index}} - <span> {{courseArticle}}</span>
      </li>
    </ul>
    <button @click="courseEdit(1)">Ajouter</button>
  </div>
</template>

<script>
export default {
name: "Courses",
  data() {
    return {
      article: "",
      courses: [],
      errorMessage: ""
    }
  },
  methods: {
    courseEdit(action, index = 0) {
      if (action === 1) {
        if (this.article !== "") {
          this.courses.push(this.article);
          this.article = "";
          this.errorMessage = "";
        } else {
          this.errorMessage = "Vous devez renseigner un article !";
        }
      } else {
        this.courses.splice(index, 1);
        this.article = "";
        this.errorMessage = "";
      }
    }
  }
}
</script>

<style scoped>

</style>