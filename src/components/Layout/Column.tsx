import { ForwardedRef, forwardRef } from 'react'

interface ColumnProps {
  className?: string
  children: React.ReactNode
  forwardRef?: any //ForwardedRef<HTMLDivElement>
}

function BaseColumn({ className, children }: ColumnProps) {
  return <div className={`flex flex-col ${className}`}>{children}</div>
}

// eslint-disable-next-line react/display-name
const Column = forwardRef<any, ColumnProps>((props, ref) => (
  <BaseColumn {...props} forwardRef={ref} />
))

export default Column
