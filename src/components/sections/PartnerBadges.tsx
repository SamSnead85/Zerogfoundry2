import { motion } from 'framer-motion'

// Partner logos represented as text for now (could be replaced with actual SVGs)
const partners = [
    { name: 'NVIDIA', tier: 'Partner' },
    { name: 'Google Cloud', tier: 'Partner' },
    { name: 'AWS', tier: 'Partner' },
    { name: 'Microsoft Azure', tier: 'Partner' },
]

export function PartnerBadges() {
    return (
        <section className="py-12 border-y border-[var(--color-border)]">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-mono mb-8">Strategic Technology Partners</p>
                    <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <span className="text-xl font-semibold text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors">
                                    {partner.name}
                                </span>
                                <span className="text-xs text-[var(--color-subtle)]">
                                    {partner.tier}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
