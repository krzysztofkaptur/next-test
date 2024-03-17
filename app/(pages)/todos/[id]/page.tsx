import Nav from '@/app/components/Nav'
import Todo from '@/app/components/Todo'
import { fetchTodo, fetchTodos } from '@/app/services/todos'
import { notFound } from 'next/navigation'

export const revalidate = 0

export async function generateStaticParams() {
  const todos = await fetch("http://localhost:5000/todos").then(res => res.json())

  return todos.map((todo: any) => ({id: todo.id}))
}

export default async function AddTodoPage({ params: { id } }: any) {
  const todo = await fetchTodo(id)

  if (!todo) notFound()

  return <main className="flex justify-center">
  <div>
    <Nav />
    <div>
      <Todo item={todo} />
    </div>
  </div>
</main>
}