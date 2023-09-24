import { MediaType } from 'types/common'
import { MediaTypeMap } from './const'
import TrendingArrow from '../../assets/icons/TrendingArrow.svg?react'
import Column from 'components/Layout/Column'

interface TrendCardProps {
  type: MediaType
  isTrending: boolean
  title: string
  description: string
}

export default function TrendCard({
  type,
  isTrending,
  title,
  description
}: TrendCardProps) {
  const Icon = MediaTypeMap[type]

  return (
    <Column className="rounded-lg p-1.5 shadow">
      <div className="flex items-center justify-between pb-[18px] pr-[6px] lg:pb-8">
        <Icon className="h-4 w-4 lg:h-[24px] lg:w-[24px]" />
        {isTrending && <TrendingArrow />}
      </div>
      <Column className="items-start justify-start gap-3 font-raleway font-semibold">
        <span className="text-center text-sm text-slate-900 lg:text-xl">
          {title}
        </span>
        <div className="w-32 text-[11px] text-zinc-500 lg:w-[280px] lg:text-base">
          {description}
        </div>
      </Column>
    </Column>
  )
}
