<script setup>
import { computed, ref } from "vue";
import { store } from "../store/index.js";
import TodoItem from "./TodoItem.vue";

const todos = computed(() => store.state.todos);
</script>

<template>
  <ul v-if="todos.length">
    <todo-item v-for="todo in todos" :key="todo.id" :item="todo" />
  </ul>
  <p v-else>No hay tareas que mostrar</p>
</template>
