type ButtonType = 'PRIMARY' | 'GHOST'

interface ButtonProps {
  type?: ButtonType
  label: string
  onClick?(): void
}

export default function Button({
  label,
  type = 'PRIMARY',
  onClick
}: ButtonProps) {
  const textClass = 'text-base font-semibold'

  return (
    <button
      className={`${textClass} ${ButtonClassNamesMap[type]}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

const ButtonClassNamesMap: Record<ButtonType, string> = {
  PRIMARY:
    'rounded-2xl bg-[#754DE8] px-12 py-[11px] text-center font-raleway text-xs font-medium leading-none text-white',
  GHOST:
    'rounded-2xl border-2 border-violet-600 bg-white px-12 py-3 text-violet-600'
}
