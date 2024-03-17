import {db} from '@/app/db/index'
import { todos } from '@/app/db/schema'
import { eq } from 'drizzle-orm';

type Params = {
  params: {
    id: string
  }
}

export async function PATCH(request: Request, { params }: Params) {
  const body = await request.json()

  // fetch(`http://localhost:5000/todos/${params.id}`, {
  //   method: "PATCH",
  //   body: JSON.stringify(body)
  // })

  await db.update(todos).set({completed: body.completed}).where(eq(todos.id, +params.id))

  return Response.json({})
}

export async function DELETE(request: Request, {params}: Params) {
  // fetch(`http://localhost:5000/todos/${params.id}`, {
  //   method: "DELETE"
  // })
  await db.delete(todos).where(eq(todos.id, +params.id))

  return Response.json({})
}

export async function GET(request: Request, { params }: Params) {
  // const data = await fetch(`http://localhost:5000/todos/${params.id}`).then(res => res.json())
  const data = await db.query.todos.findFirst({where: eq(todos.id, +params.id)})

  return Response.json(data)
}