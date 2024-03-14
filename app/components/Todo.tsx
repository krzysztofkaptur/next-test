'use client'

import Link from 'next/link'
import { updateTodo, deleteTodo } from '../services/todos'
import { usePathname, useRouter } from 'next/navigation'

export default function Todo({ item }: any) {
  const router = useRouter()
  const pathname = usePathname()

  function handleChange(e: any) {
    updateTodo(item.id, {
      completed: !item.completed
    }).then(() => {
      router.refresh()
    })
  }

  function handleDelete() {
    deleteTodo(item.id).then(() => {
      if (pathname.includes('/todos/')) {
        router.push('/')
      }
      router.refresh()
    })
  }

  return <li className="flex justify-between">
    <Link href={`/todos/${item.id}`}>{ item.title }</Link>
    <div className="flex gap-2">
      <input type="checkbox" checked={item.completed} onChange={handleChange} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  </li>
}