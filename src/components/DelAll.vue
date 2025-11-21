<script setup>
const delTodos = () => {
  todos.value = [];
};
</script>

<template>
  <button @click="delTodos">Borrar toda la lista</button>
</template>
