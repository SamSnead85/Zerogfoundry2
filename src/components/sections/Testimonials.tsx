import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
    {
        quote: "ZeroG Foundry transformed our approach to AI. Their team delivered measurable ROI within the first quarter.",
        author: "Chief Digital Officer",
        company: "Fortune 100 Healthcare Company",
        metric: "340% ROI in 6 months"
    },
    {
        quote: "The strategic clarity and execution excellence was unlike anything we'd experienced with other consultancies.",
        author: "VP of Technology",
        company: "Global Financial Services Firm",
        metric: "60% faster deployment"
    },
    {
        quote: "They don't just advise—they embed with your team and deliver real solutions that work at enterprise scale.",
        author: "CTO",
        company: "Fortune 500 Retailer",
        metric: "$50M+ annual savings"
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function Testimonials() {
    return (
        <section className="section-lg bg-[var(--color-surface)]">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <p className="text-mono mb-4">Client Success</p>
                        <h2 className="heading-display heading-lg">
                            Trusted by industry leaders
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-[var(--color-elevated)] border border-[var(--color-border)] rounded-xl p-6 lg:p-8 relative"
                            >
                                <Quote className="w-8 h-8 text-[var(--color-accent)] opacity-40 mb-4" />
                                <blockquote className="text-lg mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="border-t border-[var(--color-border)] pt-4">
                                    <p className="font-medium">{testimonial.author}</p>
                                    <p className="text-small mb-3">{testimonial.company}</p>
                                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium">
                                        {testimonial.metric}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
