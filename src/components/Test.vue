<template>
  <div class="mainContainer">
    <div class="hello">
      <input v-model="age">
      <h1 v-if="age <= 29">J'ai {{ age }} ans et je suis jeune</h1>
      <h1 v-else>J'ai {{ age }} ans et je suis Antony !</h1>

      <ul>
        <li v-for="(fruit, index) of fruits" v-bind:key="index">
          <span v-if="fruit.color === 'green'">
            {{index}} - <span class="fruitName">{{fruit.name}}</span> : {{fruit.color}}
          </span>
        </li>
      </ul>

      <button @click="increm">Incremente !</button>
      <button @click="decrem">Decremente !</button>
    </div>
    <br>
    <div class="course">
      <label for="article"> Article à ajouter : </label>
      <input type="text" id="article" v-model="article" @keyup.enter="courseEdit(1)">
      <br>
      <span class="errorMessage">{{errorMessage}}</span>
      <ul>
        <li v-for="(courseArticle, index) of courses" v-bind:key="index" @click="courseEdit(2, index)">
          {{index}} - <span> {{courseArticle}}</span>
        </li>
      </ul>
      <button @click="courseEdit(1)">Ajouter</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Test",
  data() {
    return {
      age: 30,
      article: "",
      errorMessage: "",
      courses: [],
      fruits: [
        {
          name: "apple",
          color: 'green',
        },
        {
          name: "pear",
          color: 'green',
        },
        {
          name: "orange",
          color: 'orange',
        }]
      }
    },
    methods: {
      increm() {
        this.age ++;
        console.log("Compteur + 1");
      },

      decrem() {
        this.age --;
        console.log("Compteur - 1");
      },

      courseEdit(action, index = 0) {
        if(action === 1){
          if(this.article !== "") {
            this.courses.push(this.article);
            this.resetValues();
          }
          else{
            this.errorMessage = "Vous devez renseigner un article !";
          }
        }
        else{
          this.courses.splice(index, 1);
          this.resetValues();
        }
      },
      resetValues(){
        this.article = "";
        this.errorMessage = "";
      }
    }
}
</script>

<style scoped>
  .errorMessage{
    color: red;
    font-size: 12px;
    font-weight: bold;
  }
</style>