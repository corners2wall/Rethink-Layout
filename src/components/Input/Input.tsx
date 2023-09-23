interface InputProps {
  placeholder: string
}

export default function Input({ placeholder }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className="rounded-md border border-gray-200  pb-[13px] pt-[15px] text-xs placeholder:text-gray-700"
    />
  )
}
