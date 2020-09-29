<template>
  <div>
    <h2> Liste des Films : </h2>
    <ul>
      <li v-for="(film, index) of filmList" v-bind:key="index">
        Created : {{film.created_at | reformatDate}}
        <br>
        Updated : {{film.updated_at | reformatDate}}
      </li>
    </ul>
  </div>
</template>

<script>

import moment from 'moment-timezone';
moment.locale("fr");

export default {

  name: "Films",
  props: {
    filmList: Array
  },
  filters: {
    reformatDate: function (value) {
      if (!value)
        return 'Aucune date à afficher';

      return moment(value).format('LLLL');
    }
  }
}

</script>

<style scoped>

</style>