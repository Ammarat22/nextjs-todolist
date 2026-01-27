import { LayoutList } from 'lucide-react'
import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-between items-center py-4 px-14'>
            <div className='flex justify-between items-center font-bold gap-10 text-gray-700 text-md'>
                <div className="flex items-center gap-2 text-2xl font-bold">
                    <span className="border rounded-full p-2 flex items-center justify-center text-white bg-orange-500">
                        <LayoutList size={20} />
                    </span>
                    <span>
                        ToDo<span className="text-orange-500">lt</span>
                    </span>
                </div>
                <span className='text-orange-500'>Home</span>
                <span>Features</span>
                <span>Pricing</span>
                <span>Testimonials</span>
            </div>
            <button type="submit"
                className='bg-orange-500 text-white px-4 py-2 font-semibold rounded-full'
            >
                Download App
            </button>
        </div>
    )
}
