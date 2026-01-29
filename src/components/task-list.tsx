import React from 'react'
import { Ellipsis, Square } from 'lucide-react'

export interface TaskListProps {
    sectionList: {
        id: number;
        title: string;
        description: string;
        time: string;
        color?: string;
    }[];
};
export default function TaskList({
    sectionList,
}: TaskListProps) {

    const colors = ["bg-blue-200", "bg-purple-200", "bg-yellow-100", "bg-pink-200", "bg-green-200"];
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-[1100px]'>
            {sectionList.map((item, index) => (
                <div
          key={item.id}
          className={`${colors[index % colors.length]} justify-between items-center p-2 mb-2 rounded-lg`}
        >
                <div className='px-2 mb-2'>
                    <div className="flex justify-between items-center font-bold mb-1">
                        <p className='flex items-center gap-2'> <Square size={14} className='bg-white text-white' /> {item.title} </p>
                        <Ellipsis />
                    </div>
                    <p className="p-1 text-sm opacity-75">{item.description}</p>
                    <p className='pt-2 font-medium text-sm'>{item.time}</p>
                </div>
            </div>
            ))} 
        </div>
    )
}