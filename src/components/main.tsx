import React from 'react'
import { Login } from './login'

export default function Main() {
    return (
        <div className='flex flex-col items-center justify-center mt-32 px-10'>
            <p className='font-bold text-5xl'>To Do List</p>
            <button className='bg-orange-500 text-white px-6 py-2 font-bold rounded-full text-5xl mt-1'>Optimizer</button>
            <p className="text-gray-500 mt-3 text-center">
                This platform can determin the importance of your tasks,
                allowing you to be<br />
                more efficient in your dally operations.
            </p>
            <Login />
        </div>
    )
}
