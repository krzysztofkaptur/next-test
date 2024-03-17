'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { addTodo } from '../services/todos'

export default function AddTodo() {
  const [value, setValue] = useState('')
  const router = useRouter()
  
  function handleChange(e: any) {
    setValue(e.target.value)
  }

  function onSubmit(e: any) {
    e.preventDefault()

    addTodo({
      title: value,
      completed: false,
    }).then(() => {
      setValue('')
      router.push("/")
      router.refresh()
    })
  }

  return (
    <form onSubmit={onSubmit} className="mb-4">
      <div className="flex gap-2">
        <div>
          <input type="text" placeholder="New todo" value={value} onChange={handleChange} className="text-black" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  )
}