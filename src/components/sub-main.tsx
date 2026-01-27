import React from 'react'
import { Button } from './ui/button'

export default function SubMain()  {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row p-4">
      <Button variant="outline">Active Task </Button>
      <Button variant="outline" aria-label="Submit" className='opacity-65'>
        Completed
      </Button>
    </div>
  )
}
