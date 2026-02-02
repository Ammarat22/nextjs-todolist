import { UpdateTask } from '@/components/dashboard/update-task'
import { getTodoListById } from '@/lib/todo/services/todo-list.service'
import { GalleryVerticalEnd } from 'lucide-react'
import { notFound } from 'next/navigation'

export default async function DashboardUpdateTask({
   params,
}: {
   params: Promise<{ id: string }>
}) {
  const { id: idString } = await params
  const id = Number(idString)
  if (isNaN(id)) {
    notFound()
  }
  const task = await getTodoListById(id)
  if (!task) {
    notFound()
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Acme Inc.
        </a>
        <UpdateTask task={task} />
      </div>
    </div>
  )
}