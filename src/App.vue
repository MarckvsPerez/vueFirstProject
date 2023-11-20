<script setup>
import {ref, computed} from 'vue';

const name = 'Vue 3';
const cuenta = ref(0);
const favNumbers = ref([]);

const sum = () => {
  cuenta.value++;
};
const substract = () => {
  cuenta.value--;
};
const restart = () => {
  cuenta.value = 0;
};

const classCounter = computed(() => {
  if (cuenta.value === 0) return 'zero';
  if (cuenta.value > 0) return 'positive';
  else return 'negative';
});

const enableAddButton = computed(() => {
  if (favNumbers.value.includes(cuenta.value)) return true;
  else return false;
});

const addNumber = () => {
  favNumbers.value.push(cuenta.value);
};

</script>

<template>
  <div class="title">
    <h1>
      Hola {{ name.toUpperCase() }}
    </h1>
    <h2 :class="classCounter">
      Cuenta:
      {{ cuenta }}
    </h2>
  </div>
  <div class="controller">
    <button
      class="btn btn-primary"
      @click="sum"
    >
      Sumar
    </button>
    <button
      class="btn btn-primary"
      @click="substract"
    >
      Resta
    </button>
    <button
      class="btn btn-primary"
      @click="restart"
    >
      Reiniciar
    </button>
    <button
      class="btn btn-success"
      :disabled="enableAddButton"
      @click="addNumber"
    >
      Añadir
    </button>
  </div>
  <ul class="list-group">
    <template
      v-for="number in favNumbers"
      :key="number"
    >
      <li class="list-group-item">
        {{ number }}
      </li>
    </template>
  </ul>
</template>

<style>
div {
  text-align: center;
}

li {
  list-style: none;
}

.title {
  text-align: center;
}

.controller button {
  margin: 5px;
}

.positive {
  color: green;
}

.negative {
  color: red;
}

.zero {
  color: blue;
}

.list-group {
  width: 400px;
  margin: auto;
}
</style>
