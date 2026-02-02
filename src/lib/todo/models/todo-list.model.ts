export interface TodoListDto {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;

  color?: string;
}

export interface TodoListReqDto {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  color?: string;
}
