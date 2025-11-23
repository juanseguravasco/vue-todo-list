import axios from 'axios';
const SERVER_URL = 'http://localhost:3000';

const fetchTodos = async () => {
      const response = await axios.get(`${SERVER_URL}/todos`);
      return response.data;
};

const addTodo = async (todo) => {
  const response = await axios.post(`${SERVER_URL}/todos`, todo);
  return response.data;
};

const removeTodo = async (todoId) => {
  await axios.delete(`${SERVER_URL}/todos/${todoId}`);
};

const toggleTodoDone = async (todoId, done) => {
  const response = await axios.patch(`${SERVER_URL}/todos/${todoId}`, { done });
  return response.data;
}

export { fetchTodos, addTodo, removeTodo, toggleTodoDone };