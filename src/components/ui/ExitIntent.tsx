import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * ExitIntent - Premium exit intent modal
 * Triggers when mouse moves toward browser chrome (leaving page)
 */
export function ExitIntent() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasTriggered, setHasTriggered] = useState(false)

    useEffect(() => {
        // Check if already dismissed in this session
        const dismissed = sessionStorage.getItem('exitIntentDismissed')
        if (dismissed) return

        const handleMouseLeave = (e: MouseEvent) => {
            // Only trigger if mouse is moving toward top of screen (browser chrome)
            if (e.clientY <= 5 && !hasTriggered) {
                setIsVisible(true)
                setHasTriggered(true)
            }
        }

        // Delay adding listener to avoid triggering immediately
        const timeout = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave)
        }, 5000) // Wait 5 seconds before enabling

        return () => {
            clearTimeout(timeout)
            document.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [hasTriggered])

    const handleClose = () => {
        setIsVisible(false)
        sessionStorage.setItem('exitIntentDismissed', 'true')
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 max-w-lg w-full shadow-2xl"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center">
                            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                                Before you go...
                            </h2>
                            <p className="text-[var(--color-muted)] mb-6">
                                Get our latest insights on enterprise AI transformation delivered to your inbox. No spam, just strategic intelligence.
                            </p>

                            <form className="space-y-4 mb-6">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--color-elevated)] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full justify-center"
                                >
                                    Subscribe to Insights
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>

                            <div className="border-t border-[var(--color-border)] pt-4">
                                <p className="text-sm text-[var(--color-muted)] mb-3">
                                    Or schedule a conversation with our team
                                </p>
                                <Link
                                    to="/contact"
                                    onClick={handleClose}
                                    className="text-sm text-[var(--color-accent)] hover:underline"
                                >
                                    Start your transformation →
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
