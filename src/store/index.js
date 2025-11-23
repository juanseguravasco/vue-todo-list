import { reactive } from "vue";

export const store = {
  debug: true,
  state: reactive({
    todos: [
      { id: 1, title: "Learn JavaScript", done: false },
      { id: 2, title: "Learn Vue", done: false },
      { id: 3, title: "Play around in JSFiddle", done: true },
      { id: 4, title: "Build something awesome", done: true },
    ],
  }),
  addTodoAction(newTodo) {
    if (this.debug) console.log("addTodoAction triggered with ", newTodo);
    this.state.todos.push(newTodo);
  },
  removeTodoAction(todoToRemove) {
    if (this.debug)
      console.log("removeTodoAction triggered with ", todoToRemove);
    this.state.todos = this.state.todos.filter((todo) => todo !== todoToRemove);
  },
  clearTodosAction() {
    if (this.debug) console.log("clearTodosAction triggered");
    this.state.todos = [];
  },
};
