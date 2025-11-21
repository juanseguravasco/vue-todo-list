<script setup>
import DelAll from "./components/DelAll.vue";
import AddItem from "./components/AddItem.vue";
import TodoList from "./components/TodoList.vue";
</script>

<template>
  <div>
    <h2>Cosas a hacer este año:</h2>
    <todo-list />
    <add-item />

    <del-all />
  </div>
</template>

<style scoped>
button {
  margin-left: 10px;
}
</style>
