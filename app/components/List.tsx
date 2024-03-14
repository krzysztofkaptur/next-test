import Todo from './Todo'

export default function List({ items }: any) {
  return <ul>
    {
      items.map((item: any) => (
        <Todo key={item.id} item={item} />
      ))
    }
  </ul>
}