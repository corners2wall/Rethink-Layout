import ArrowBottom from '../../assets/icons/ArrowBottom.svg?react'

interface SelectProps {
  value: string
  placeholder: string
  className?: string
}

export default function Select({ value, placeholder, className }: SelectProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        placeholder={placeholder}
        value={value}
        type="text"
        className={`w-full rounded-md border border-gray-200  py-2 pl-4 text-xs placeholder:text-gray-700`}
      />
      <ArrowBottom className="pointer-events-none absolute right-4 top-2/4 translate-y-[-50%]	" />
    </div>
  )
}
