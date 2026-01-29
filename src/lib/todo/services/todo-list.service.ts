import { TodoListDto } from "../models/todo-list.model";



const API_URL = 'http://localhost:8080/api/todolist';

export const fetchTodoLists = (order?: string): Promise<TodoListDto[]> => {
  const url = order ? `${API_URL}?order=${order}` : API_URL;
  return fetch(url).then((res) => res.json());
}
export const getAllTodoLists = async (
    order?: 'asc' | 'desc',
): Promise<TodoListDto[]> => {
  const response = await fetch(API_URL);
    return response.json();
}
