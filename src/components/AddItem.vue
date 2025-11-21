<script setup>
import { ref } from 'vue';

const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({ title: newTodo.value.trim(), done: false });
    newTodo.value = "";
  }
};
</script>
<template>
  <div>
    <input v-model="newTodo" placeholder="Add new item" />
    <button @click="addTodo">Add</button>
  </div>
</template>