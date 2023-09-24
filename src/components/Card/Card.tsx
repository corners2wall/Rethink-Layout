interface CardProps {
  className: string
  children: React.ReactNode
}

export default function Card({ className, children }: CardProps) {
  return (
    <div className={`rounded-[20px] bg-zinc-100 shadow ${className}`}>
      {children}
    </div>
  )
}
