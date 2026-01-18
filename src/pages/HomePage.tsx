import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { HeroBackground } from '../components/ui/HeroBackground'
import { LogosBanner } from '../components/ui/LogosBanner'
import { Testimonials } from '../components/sections/Testimonials'
import { PartnerBadges } from '../components/sections/PartnerBadges'

// Animation variants - smooth, not flashy
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
}

const transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const
}

// Section component for scroll-triggered animations
function Section({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
            }}
            className={className}
        >
            {children}
        </motion.section>
    )
}

export default function HomePage() {
    return (
        <main className="relative">
            {/* ====================================
                HERO SECTION
                Ciridae-inspired: Large type, intentional space
                ==================================== */}
            <section className="min-h-screen flex flex-col justify-center relative">
                {/* Animated hero background with datacenter transformation visual */}
                <HeroBackground />

                <div className="container relative z-10">
                    <div className="max-w-5xl">
                        {/* Label */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ ...transition, delay: 0.2 }}
                            className="text-mono mb-8"
                        >
                            Enterprise AI Consulting
                        </motion.p>

                        {/* Main headline */}
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ ...transition, delay: 0.4 }}
                            className="heading-display heading-xl mb-8"
                        >
                            We engineer intelligence
                            <br />
                            <span className="text-[var(--color-muted)]">that transforms enterprises.</span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ ...transition, delay: 0.6 }}
                            className="text-body max-w-xl mb-12"
                        >
                            From strategy to deployment. We build AI systems that deliver
                            measurable outcomes for Fortune 500 organizations.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ ...transition, delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link to="/contact" className="btn btn-primary">
                                Start a conversation
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/approach" className="btn btn-ghost">
                                Our approach
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />
                </motion.div>
            </section>

            {/* ====================================
                SELECTED WORK
                Editorial layout, case study focus
                ==================================== */}
            <Section className="section-lg">
                <div className="container">
                    <motion.div variants={fadeUp} className="mb-16">
                        <p className="text-mono mb-4">Selected Engagements</p>
                        <h2 className="heading-display heading-lg">
                            Outcomes we've delivered
                        </h2>
                    </motion.div>

                    <div className="space-y-px">
                        {[
                            {
                                client: "Fortune 100 Healthcare",
                                outcome: "Reduced diagnostic processing time by 60%",
                                type: "Computer Vision · MLOps"
                            },
                            {
                                client: "Global Financial Services",
                                outcome: "Achieved 99.9% accuracy in fraud detection",
                                type: "Machine Learning · Risk Analytics"
                            },
                            {
                                client: "Enterprise Technology",
                                outcome: "Automated 2.4M annual support interactions",
                                type: "NLP · Conversational AI"
                            }
                        ].map((project, i) => (
                            <motion.div
                                key={project.client}
                                variants={fadeUp}
                                transition={{ ...transition, delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="py-8 border-b border-[var(--color-border)] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 transition-all duration-300 group-hover:border-[var(--color-border-hover)]">
                                    <div className="flex-1">
                                        <p className="text-mono mb-2">{project.type}</p>
                                        <h3 className="heading-display text-2xl lg:text-3xl group-hover:translate-x-2 transition-transform duration-300">
                                            {project.outcome}
                                        </h3>
                                    </div>
                                    <div className="lg:text-right">
                                        <p className="text-body">{project.client}</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-[var(--color-muted)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 hidden lg:block" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div variants={fadeUp} className="mt-12">
                        <Link to="/work" className="link inline-flex items-center gap-2 text-small">
                            View all case studies
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </Section>

            {/* ====================================
                CAPABILITIES
                Bento-style grid, minimal
                ==================================== */}
            <Section className="section-lg">
                <div className="container">
                    <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
                        <p className="text-mono mb-4">What We Do</p>
                        <h2 className="heading-display heading-lg mb-6">
                            End-to-end AI transformation
                        </h2>
                        <p className="text-body">
                            We partner with enterprise leaders to design, build, and scale
                            AI systems that create lasting competitive advantage.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]">
                        {[
                            {
                                title: "Strategy",
                                description: "AI roadmaps aligned with business objectives. We identify high-impact opportunities and build the case for transformation."
                            },
                            {
                                title: "Architecture",
                                description: "Scalable AI infrastructure designed for enterprise. From data pipelines to model serving at scale."
                            },
                            {
                                title: "Development",
                                description: "Production-grade ML systems. Computer vision, NLP, predictive analytics, and custom solutions."
                            },
                            {
                                title: "Integration",
                                description: "Seamless deployment into existing systems. APIs, workflows, and enterprise tool connectivity."
                            },
                            {
                                title: "Operations",
                                description: "MLOps and ongoing optimization. Monitoring, retraining, and continuous improvement."
                            },
                            {
                                title: "Training",
                                description: "Team enablement and knowledge transfer. Build internal AI capabilities that last."
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={service.title}
                                variants={fadeUp}
                                transition={{ ...transition, delay: i * 0.05 }}
                                className="bg-[var(--color-surface)] p-8 lg:p-10"
                            >
                                <h3 className="heading-display text-xl mb-4">{service.title}</h3>
                                <p className="text-small">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ====================================
                PHILOSOPHY
                Editorial statement
                ==================================== */}
            <Section className="section-lg bg-[var(--color-surface)]">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.p variants={fadeUp} className="text-mono mb-8">
                            Our Philosophy
                        </motion.p>
                        <motion.blockquote
                            variants={fadeUp}
                            className="heading-display heading-md mb-12"
                        >
                            "We don't chase trends. We build systems that deliver value
                            for years, not months. Every solution is measured by business
                            outcomes, not technical complexity."
                        </motion.blockquote>
                        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 bg-[var(--color-elevated)] rounded-full" />
                            <div className="text-left">
                                <p className="font-medium">Leadership Team</p>
                                <p className="text-small">Zero G Foundry</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* ====================================
                LOGOS BANNER
                Ciridae-style scrolling companies
                ==================================== */}
            <LogosBanner />

            {/* ====================================
                TESTIMONIALS
                Client success stories
                ==================================== */}
            <Testimonials />

            {/* ====================================
                PARTNER BADGES
                Technology partnerships
                ==================================== */}
            <PartnerBadges />

            {/* ====================================
                CTA SECTION
                Simple, direct
                ==================================== */}
            <Section className="section-lg">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.p variants={fadeUp} className="text-mono mb-6">
                            Ready to Start?
                        </motion.p>
                        <motion.h2 variants={fadeUp} className="heading-display heading-lg mb-8">
                            Let's build something
                            <br />
                            that matters.
                        </motion.h2>
                        <motion.div variants={fadeUp}>
                            <Link to="/contact" className="btn btn-primary">
                                Get in touch
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </Section>
        </main>
    )
}
