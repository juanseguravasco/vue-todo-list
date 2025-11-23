import { createRouter, createWebHistory } from 'vue-router'
import AddItem from "../views/AddItem.vue";
import TodoList from "../views/TodoList.vue";
import AppAbout from "../views/AppAbout.vue";
import ViewItem from "../views/ViewItem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoList,
    },
    {
      path: '/add',
      name: 'new-task',
      component: AddItem,
    },
    {
      path: '/view/:id',
      name: 'view-task',
      component: ViewItem,
    },
    {
      path: '/about',
      name: 'about',
      component: AppAbout,
    },
  ],
})

export default router
