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

type Props = {
  className?: string
  onSuccess?: () => void
}

export function CreateTask({
  className,
  onSuccess,
  ...props
}: Props & React.ComponentProps<"div">) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    /*
      // Validation : endTime est obligatoire
      if (!endTime) {
        setError("L'heure de fin est obligatoire")
        return
      }
  */
    setLoading(true)

    console.log("Payload envoyé :", { title, description, startTime, endTime })
    try {
      const response = await fetch("http://localhost:8080/api/todolist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, startTime, endTime }),
      })
      if (!response.ok) {
        const errorData = await response.json()
        console.error("Erreur backend:", errorData)
        setError(errorData.message || "Erreur lors de la création")
        return
      }
      const data = await response.json()
      console.log("Task created:", data)
      router.push("/dashboard")
    } catch (err) {
      console.error("Erreur réseau:", err)
      setError("Erreur de connexion au serveur")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create Task</CardTitle>
          <CardDescription>
            Fill in the form to create a new task
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
                  Create Task
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        After creation, the task will appear in your task list.
      </FieldDescription>
    </div>
  )
}

