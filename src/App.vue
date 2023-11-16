<script setup>
const name = 'Vue 3';
const arrayColors = ['blue', 'red'];
const activo = true;
</script>

<template>
  <h1>
    Hola {{ name.toUpperCase() }}
  </h1>
  <br>
  <h2 :style="`color: ${arrayColors[0]}`">
    {{ activo ? "activo" : "inactivo" }}
  </h2>
</template>

<style>
h1 {
  color: red;
}
</style>
