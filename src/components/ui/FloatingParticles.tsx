import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface Particle {
    id: number
    x: number
    y: number
    size: number
    delay: number
    duration: number
    opacity: number
}

export default function FloatingParticles({ count = 20 }: { count?: number }) {
    const particles = useMemo<Particle[]>(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 6 + 10, // Slower, more refined
            opacity: Math.random() * 0.3 + 0.1,
        }))
    }, [count])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: 'rgba(255, 255, 255, 0.6)',
                        boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, 0.2)`,
                    }}
                    animate={{
                        y: [0, -15, 5, -10, 0],
                        x: [0, 5, -5, 3, 0],
                        opacity: [particle.opacity, particle.opacity + 0.15, particle.opacity, particle.opacity + 0.1, particle.opacity],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}
