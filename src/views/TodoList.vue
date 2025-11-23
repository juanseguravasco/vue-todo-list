<script setup>
import { computed, onMounted } from "vue";
import { store } from "../store/index.js";
import TodoItem from "../components/TodoItem.vue";

onMounted(async () => {
  try {
    await store.fetchTodosAction();
  } catch (error) {
    alert("Error fetching todos: " + error.message);
  }
});
const todos = computed(() => store.state.todos);
</script>

<template>
  <h2>Lista de Tareas</h2>
  <ul v-if="todos.length">
    <todo-item v-for="todo in todos" :key="todo.id" :item="todo" />
  </ul>
  <p v-else>No hay tareas que mostrar</p>
</template>
