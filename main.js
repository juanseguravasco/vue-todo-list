Vue.createApp({
  data() {
    return {
      newTodo: '',
      todos: [
        { 
          id: 1,
          title: "Learn JavaScript", 
          done: false 
        }, { 
          id: 2,
          title: "Learn Vue", 
          done: false 
        }, { 
          id: 3,
          title: "Play around in JSFiddle", 
          done: true 
        }, { 
          id: 4,
          title: "Build something awesome", 
          done: true 
        }
      ]
    }
  },
  methods: {
  	delTodo(index){
    	this.todos.splice(index,1);
    },
    addTodo() {
    	if (this.newTodo) {
	    	this.todos.push({title: this.newTodo, done: false});
  	    this.newTodo='';      
      }
    },
    delTodos() {
      if (confirm('¿Deseas borrar toda la lista de cosas a hacer?')) {
      	this.todos=[];
      }
    }
  }
}).mount('#app')