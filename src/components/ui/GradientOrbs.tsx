import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface GradientOrb {
    id: number
    x: number
    y: number
    size: number
    color: string
    delay: number
    duration: number
}

// Executive color palette - subtle navy and slate tones
const orbColors = [
    'rgba(30, 64, 115, 0.25)',   // Navy
    'rgba(51, 65, 85, 0.2)',     // Slate
    'rgba(71, 85, 105, 0.15)',   // Light Slate
    'rgba(100, 116, 139, 0.12)', // Silver Slate
]

export default function GradientOrbs({ count = 4 }: { count?: number }) {
    const orbs = useMemo<GradientOrb[]>(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: 15 + Math.random() * 70,
            y: 15 + Math.random() * 70,
            size: 300 + Math.random() * 300,
            color: orbColors[i % orbColors.length],
            delay: Math.random() * 3,
            duration: 25 + Math.random() * 15, // Much slower, more subtle
        }))
    }, [count])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    className="absolute rounded-full blur-[120px]"
                    style={{
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                        transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                        x: [0, 30, -20, 15, 0],
                        y: [0, -25, 15, -10, 0],
                        scale: [1, 1.08, 0.95, 1.04, 1],
                        opacity: [0.4, 0.5, 0.35, 0.45, 0.4],
                    }}
                    transition={{
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}
