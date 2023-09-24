import Column from 'components/Layout/Column'
import { ReactNode } from 'react'

interface TrendRowProps<T> {
  title: string
  items: T[]
  renderRowItem(item: T): ReactNode
}

export default function TrendRow<T>({
  title,
  items,
  renderRowItem
}: TrendRowProps<T>) {
  return (
    <Column className="gap-3 pb-9 font-raleway ">
      <span className="text-sm font-semibold text-zinc-600">{title}</span>
      <div className="flex gap-3">{items.map(renderRowItem)}</div>
    </Column>
  )
}
