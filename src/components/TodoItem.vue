<script setup>
import { defineProps } from "vue";
import { store } from "../store";

const props = defineProps({
  item: Object,
});

const delTodo = () => {
  store.removeTodoAction(props.item);
};
const toogleDone = () => {
  props.item.done = !props.item.done;
};
</script>
<template>
  <li>
    <label>
      <del v-if="item.done">
        {{ item.title }}
      </del>
      <span v-else>
        {{ item.title }}
      </span>
    </label>
    <button @click="toogleDone()">
      {{ item.done ? "No Hecha" : "Hecha" }}
    </button>
    <button @click="delTodo()">Borrar</button>
  </li>
</template>
