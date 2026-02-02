import HeaderList from "@/components/header-list";
import SubHeader from "@/components/sub-header";
import SubMain from "@/components/sub-main";
import TaskList from "@/components/task-list";
import { getAllTodoLists } from "@/lib/todo/services/todo-list.service";

export default async function DashboardPage() {
  const tasks = await getAllTodoLists();
  return (
    <div className="flex flex-col h-screen">
      <HeaderList />
      <SubHeader />
      <SubMain />
      <TaskList sectionList={tasks} />
    </div>
  );
}
