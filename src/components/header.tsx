import { BellDot } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 border-b'>
      <p className='font-bold text-2xl'>Todo List</p>
      <p className='flex justify-between items-center gap-3'>
        <BellDot size={20} />
        <Image
          src="/images/fille.jpg"
          alt="Placeholder"
          width={200}
          height={200}
          className='rounded-full w-7 h-7 object-cover'
        /></p>
    </div>
  )
}



