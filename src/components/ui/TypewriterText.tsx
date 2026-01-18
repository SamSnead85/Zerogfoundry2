import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TypewriterTextProps {
    phrases: string[]
    className?: string
    typingSpeed?: number
    deletingSpeed?: number
    pauseDuration?: number
}

export default function TypewriterText({
    phrases,
    className = '',
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 2000
}: TypewriterTextProps) {
    const [currentPhrase, setCurrentPhrase] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 530)
        return () => clearInterval(cursorInterval)
    }, [])

    useEffect(() => {
        const phrase = phrases[currentPhrase]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < phrase.length) {
                    setDisplayText(phrase.slice(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration)
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setCurrentPhrase((prev) => (prev + 1) % phrases.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentPhrase, phrases, typingSpeed, deletingSpeed, pauseDuration])

    return (
        <span className={`typewriter-container ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={displayText}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    className="typewriter-text"
                >
                    {displayText}
                </motion.span>
            </AnimatePresence>
            <span
                className={`typewriter-cursor ${showCursor ? 'visible' : 'invisible'}`}
                style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1em',
                    background: 'linear-gradient(to bottom, #8b5cf6, #06b6d4)',
                    marginLeft: '2px',
                    verticalAlign: 'middle',
                    borderRadius: '2px',
                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
                }}
            />
        </span>
    )
}
