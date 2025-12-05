import { BellDot } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 border-b'>
        <p className='font-bold text-2xl'>Todo List</p>
        <p> <BellDot /><span>avatar</span></p>
    </div>
  )
}
