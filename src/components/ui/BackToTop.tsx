import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

/**
 * BackToTop - Premium back to top button
 * Appears after scrolling past 600px
 */
export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 600)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-[var(--color-elevated)] border border-[var(--color-border)] shadow-lg hover:shadow-xl hover:border-[var(--color-border-hover)] transition-all flex items-center justify-center group"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-foreground)] transition-colors" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
