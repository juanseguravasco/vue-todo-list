<script setup>
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";

const todos = ref([
  { id: 1, title: "Learn JavaScript", done: false  },
  { id: 2, title: "Learn Vue", done: false  },
  { id: 3, title: "Play around in JSFiddle", done: true  },
  { id: 4, title: "Build something awesome", done: true  },
]);
</script>

<template>
  <ul v-if="todos.length">
    <todo-item v-for="todo in todos" :key="todo.id" :item="todo" />
  </ul>
  <p v-else>No hay tareas que mostrar</p>
</template>
