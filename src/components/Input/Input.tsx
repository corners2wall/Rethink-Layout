import { HTMLInputTypeAttribute } from 'react'
import Search from '../../assets/icons/Search.svg?react'
interface InputProps {
  placeholder: string
  className?: string
  inputType?: HTMLInputTypeAttribute
  onChange?(): void
}

export default function Input({
  placeholder,
  className,
  inputType = 'text',
  onChange
}: InputProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="pointer-events-none absolute left-[13px] top-2/4 translate-y-[-50%]	" />
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={inputType}
        className="w-full rounded-md border border-gray-200  pb-[13px] pl-[44px] pt-[15px] text-xs placeholder:text-gray-700"
      />
    </div>
  )
}
