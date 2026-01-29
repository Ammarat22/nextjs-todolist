import { TodoListDto } from "../models/todo-list.model";
import axios from 'axios';


const API_URL = 'http://localhost:8080/api/todolist';

export const fetchTodoLists = (order?: string): Promise<TodoListDto[]> => {
  const url = order ? `${API_URL}?order=${order}` : API_URL;
  return fetch(url)
  .then((res) => res.json());
}

export const getAllTodoLists = async (
  order?: 'asc' | 'desc',
): Promise<TodoListDto[]> => {
  try {
    const response = await axios.get<TodoListDto[]>(API_URL, { params: { order } });
    return response.data;
  } catch (error) {
    console.error('Erreur getAllTodoLists:', error);
    return [];
  }
};
