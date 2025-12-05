import {ChevronDown, Plus } from 'lucide-react'
import React from 'react'

export default function SubHeader() {
  return (
    <div className='flex justify-between items-center p-3 border-b'>
      <div className='flex justify-between items-center font-semibold gap-2'>21stFeb,2025 <ChevronDown /></div>
      <div>
        <button className='flex border rounded-lg p-2 gap-1.5'><Plus /> Add New List</button>
      </div>
    </div>
  )
}
