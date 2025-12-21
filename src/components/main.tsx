"use client"

import React from 'react'
import { Login } from './login'
import Image from 'next/image'

export default function Main() {
    return (
        <div className='flex flex-col items-center justify-center mt-32 px-10'>
            <div className='flex items-center justify-between mt-8'>
                <Image
                    src="/images/image2.png"
                    alt="Placeholder"
                    width={200}
                    height={200}
                    className="object-contain bg-blue-400 ml-6 mt-4"
                />
                <div className='flex flex-col items-center'>
                <p className='font-bold text-6xl'>To Do List</p>
                <button type="button"
                    className='bg-orange-500 text-white px-6 py-4 font-bold rounded-full text-6xl mt-1'>
                    Optimizer
                </button>
                </div>
                <Image
                    src="/images/image1.png"
                    alt="Placeholder"
                    width={200}
                    height={200}
                    className="object-contain bg-blue-400 ml-6 mt-4"
                />
            </div>
            <p className="text-gray-500 mt-3 text-center">
                This platform can determine the importance of your tasks,
                allowing you to be<br />
                more efficient in your daily operations.
            </p>
            <Login />
        </div>
    )
}
