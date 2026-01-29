export interface TodoListDto {
  id: number;
  title: string;
  time: string;
  description: string;
  color?: string;
}

export interface TodoListReqDto {
  title: string;
  time: string;
  description: string;
  color?: string;
}
