import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Send, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
}

const transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const
}

function Section({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={transition}
            className={className}
        >
            {children}
        </motion.section>
    )
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        title: '',
        message: '',
        budget: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Create mailto link with form data
        const subject = encodeURIComponent(`Enterprise AI Inquiry from ${formData.name} at ${formData.company}`)
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Company: ${formData.company}\n` +
            `Title: ${formData.title}\n` +
            `Budget Range: ${formData.budget}\n\n` +
            `Message:\n${formData.message}`
        )

        window.location.href = `mailto:sales@zerogfoundry.com?subject=${subject}&body=${body}`

        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
        }, 1000)
    }

    return (
        <>
            <Helmet>
                <title>Contact | Zero G Foundry</title>
                <meta name="description" content="Connect with Zero G Foundry to discuss your enterprise AI transformation. Let's engineer intelligence together." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16">
                <div className="container">
                    <Section>
                        <div className="max-w-3xl">
                            <span className="text-sm text-[var(--color-muted)] uppercase tracking-widest mb-6 block">
                                Let's Connect
                            </span>
                            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl mb-6">
                                Start Your<br />
                                <span className="text-gradient">Transformation</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl">
                                Every enterprise transformation begins with a conversation. Tell us about your vision, and we'll show you how to make it reality.
                            </p>
                        </div>
                    </Section>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-5 gap-16">
                        {/* Form */}
                        <Section className="lg:col-span-3">
                            {submitted ? (
                                <div className="card p-12 text-center">
                                    <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-8 h-8 text-[var(--color-primary)]" />
                                    </div>
                                    <h2 className="text-2xl font-semibold mb-4">Message Prepared</h2>
                                    <p className="text-[var(--color-muted)] mb-6">
                                        Your email client should open shortly. If it doesn't, please email us directly at{' '}
                                        <a href="mailto:sales@zerogfoundry.com" className="text-[var(--color-primary)] hover:underline">
                                            sales@zerogfoundry.com
                                        </a>
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn btn-ghost"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="card p-8 md:p-12">
                                    <h2 className="text-2xl font-semibold mb-8">Tell Us About Your Project</h2>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm text-[var(--color-muted)] mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="input w-full"
                                                placeholder="John Smith"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-[var(--color-muted)] mb-2">
                                                Work Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="input w-full"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm text-[var(--color-muted)] mb-2">
                                                Company *
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                required
                                                className="input w-full"
                                                placeholder="Acme Corporation"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-[var(--color-muted)] mb-2">
                                                Job Title
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                value={formData.title}
                                                onChange={handleChange}
                                                className="input w-full"
                                                placeholder="Chief Technology Officer"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm text-[var(--color-muted)] mb-2">
                                            Project Budget Range
                                        </label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="input w-full"
                                        >
                                            <option value="">Select a range</option>
                                            <option value="$100K - $250K">$100K - $250K</option>
                                            <option value="$250K - $500K">$250K - $500K</option>
                                            <option value="$500K - $1M">$500K - $1M</option>
                                            <option value="$1M - $5M">$1M - $5M</option>
                                            <option value="$5M+">$5M+</option>
                                        </select>
                                    </div>

                                    <div className="mb-8">
                                        <label className="block text-sm text-[var(--color-muted)] mb-2">
                                            Tell Us About Your Vision *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="input w-full resize-none"
                                            placeholder="Describe your transformation goals, current challenges, and what success looks like for your organization..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary w-full justify-center gap-2"
                                    >
                                        {isSubmitting ? 'Preparing Email...' : 'Send Message'}
                                        <ArrowRight className="w-4 h-4" />
                                    </button>

                                    <p className="text-xs text-[var(--color-muted)] text-center mt-4">
                                        By submitting, you agree to our privacy policy. We'll never share your information.
                                    </p>
                                </form>
                            )}
                        </Section>

                        {/* Contact Info */}
                        <Section className="lg:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-6">Direct Contact</h3>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:sales@zerogfoundry.com"
                                        className="flex items-center gap-4 p-4 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[var(--color-muted)]">Email</p>
                                            <p className="font-medium group-hover:text-[var(--color-primary)] transition-colors">
                                                sales@zerogfoundry.com
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-6">Location</h3>
                                <div className="flex items-start gap-4 p-4 rounded-lg border border-[var(--color-border)]">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-[var(--color-muted)]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[var(--color-muted)]">Headquarters</p>
                                        <p className="font-medium">Tampa, Florida</p>
                                        <p className="text-sm text-[var(--color-muted)]">Serving enterprises globally</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-6">Response Time</h3>
                                <div className="flex items-start gap-4 p-4 rounded-lg border border-[var(--color-border)]">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[var(--color-muted)]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[var(--color-muted)]">Typical Response</p>
                                        <p className="font-medium">Within 24 hours</p>
                                        <p className="text-sm text-[var(--color-muted)]">Business days</p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="pt-8 border-t border-[var(--color-border)]">
                                <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
                                <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                        Fortune 500 track record
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                        End-to-end transformation expertise
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                        Guaranteed measurable outcomes
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                        Senior-level engagement only
                                    </li>
                                </ul>
                            </div>
                        </Section>
                    </div>
                </div>
            </section>
        </>
    )
}
