'use client';

import Header from "@/components/header";
import SubHeader from "@/components/sub-header";
import TaskList from "@/components/task-list";
import { data } from "./data";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SubHeader />
      <TaskList
        sectionList={data.taskListData.sectionList}
      />
    </div>

  );
}
