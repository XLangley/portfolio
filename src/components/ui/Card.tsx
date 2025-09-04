import { type PropsWithChildren } from "react"

export default function Card({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 ${className}`}>
      {children}
    </div>
  )
}
