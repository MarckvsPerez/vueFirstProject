<script setup>
import axios from 'axios'
import { ref } from 'vue';
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const poke = ref({})

const getData = async () => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    poke.value = data
  } catch (error) {
    console.error(error);
  }
}

const back = () => {
  router.push("/pokemons")
}

getData();
</script>

<template>
  <div>
    <img :src="poke.sprites?.front_default"/>
    <span>
      {{ $route.params.name }}
    </span>
    <button @click="back"> Volver</button>
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
