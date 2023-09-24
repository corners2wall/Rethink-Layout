interface ColumnProps {
  className: string
  children: React.ReactNode
}

export default function Column({ className, children }: ColumnProps) {
  return <div className={`flex flex-col ${className}`}>{children}</div>
}
