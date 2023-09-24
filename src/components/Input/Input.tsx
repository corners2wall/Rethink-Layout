import Search from '../../assets/icons/Search.svg?react'
interface InputProps {
  placeholder: string
}

export default function Input({ placeholder }: InputProps) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-[13px] top-2/4 translate-y-[-50%]	" />
      <input
        placeholder={placeholder}
        type="text"
        className="w-full rounded-md border border-gray-200  pb-[13px] pl-[44px] pt-[15px] text-xs placeholder:text-gray-700"
      />
    </div>
  )
}
