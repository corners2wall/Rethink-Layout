import Column from 'components/Layout/Column'
import { ReactNode } from 'react'
import { useScrollContainer } from 'react-indiana-drag-scroll'

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
  const scrollContainer = useScrollContainer()
  console.log(scrollContainer)

  return (
    <Column className="gap-3 pb-6 font-raleway lg:gap-5">
      <span className="text-sm font-semibold text-zinc-600 lg:text-xl">
        {title}
      </span>
      <div
        className="flex w-full gap-3 overflow-x-auto pb-3"
        ref={scrollContainer as any}
      >
        {items.map(renderRowItem)}
      </div>
    </Column>
  )
}
