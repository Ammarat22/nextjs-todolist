"use client"

import { useRouter } from "next/navigation"
import { CreateTask } from "@/components/dashboard/create-task"
import { ROUTES } from "@/utils/route"

export default function DashboardAddTask() {
    const { DASHBOARD_TASKS } = ROUTES
    const router = useRouter()
    const handleSuccess = () => {
        router.push(ROUTES.DASHBOARD_TASKS.LIST)
    }

    return (
        <div className="flex min-h-screen flex-col items-center bg-blue-100 p-6">
            <div className="mb-5 flex flex-col items-center space-y-2">
                <h2 className="text-3xl font-bold">Add Task</h2>
                <p className="text-center text-slate-600">
                    Create a new task by filling in the form below.
                </p>
            </div>
            <CreateTask
                className="max-w-4xl mx-auto mt-8"
                onSuccess={handleSuccess}
            />
        </div>
    )
}
