"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export function UpdateTask({
  task,
  className,
  ...props
}: {
  task: {
    id: number
    title: string
    description: string
    startTime: string
    endTime: string
  }
} & React.ComponentProps<"div">) {
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [startTime, setStartTime] = useState(task.startTime)
  const [endTime, setEndTime] = useState(task.endTime)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:8080/api/todolist/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, startTime, endTime }),
      })
      if (!response.ok) {
        const errorData = await response.json()
        console.error("Error updating task:", errorData)
        return
      }
      const updatedTask = await response.json()
      console.log("Task updated successfully:", updatedTask)
      router.push("/dashboard")
    } catch (error) {
      console.error("Network error:", error)
    }
    console.log({
      id: task.id,
      title,
      description,
      startTime: startTime,
      endTime: endTime,

    })
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Edit Task</CardTitle>
          <CardDescription>
            Update the information of your task
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Task details
              </FieldSeparator>
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                  id="title"
                  type="text"
                  placeholder="Task title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Input
                  id="description"
                  type="text"
                  placeholder="Task description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="startTime">Start Time</FieldLabel>
                <Input
                  id="startTime"
                  type="time"
                  placeholder="Estimated time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="endTime">End Time</FieldLabel>
                <Input
                  id="endTime"
                  type="time"
                  placeholder="Estimated time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </Field>
              <Field>
                <Button type="submit" className="w-full">
                  Update Task
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        Make sure all fields are correct before saving your changes.
      </FieldDescription>
    </div>
  )
}
