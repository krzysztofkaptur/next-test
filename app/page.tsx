import { fetchTodos } from './services/todos';

import List from './components/List';
import AddTodo from './components/AddTodo'
import Nav from './components/Nav'

export const revalidate = 0

export default async function Home() {
  const data = await fetchTodos()

  return (
    <main className="flex justify-center">
      <div>
        <Nav />
        <div>
          <AddTodo />
          <List items={data} />
        </div>
      </div>
    </main>
  );
}
