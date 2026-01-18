import type { LucideIcon } from 'lucide-react'

interface IconContainerProps {
    icon: LucideIcon
    className?: string
}

export default function IconContainer({ icon: Icon, className = '' }: IconContainerProps) {
    return (
        <div className={`icon-container ${className}`}>
            <Icon className="w-5 h-5" />
        </div>
    )
}
