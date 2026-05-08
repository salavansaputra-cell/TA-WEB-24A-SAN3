interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/90 border border-slate-200 rounded-lg p-6 shadow-md ${className}`}>
      {children}
    </div>
  )
}