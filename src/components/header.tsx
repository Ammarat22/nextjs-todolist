import { BellDot } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 border-b'>
        <p className='font-bold text-2xl'>Todo List</p>
        <p className='flex justify-between items-center gap-2'> <BellDot size={20}/><span>avatar</span></p>
    </div>
  )
}
