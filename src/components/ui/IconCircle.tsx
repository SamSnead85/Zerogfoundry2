import type { LucideIcon } from 'lucide-react'

interface IconCircleProps {
    icon: LucideIcon
    className?: string
}

export default function IconCircle({ icon: Icon, className = '' }: IconCircleProps) {
    return (
        <div className={`icon-circle ${className}`}>
            <Icon className="w-5 h-5 text-foreground" />
        </div>
    )
}
