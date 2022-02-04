import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(1))

  return (
    <div className="flex justify-left mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
