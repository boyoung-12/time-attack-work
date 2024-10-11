import axios from "axios";

export const getTodoList = () => {
  const response = axios.get("http://localhost:4000/todos");
  return response.todos;
};

export const postTodoList = () => {
  const response = axios.post("http://localhost:4000/todos", 새로운투두객체);
  return response.todos;
};
