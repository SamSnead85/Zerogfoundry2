import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Zap, Building2 } from 'lucide-react'

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

const caseStudies = [
    {
        industry: 'Healthcare',
        title: 'Health Plan Modernization',
        description: 'Transformed legacy claims processing system into an AI-native platform, reducing processing time by 85%.',
        metrics: [
            { label: 'Cost Reduction', value: '$52M' },
            { label: 'Processing Speed', value: '85%↑' },
            { label: 'Accuracy', value: '99.7%' }
        ],
        icon: Users
    },
    {
        industry: 'Financial Services',
        title: 'Intelligent Document Processing',
        description: 'Deployed enterprise-scale document AI across 200+ branches, automating manual workflows.',
        metrics: [
            { label: 'Documents/Day', value: '500K+' },
            { label: 'Manual Effort', value: '-92%' },
            { label: 'ROI Timeline', value: '6 mo' }
        ],
        icon: TrendingUp
    },
    {
        industry: 'Contact Center',
        title: 'AI-Powered Customer Experience',
        description: 'Implemented conversational AI handling 70% of customer inquiries with human-level satisfaction.',
        metrics: [
            { label: 'Automation Rate', value: '70%' },
            { label: 'CSAT Score', value: '4.8/5' },
            { label: 'Cost Savings', value: '$28M' }
        ],
        icon: Zap
    },
    {
        industry: 'Enterprise IT',
        title: 'Mainframe Modernization',
        description: 'Migrated critical mainframe applications to cloud-native architecture with zero downtime.',
        metrics: [
            { label: 'Uptime', value: '99.99%' },
            { label: 'TCO Reduction', value: '60%' },
            { label: 'Time to Market', value: '4x↑' }
        ],
        icon: Building2
    }
]

const stats = [
    { value: '$400M+', label: 'Client Value Delivered' },
    { value: '50+', label: 'Enterprise Transformations' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Combined Experience' }
]

export default function WorkPage() {
    return (
        <>
            <Helmet>
                <title>Our Work | Zero G Foundry</title>
                <meta name="description" content="Explore Zero G Foundry's enterprise AI transformation case studies. Real results from Fortune 500 companies." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16">
                <div className="container">
                    <Section>
                        <div className="max-w-3xl">
                            <span className="text-sm text-[var(--color-muted)] uppercase tracking-widest mb-6 block">
                                Our Work
                            </span>
                            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl mb-6">
                                Transformations<br />
                                <span className="text-gradient">That Deliver</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl">
                                We don't just build AI systems. We engineer measurable business outcomes that redefine what's possible.
                            </p>
                        </div>
                    </Section>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-[var(--color-border)]">
                <div className="container">
                    <Section>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-[var(--color-muted)]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24">
                <div className="container">
                    <Section className="mb-16">
                        <h2 className="heading-display text-3xl md:text-4xl mb-4">
                            Featured Transformations
                        </h2>
                        <p className="text-[var(--color-muted)] max-w-2xl">
                            Every engagement is unique. Here's how we've helped enterprises across industries unlock the power of AI.
                        </p>
                    </Section>

                    <div className="grid md:grid-cols-2 gap-8">
                        {caseStudies.map((study, i) => (
                            <Section key={i}>
                                <div className="card p-8 h-full group hover:border-[var(--color-primary)] transition-colors">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                                            <study.icon className="w-6 h-6 text-[var(--color-primary)]" />
                                        </div>
                                        <div>
                                            <span className="text-xs text-[var(--color-primary)] uppercase tracking-widest">
                                                {study.industry}
                                            </span>
                                            <h3 className="text-xl font-semibold">{study.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-[var(--color-muted)] mb-8">
                                        {study.description}
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--color-border)]">
                                        {study.metrics.map((metric, j) => (
                                            <div key={j} className="text-center">
                                                <div className="text-2xl font-bold text-[var(--color-foreground)]">
                                                    {metric.value}
                                                </div>
                                                <div className="text-xs text-[var(--color-muted)]">
                                                    {metric.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Section>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 border-t border-[var(--color-border)]">
                <div className="container">
                    <Section className="text-center">
                        <h2 className="heading-display text-3xl md:text-4xl mb-4">
                            Ready to Transform?
                        </h2>
                        <p className="text-[var(--color-muted)] max-w-xl mx-auto mb-8">
                            Let's discuss how we can help you achieve similar results for your organization.
                        </p>
                        <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                            Start Your Journey
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Section>
                </div>
            </section>
        </>
    )
}
