import { ReactNode } from 'react'

interface TrendRowProps<T> {
  label: string
  items: T[]
  renderRowItem(item: T): ReactNode
}

export default function TrendRow<T>({
  label,
  items,
  renderRowItem
}: TrendRowProps<T>) {
  return (
    <div className="flex flex-col gap-3 font-raleway">
      <span className="text-sm font-semibold">{label}</span>
      {items.map(renderRowItem)}
    </div>
  )
}
