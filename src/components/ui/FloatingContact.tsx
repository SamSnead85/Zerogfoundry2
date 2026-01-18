import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * FloatingContact - A premium floating contact button
 * Appears after scrolling past hero section
 */
export function FloatingContact() {
    const [isVisible, setIsVisible] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 400px
            setIsVisible(window.scrollY > 400)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <AnimatePresence mode="wait">
                        {isExpanded ? (
                            <motion.div
                                key="expanded"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-2xl min-w-[280px]"
                            >
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="absolute top-4 right-4 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                                <h3 className="font-medium text-lg mb-2">Ready to transform?</h3>
                                <p className="text-sm text-[var(--color-muted)] mb-4">
                                    Let's discuss how AI can drive results for your organization.
                                </p>
                                <div className="space-y-2">
                                    <Link
                                        to="/contact"
                                        className="btn btn-primary w-full justify-center text-sm"
                                        onClick={() => setIsExpanded(false)}
                                    >
                                        Start a conversation
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="https://calendly.com/zerogfoundry"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-ghost w-full justify-center text-sm"
                                    >
                                        Schedule a call
                                    </a>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.button
                                key="collapsed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsExpanded(true)}
                                className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
                                aria-label="Contact us"
                            >
                                <MessageCircle className="w-6 h-6" />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
