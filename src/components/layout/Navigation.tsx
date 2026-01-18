import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/approach' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
]

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    return (
        <>
            <header className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
                <nav className="container">
                    <div className="flex items-center justify-between h-12">
                        {/* Logo */}
                        <Link to="/" className="font-medium tracking-tight">
                            Zero G Foundry
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-sm transition-colors duration-200 ${location.pathname === link.href
                                            ? 'text-[var(--color-foreground)]'
                                            : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" className="btn btn-primary text-sm py-2 px-5">
                                Contact
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Full Screen Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-[var(--color-background)] lg:hidden"
                    >
                        <div className="container h-full flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between h-12 py-6">
                                <Link to="/" className="font-medium tracking-tight">
                                    Zero G Foundry
                                </Link>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                                >
                                    Close
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex-1 flex flex-col justify-center">
                                <nav className="space-y-4">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1, duration: 0.4 }}
                                        >
                                            <Link
                                                to={link.href}
                                                className="block heading-display text-4xl py-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>

                            {/* Footer */}
                            <div className="py-8 border-t border-[var(--color-border)]">
                                <Link to="/contact" className="btn btn-primary w-full justify-center">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
