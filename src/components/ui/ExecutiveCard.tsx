import type { ReactNode } from 'react'

interface ExecutiveCardProps {
    children: ReactNode
    className?: string
}

export default function ExecutiveCard({ children, className = '' }: ExecutiveCardProps) {
    return (
        <div className={`card-executive p-6 ${className}`}>
            {children}
        </div>
    )
}
