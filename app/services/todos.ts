export function addTodo(data: any) {
  return fetch("http://localhost:5000/todos", {
    method: "POST",
    body: JSON.stringify(data)
  })
}

export function fetchTodos() {
  return fetch('http://localhost:5000/todos').then(res => res.json())
}

export function updateTodo(id: any, data:any) {
  return fetch(`http://localhost:5000/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data)
  })
}

export function deleteTodo(id: any) {
  return fetch(`http://localhost:5000/todos/${id}`, {
    method: "DELETE"
  })
}

export function fetchTodo(id: any) {
  return fetch(`http://localhost:5000/todos/${id}`).then(res => res.json())
}