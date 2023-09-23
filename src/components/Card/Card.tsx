import Pencil from '../../assets/icons/Pencil.svg?react'

interface CardProps {
  type: string
}

export default function Card({}: CardProps) {
  return (
    <div className="inline-flex flex-col rounded-lg bg-white p-1.5 shadow">
      <div className="flex items-center justify-between pb-[18px] pr-[6px]">
        <Pencil />
        <Pencil />
      </div>
      <div className="flex h-20 flex-col items-start justify-start gap-3">
        <span className="text-center font-['Raleway'] text-sm font-semibold text-slate-900">
          Blog writing
        </span>
        <div className="w-32 font-['Raleway'] text-xs text-zinc-500">
          Generate the best blog post to fit your audience with just few clicks
          of a button
        </div>
      </div>
    </div>
  )
}
