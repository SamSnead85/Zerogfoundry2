import { motion } from 'framer-motion'

/**
 * CinematicHeroBackground - Premium cinematic hero background
 * Heavy atmospheric overlay with moody server room backdrop
 * Inspired by film poster aesthetics - Option C design
 */
export function CinematicHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Main background image - very subtle, moody */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1.02, opacity: 1 }}
                transition={{ duration: 3, ease: 'easeOut' }}
                className="absolute inset-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/hero-bg.png)',
                        filter: 'brightness(0.25) saturate(0.6) blur(2px)',
                    }}
                />
            </motion.div>

            {/* Deep cinematic gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        linear-gradient(
                            180deg,
                            rgba(5, 10, 20, 0.85) 0%,
                            rgba(5, 10, 20, 0.7) 30%,
                            rgba(5, 10, 20, 0.6) 50%,
                            rgba(5, 10, 20, 0.8) 80%,
                            rgba(5, 5, 5, 0.95) 100%
                        )
                    `,
                }}
            />

            {/* Subtle blue atmospheric glow - like distant light */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{
                    background: `
                        radial-gradient(
                            ellipse 80% 60% at 50% 60%,
                            rgba(59, 130, 246, 0.08) 0%,
                            transparent 70%
                        )
                    `,
                }}
            />

            {/* Heavy vignette for cinematic framing */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
                }}
            />

            {/* Top edge fade for nav integration */}
            <div
                className="absolute top-0 left-0 right-0 h-32"
                style={{
                    background: 'linear-gradient(to bottom, rgba(5,5,5,0.8) 0%, transparent 100%)',
                }}
            />
        </div>
    )
}
