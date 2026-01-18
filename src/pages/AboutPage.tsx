import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Shield, Lightbulb, Users, Award, Globe } from 'lucide-react'

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

const values = [
    {
        icon: Target,
        title: 'Outcome-Obsessed',
        description: 'We measure success by your results, not our effort. Every engagement is tied to measurable business outcomes.'
    },
    {
        icon: Shield,
        title: 'Enterprise-Grade',
        description: 'Security, compliance, and scalability are built in from day one. We understand what enterprises demand.'
    },
    {
        icon: Lightbulb,
        title: 'Innovation Forward',
        description: 'We stay at the bleeding edge of AI capabilities so you don\'t have to. What\'s next is already in our toolkit.'
    },
    {
        icon: Users,
        title: 'Partnership Mindset',
        description: 'We embed with your teams, transfer knowledge, and build internal capabilities that outlast our engagement.'
    }
]

const expertise = [
    'Enterprise AI Strategy',
    'Generative AI Implementation',
    'LLM Fine-tuning & Deployment',
    'AI-Powered Process Automation',
    'Computer Vision Solutions',
    'Natural Language Processing',
    'MLOps & AI Infrastructure',
    'Legacy System Modernization'
]

export default function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About Us | Zero G Foundry</title>
                <meta name="description" content="Zero G Foundry is an enterprise AI transformation consultancy. We engineer intelligence that drives measurable business outcomes." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16">
                <div className="container">
                    <Section>
                        <div className="max-w-3xl">
                            <span className="text-sm text-[var(--color-muted)] uppercase tracking-widest mb-6 block">
                                About Us
                            </span>
                            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl mb-6">
                                We Engineer<br />
                                <span className="text-gradient">Intelligence</span>
                            </h1>
                            <p className="text-xl text-[var(--color-muted)] max-w-2xl">
                                Zero G Foundry is a specialized AI consultancy focused on one thing: transforming enterprises through intelligent systems that deliver measurable outcomes.
                            </p>
                        </div>
                    </Section>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 border-t border-[var(--color-border)]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <Section>
                            <span className="text-sm text-[var(--color-primary)] uppercase tracking-widest mb-4 block">
                                Our Mission
                            </span>
                            <h2 className="heading-display text-3xl md:text-4xl mb-6">
                                Making AI Transformation Predictable
                            </h2>
                            <p className="text-[var(--color-muted)] mb-4">
                                Most AI initiatives fail. Not because of technology—but because of poor strategy, unrealistic expectations, and implementation gaps. We exist to change that.
                            </p>
                            <p className="text-[var(--color-muted)]">
                                We bring together deep technical expertise with battle-tested methodologies to ensure every engagement delivers on its promise. No pilot purgatory. No science projects. Just outcomes.
                            </p>
                        </Section>

                        <Section>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Award, label: 'Proven Track Record', value: '50+' },
                                    { icon: Globe, label: 'Global Reach', value: '12' },
                                    { icon: Users, label: 'Senior Experts', value: '100%' },
                                    { icon: Target, label: 'Success Rate', value: '98%' }
                                ].map((item, i) => (
                                    <div key={i} className="card p-6 text-center">
                                        <item.icon className="w-8 h-8 mx-auto mb-4 text-[var(--color-primary)]" />
                                        <div className="text-3xl font-bold mb-1">{item.value}</div>
                                        <div className="text-xs text-[var(--color-muted)]">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24">
                <div className="container">
                    <Section className="text-center mb-16">
                        <span className="text-sm text-[var(--color-primary)] uppercase tracking-widest mb-4 block">
                            Our Values
                        </span>
                        <h2 className="heading-display text-3xl md:text-4xl mb-4">
                            What We Stand For
                        </h2>
                        <p className="text-[var(--color-muted)] max-w-xl mx-auto">
                            Principles that guide every decision and every engagement.
                        </p>
                    </Section>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <Section key={i}>
                                <div className="card p-6 h-full">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                                        <value.icon className="w-6 h-6 text-[var(--color-primary)]" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                                    <p className="text-sm text-[var(--color-muted)]">{value.description}</p>
                                </div>
                            </Section>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 border-t border-[var(--color-border)]">
                <div className="container">
                    <Section className="mb-16">
                        <span className="text-sm text-[var(--color-primary)] uppercase tracking-widest mb-4 block">
                            Our Expertise
                        </span>
                        <h2 className="heading-display text-3xl md:text-4xl mb-4">
                            What We Do Best
                        </h2>
                        <p className="text-[var(--color-muted)] max-w-xl">
                            Deep technical capabilities across the full AI/ML stack.
                        </p>
                    </Section>

                    <Section>
                        <div className="flex flex-wrap gap-4">
                            {expertise.map((item, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 rounded-full border border-[var(--color-border)] text-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Section>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 border-t border-[var(--color-border)]">
                <div className="container">
                    <Section className="text-center">
                        <h2 className="heading-display text-3xl md:text-4xl mb-4">
                            Let's Build Something Great
                        </h2>
                        <p className="text-[var(--color-muted)] max-w-xl mx-auto mb-8">
                            Ready to transform your enterprise with AI? We'd love to hear about your vision.
                        </p>
                        <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                            Get in Touch
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Section>
                </div>
            </section>
        </>
    )
}
