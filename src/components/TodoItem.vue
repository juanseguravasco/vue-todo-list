<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { store } from "../store";

const props = defineProps({
  item: Object,
});
const router = useRouter();

const delTodo = () => {
  store.removeTodoAction(props.item.id);
};
const toggleDone = () => {
  store.toggleDoneAction(props.item.id, !props.item.done);
};
const viewTodo = () => {
  router.push(`/view/${props.item.id}`);
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
    <button @click="toggleDone()">
      {{ item.done ? "No Hecha" : "Hecha" }}
    </button>
    <button @click="delTodo()">Borrar</button>
    <button @click="viewTodo()">Ver</button>
  </li>
</template>
