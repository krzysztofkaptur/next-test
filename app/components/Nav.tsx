import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between gap-4">
      <Link href="/">Home</Link>
      <Link href="/todos/add">Add</Link>
    </nav>
  )
}