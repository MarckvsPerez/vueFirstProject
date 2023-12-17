<script setup>
import axios from "axios";
import { ref } from "vue";
import {RouterLink} from "vue-router"

const pokemons = ref([])

const getData = async () => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    pokemons.value = data.results;
  } catch (error) {
    console.error(error);
  }
}

getData()
</script>

<template>
  <div class="about">
    <ul>
      <li v-for="poke in pokemons" :key="poke.name">
        <router-link :to="`/pokemons/${poke.name}`">
          {{ poke.name }}
        </router-link> 
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
