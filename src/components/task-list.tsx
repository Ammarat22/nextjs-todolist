"use client"

import React from 'react'
import { Edit, Trash } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Field } from './ui/field';
import { Button } from './ui/button';
import ConfirmDelete from './confirm-delete';
import { useRouter } from 'next/navigation';

export interface TaskListProps {
    sectionList: {
        id: number;
        title: string;
        description: string;
        startTime: string;
        endTime: string;
        createdAt: string;
        updatedAt: string;
        color?: string;
    }[];
};
export default function TaskList({
    sectionList,
}: TaskListProps) {
    const router = useRouter();
    const formtTime = (time: string) =>
        new Date(`1970-01-01T${time}`).toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    const handleEdit = (id: number) => {
        router.push(`/dashboard/update/${id}`);
    }
    const colors = ["bg-blue-200", "bg-purple-200", "bg-yellow-100", "bg-pink-200", "bg-green-200"];
    const handleDelete = async (id: number) => {
        await fetch(`http://localhost:8080/api/todolist/${id}`, {
            method: "DELETE",
        })
        router.refresh();
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-[1100px]'>
            {sectionList.map((item, index) => (
                <div
                    key={item.id}
                    className={`${colors[index % colors.length]} justify-between items-center p-2 mb-2 rounded-lg`}
                >
                    <div className='px-2 mb-2'>
                        <div className="flex justify-between items-center font-bold mb-1">
                            <Field orientation="horizontal">
                                <Checkbox
                                    id={`checkbox-${item.id}`}
                                    name={`checkbox-${item.id}`}
                                    className='bg-white text-white'
                                />{item.title}
                            </Field>
                            <div className='flex gap-2'>
                                <Button variant="ghost" size="icon" onClick={() => handleEdit(item.id)}
                                    className="text-blue-600 hover:text-blue-700">
                                    <Edit className='w-4 h-4 mr-1' />
                                </Button>
                                <ConfirmDelete
                                    onConfirm={() => handleDelete(item.id)} />
                            </div>
                        </div>
                        <p className="p-1 text-sm opacity-75">{item.description}</p>
                        <p className='p-1 font-medium text-sm opacity-75'> {
                            item.startTime && item.endTime
                                ? `${formtTime(item.startTime)} - ${formtTime(item.endTime)}`
                                : 'No time specified'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

