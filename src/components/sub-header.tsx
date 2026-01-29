import { ChevronDown, Plus, Search } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import Link from 'next/link'

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
        <Link
          href="/dashboard/create"
          className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} />
          <span>Add New List</span>

        </Link>
      </div>
    </div>
  )
}
