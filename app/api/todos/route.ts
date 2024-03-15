import {db} from '@/app/db/index'
import { todos } from '@/app/db/schema'
import { asc } from 'drizzle-orm';

export async function GET(request: Request) {
  // const data = await fetch('http://localhost:5000/todos', {
  //   cache: "no-store"
  // }).then(res => res.json())
  const data = await db.query.todos.findMany({
    orderBy: [asc(todos.id)]
  })

  return Response.json(data)
}

export async function POST(request: Request) {
  const body = await request.json()

  // fetch("http://localhost:5000/todos", {
  //   method: "POST",
  //   body: JSON.stringify(body)
  // })

  await db.insert(todos).values({ title: body.title })

  return Response.json({})
}
