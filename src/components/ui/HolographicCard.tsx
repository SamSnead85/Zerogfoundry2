import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface HolographicCardProps {
    children: ReactNode
    className?: string
}

export default function HolographicCard({ children, className = '' }: HolographicCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 })
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 })

    const gradientX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
    const gradientY = useTransform(mouseY, [-0.5, 0.5], [0, 100])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <motion.div
            ref={cardRef}
            className={`holographic-card ${className}`}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="holographic-shine"
                style={{
                    background: useTransform(
                        [gradientX, gradientY],
                        ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 25%, transparent 50%)`
                    ),
                }}
            />
            <div className="holographic-content" style={{ transform: 'translateZ(50px)' }}>
                {children}
            </div>
            <div className="holographic-border" />
            <style>{`
                .holographic-card {
                    position: relative;
                    border-radius: 24px;
                    background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(139, 92, 246, 0.2);
                    overflow: hidden;
                    cursor: pointer;
                    transition: box-shadow 0.3s ease;
                }
                
                .holographic-card:hover {
                    box-shadow: 
                        0 0 30px rgba(139, 92, 246, 0.3),
                        0 0 60px rgba(6, 182, 212, 0.2),
                        inset 0 0 30px rgba(139, 92, 246, 0.1);
                }
                
                .holographic-shine {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 1;
                }
                
                .holographic-content {
                    position: relative;
                    z-index: 2;
                }
                
                .holographic-border {
                    position: absolute;
                    inset: -2px;
                    border-radius: 26px;
                    background: linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5), rgba(139, 92, 246, 0.5));
                    z-index: -1;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .holographic-card:hover .holographic-border {
                    opacity: 1;
                    animation: border-rotate 3s linear infinite;
                }
                
                @keyframes border-rotate {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `}</style>
        </motion.div>
    )
}
