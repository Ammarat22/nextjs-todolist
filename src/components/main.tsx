"use client"

import React from 'react'
import Image from 'next/image'
import { InputGroup, InputGroupInput } from './ui/input-group'

export default function Main() {
    return (
        <div className='flex flex-col items-center justify-center mt-32 px-10'>
            <div className='flex items-center justify-between w-full max-w-lg'>
                <Image
                    src="/images/im.png"
                    alt="Placeholder"
                    width={100}
                    height={100}
                    className="object-contain -translate-y-10"
                />
                <div className='flex flex-col items-center'>
                    <p className='font-bold text-6xl'>To Do List</p>
                    <button type="button"
                        className='bg-orange-500 text-white px-6 py-4 font-bold rounded-full text-6xl mt-1'>
                        Optimizer
                    </button>
                    <p className="text-gray-500 mt-3 text-center">
                        This platform can determine the importance of your tasks,
                        allowing you to be
                        more efficient in your daily operations.
                    </p>
                </div>
                <Image
                    src="/images/image4.png"
                    alt="Placeholder"
                    width={100}
                    height={100}
                    className="object-contain mb-14"
                />
            </div>
            <div className="grid w-full max-w-sm gap-6">
                <InputGroup className="rounded-full mt-5">
                    <InputGroupInput type="email" placeholder="Enter your email" />
                    <button type="submit" className='bg-orange-500 text-white px-4 py-1.5 font-bold rounded-full'>Get Started</button>
                </InputGroup>
            </div>
        </div>
    )
}
