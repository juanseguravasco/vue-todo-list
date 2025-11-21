<script setup>
import { ref } from "vue";

const todos = ref([
  { id: 1, title: "Learn JavaScript", done: false },
  { id: 2, title: "Learn Vue", done: false },
  { id: 3, title: "Play around in JSFiddle", done: true },
  { id: 4, title: "Build something awesome", done: true },
]);

const delTodo = (index) => {
  todos.value.splice(index, 1);
};
const toogleDone = (todo) => {
  todo.done = !todo.done;
};

const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({ title: newTodo.value.trim(), done: false });
    newTodo.value = "";
  }
};

const delTodos = () => {
  todos.value = [];
};
</script>

<template>
  <div>
    <h2>Cosas a hacer este año:</h2>
    <ul v-if="todos.length">
      <li v-for="(todo, index) in todos" :key="todo.id">
        <label>
          <del v-if="todo.done">
            {{ todo.title }}
          </del>
          <span v-else>
            {{ todo.title }}
          </span>
        </label>
        <button @click="toogleDone(todo)">
          {{ todo.done ? "No Hecha" : "Hecha" }}
        </button>
        <button @click="delTodo(index)">Borrar</button>
      </li>
    </ul>
    <p v-else>No hay tareas que mostrar</p>

    <div>
      <input v-model="newTodo" placeholder="Add new item" />
      <button @click="addTodo">Add</button>
    </div>

    <button @click="delTodos">Borrar toda la lista</button>
  </div>
</template>

<style scoped>
button {
  margin-left: 10px;
}
</style>