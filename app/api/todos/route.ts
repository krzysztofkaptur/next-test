export async function GET(request: Request) {
  const data = await fetch('http://localhost:5000/todos', {
    cache: "no-store"
  }).then(res => res.json())

  return Response.json(data)
}

export async function POST(request: Request) {
  const body = await request.json()

  fetch("http://localhost:5000/todos", {
    method: "POST",
    body: JSON.stringify(body)
  })

  return Response.json({})
}

