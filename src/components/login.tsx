"use client"

import {
    InputGroup,
    InputGroupInput,
} from "@/components/ui/input-group"

export function Login() {
    return (
        <div className="grid w-full max-w-sm gap-6">
            <InputGroup className="rounded-full mt-5">
                <InputGroupInput type="email" placeholder="Enter your email"/>
                <button type="submit" className='bg-orange-500 text-white px-4 py-1.5 font-bold rounded-full'>Get Started</button>
            </InputGroup>
        </div>
    )
}

