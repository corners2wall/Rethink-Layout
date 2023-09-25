type ButtonType = 'PRIMARY' | 'GHOST'

interface ButtonProps {
  type?: ButtonType
  label: string
  onClick?(): void
  buttonType?: 'submit' | 'reset' | 'button'
}

export default function Button({
  label,
  type = 'PRIMARY',
  buttonType = 'button',
  onClick
}: ButtonProps) {
  const textClass = 'text-base font-semibold'

  return (
    <button
      className={`${textClass} ${ButtonClassNamesMap[type]}`}
      onClick={onClick}
      type={buttonType}
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
