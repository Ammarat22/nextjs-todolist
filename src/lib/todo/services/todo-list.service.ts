import { environment } from "@/config/environment.config";
import { TodoListDto, TodoListReqDto } from "../models/todo-list.model";
import axios from 'axios';


const {
  api: {
    rest: {
      endpoints: { todolist: todolistUrl },
    },
  },
} = environment;


export const fetchTodoLists = (order?: string): Promise<TodoListDto[]> => {
  return axios
    .get<TodoListDto[]>(todolistUrl, { params: { order } })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Erreur fetchTodoLists:', error);
      return [];
    });
};

export const getAllTodoLists = async (
  order?: 'asc' | 'desc',
): Promise<TodoListDto[]> => {
  return axios
    .get<TodoListDto[]>(`${todolistUrl}`, { params: { order } })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Erreur getAllTodoLists:', error);
      return [];
    });
};

export const getTodoListById = async (
  id: number,
): Promise<TodoListDto | null> => {
  return axios
    .get<TodoListDto>(`${todolistUrl}/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error('Erreur getTodoListById:', error);
      return null;
    });
}

export const createTodoList = async (
  todoList: Partial<TodoListReqDto>,
): Promise<TodoListDto | null> => {
  return axios
    .post<TodoListDto>(todolistUrl, todoList)
    .then((res) => res.data)
    .catch((error) => {
      console.error('Erreur createTodoList:', error);
      return null;
    });
};

export async function updateTodoList(
  id: number,
  todoList: Partial<TodoListReqDto>,
): Promise<TodoListDto | null> {
  return axios
    .put<TodoListDto>(`${todolistUrl}/${id}`, todoList)
    .then((res) => res.data)
    .catch((error) => {
      console.error('Erreur updateTodoList:', error);
      return null;
    });
};

export async function deleteTodoList(id: number): Promise<boolean> {
  return axios
    .delete(`${todolistUrl}/${id}`)
    .then(() => true)
    .catch((error) => {
      console.error('Erreur deleteTodoList:', error);
      return false;
    });
}