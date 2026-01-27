'use client';

import SubHeader from "@/components/sub-header";
import TaskList from "@/components/task-list";
import { data } from "./data";
import SubMain from "@/components/sub-main";
import HeaderList from "@/components/header-list";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      <HeaderList />
      <SubHeader />
      <SubMain />
      <TaskList
        sectionList={data.taskListData.sectionList}
      />
    </div>
  );
}
