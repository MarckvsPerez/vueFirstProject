<script setup>
import {ref} from 'vue';

const name = 'Vue 3';
const cuenta = ref(0);

const sumar = () => {
  cuenta.value++;
};
const restar = () => {
  cuenta.value--;
};
const reiniciar = () => {
  cuenta.value = 0;
};
</script>

<template>
  <h1>
    Hola {{ name.toUpperCase() }}
  </h1>
  <h2>{{ cuenta }}</h2>
  <br>
  <button @click.right.prevent="sumar">
    Sumar
  </button>
  <button @click.left="restar">
    Resta
  </button>
  <button @click.middle="reiniciar">
    Reiniciar
  </button>
</template>

<style>
h1 {
  color: red;
}
</style>
