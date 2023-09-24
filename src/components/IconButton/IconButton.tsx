interface IconButtonProps {
  icon: any //React.ReactNode
  onClick?(): void
}

export default function IconButton({ icon: Icon, onClick }: IconButtonProps) {
  return (
    <button
      className="inline-block rounded-lg p-6 hover:bg-violet-100"
      onClick={onClick}
    >
      <Icon className="h-[22px] w-[22px]" />
    </button>
  )
}
