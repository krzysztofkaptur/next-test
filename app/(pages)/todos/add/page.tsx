import AddTodo from '@/app/components/AddTodo'
import Nav from '@/app/components/Nav'

export default function AddTodoPage() {
  return <main className="flex justify-center">
  <div>
    <Nav />
    <div>
      <AddTodo />
    </div>
  </div>
</main>
}