import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageTransitionProps {
    children: ReactNode
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 10
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
        }
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
        }
    }
}

/**
 * PageTransition - Wraps page content for smooth route transitions
 */
export function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
        >
            {children}
        </motion.div>
    )
}
