<script setup>
import { store } from '../store';

const delTodos = () => {
  store.clearTodosAction();
};
</script>

<template>
  <button @click="delTodos">Borrar toda la lista</button>
</template>
