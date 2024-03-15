type Params = {
  params: {
    id: string
  }
}

export async function PATCH(request: Request, { params }: Params) {
  const body = await request.json()

  fetch(`http://localhost:5000/todos/${params.id}`, {
    method: "PATCH",
    body: JSON.stringify(body)
  })

  return Response.json({})
}

export async function DELETE(request: Request, {params}: Params) {
  fetch(`http://localhost:5000/todos/${params.id}`, {
    method: "DELETE"
  })

  return Response.json({})
}

export async function GET(request: Request, { params }: Params) {
  const data = await fetch(`http://localhost:5000/todos/${params.id}`).then(res => res.json())

  return Response.json(data)
}