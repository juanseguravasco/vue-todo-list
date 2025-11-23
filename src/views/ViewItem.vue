<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { store } from "../store/index.js";
const route = useRoute();
const id = route.params.id;


const todo = computed(() => {
  return store.getTodoById(id);
});
</script>

<template>
  <div>
    <h2>Tarea {{ id }}</h2>
    <p><strong>Título: </strong>{{ todo.title }}</p>
    <p><strong>Hecha: </strong>{{ todo.done ? "Sí" : "No" }}</p>
  </div>
</template>