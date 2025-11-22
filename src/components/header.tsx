import { Funnel } from 'lucide-react'
import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-between px-10 py-5'>
            <div className='flex gap-7 font-bold items-center'>
                <div className="p-3 bg-amber-600 rounded-full inline-flex items-center justify-center">
                    <Funnel size={18} className="text-white" />
                </div>
                <div className='text-3xl'>ToDo<span className='text-amber-600'>lt</span></div>
                <p className='text-amber-600'>Home</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Testimonials</p>
            </div>
                <button className='bg-orange-500 text-white px-6 py-3 font-bold rounded-full'>Download App</button>
        </div>
    )
}
