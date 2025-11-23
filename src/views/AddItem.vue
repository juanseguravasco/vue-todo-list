<script setup>
import { ref } from 'vue';
import { store } from '../store';

const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value.trim()) {
    store.addTodoAction({ title: newTodo.value.trim(), done: false });
    newTodo.value = "";
  }
};
</script>
<template>
  <div>
    <h2>Añadir Tarea</h2>
    <input v-model="newTodo" placeholder="Add new item" />
    <button @click="addTodo">Add</button>
  </div>
</template>