import { motion } from 'framer-motion'

/**
 * HeroBackground - Subtle animated hero background
 * Uses the zero gravity datacenter transformation image
 * with gentle motion effects that don't distract from content
 */
export function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Main background image with subtle zoom animation */}
            <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                className="absolute inset-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/hero-bg.png)',
                        filter: 'brightness(0.3) saturate(0.8)',
                    }}
                />
            </motion.div>

            {/* Subtle floating particle effect */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-[var(--color-accent)]"
                        style={{
                            left: `${10 + (i * 6)}%`,
                            bottom: `${20 + (i % 5) * 15}%`,
                            opacity: 0.3 + (i % 3) * 0.1,
                        }}
                        animate={{
                            y: [0, -100 - (i * 20), -200 - (i * 30)],
                            opacity: [0.4, 0.6, 0],
                            scale: [1, 1.5, 0.5],
                        }}
                        transition={{
                            duration: 8 + (i % 4) * 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: 'easeOut',
                        }}
                    />
                ))}
            </div>

            {/* Subtle light beam glow animation */}
            <motion.div
                className="absolute left-1/2 bottom-0 w-32 h-full -translate-x-1/2"
                style={{
                    background: 'linear-gradient(to top, transparent 0%, rgba(100, 180, 255, 0.05) 30%, rgba(100, 180, 255, 0.1) 50%, transparent 70%)',
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Gradient overlay to ensure text readability */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)',
                }}
            />

            {/* Subtle vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
                }}
            />
        </div>
    )
}
