import { ChevronDown, Plus, Search } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'

export default function SubHeader() {
  return (
    <div className='flex justify-between items-center p-3 border-b'>
      <div className='flex justify-between items-center font-semibold text-lg gap-1'>21stFeb,2025 <ChevronDown size={20}/></div>
      <div className='flex justify-between items-center gap-4'>
        <div className="relative ms-2">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search List"
            className="w-[240px] font-medium pl-8"
          />
        </div>
        <button className='flex justify-between items-center text-sm rounded-md text-white px-2 py-2 gap-1.5 bg-blue-700'><Plus size={16} /> Add New List</button>
      </div>
    </div>
  )
}
