'use client';

import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to Todo List App</h1>
      </main>
    </div>
    //  --- IGNORE ---  
    
  );
}
