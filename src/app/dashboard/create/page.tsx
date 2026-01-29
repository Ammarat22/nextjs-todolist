import CreateTask from '@/components/dashboard/create-task';
import { ROUTES } from '@/utils/route';
import React from 'react'

export default function DashboardAddTask() {
    const { DASHBOARD_TASKS } = ROUTES;

    const handleAddTask = {
        label: 'Créer une tâche',
        paths: [
            {
                label: 'Créer une tâche',
                href: DASHBOARD_TASKS.CREATE
            },
        ],
    }
    return (
        <>
            <div className="flex min-h-screen flex-col items-center bg-blue-100 p-6">
                <div className="mb-5 flex flex-col items-center space-y-2">
                    <h2 className="text-3xl font-bold">Ajouter une tâche</h2>
                    <p className="text-center text-slate-600">
                        Créez une nouvelle tâche en remplissant le formulaire ci-dessous.</p>
                </div>
                <CreateTask className="max-w-4xl mx-auto mt-8"
                    navigateUrl={ROUTES.DASHBOARD_TASKS.LIST}
                    labelBtn="Ajouter la tâche" />
            </div>
        </>
    )
}
