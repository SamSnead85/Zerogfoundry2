import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Users,
    Scale,
    Brain,
    Building2,
    Cpu,
    Mic,
    Handshake,
    Headphones,
    ArrowRight,
    Sparkles,
    Target,
    Lightbulb,
    CheckCircle
} from 'lucide-react'
import IconCircle from '../components/ui/IconCircle'

const capabilities = [
    { icon: Users, title: 'World-Class Leadership', desc: 'Fortune 500 executives who\'ve led AI transformations at scale', category: 'PEOPLE' },
    { icon: Scale, title: 'Risk & Compliance', desc: 'Enterprise-grade transparency & regulatory alignment', category: 'PEOPLE' },
    { icon: Brain, title: 'Cutting-Edge Expertise', desc: 'Deep technical mastery across the AI stack', category: 'PEOPLE' },
    { icon: Building2, title: 'Domain Expertise', desc: 'Industry-specific knowledge in healthcare, finance, and manufacturing', category: 'PEOPLE' },
    { icon: Cpu, title: 'Modular Tech Stack', desc: 'Best-in-class tools integrated seamlessly', category: 'TECH' },
    { icon: Mic, title: 'Voice AI & Agent Assist', desc: 'Real-time decision support systems', category: 'TECH' },
    { icon: Handshake, title: 'Strategic Partnerships', desc: 'NVIDIA and Google Cloud alliances', category: 'TECH' },
    { icon: Headphones, title: 'Managed Services', desc: 'Ongoing support and optimization', category: 'TECH' },
]

const principles = [
    { icon: Sparkles, title: 'Harmonize Humans and AI', desc: 'We believe the best outcomes emerge when human expertise and AI capabilities work in concert. Our solutions augment your team, not replace them.' },
    { icon: Brain, title: 'Leverage Industry Expertise', desc: 'Deep domain knowledge accelerates value creation and reduces implementation risk. We bring decades of experience across healthcare, finance, manufacturing, and retail.' },
    { icon: Target, title: 'Accelerate Impact', desc: 'Speed matters. We ship solutions that drive measurable business outcomes, fast. Our 8-week deployment track record speaks for itself.' },
    { icon: Lightbulb, title: 'Build with Clients', desc: 'True partnership means co-creating solutions, not delivering black boxes. We embed with your team to build lasting internal capability.' },
]

const engagementTypes = [
    { title: 'AI Strategy Workshop', duration: '1-2 weeks', desc: 'Rapid assessment of your AI readiness and opportunity landscape' },
    { title: 'Proof of Concept', duration: '4-6 weeks', desc: 'Build and validate a working AI solution in your environment' },
    { title: 'Production Deployment', duration: '8-12 weeks', desc: 'Full-scale implementation with enterprise integrations' },
    { title: 'Managed AI Services', duration: 'Ongoing', desc: 'Continuous optimization, monitoring, and support' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ApproachPage() {
    return (
        <>
            <Helmet>
                <title>Our Approach | ZeroG Foundry</title>
                <meta name="description" content="Elite AI Execution. We're a lean, battle-tested team of AI specialists who cut through the noise and deliver real business impact." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-24 gradient-metallic">
                <div className="container px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-gradient">Elite AI Execution</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
                            We're a lean, battle-tested team of AI specialists who cut through the noise. We bring experience leading enterprise Fortune 500 organizations and cutting-edge technical expertise—no bureaucracy, no delays, no cost assessment. We embed with your team, diagnose what's blocking progress, and ship solutions that drive real business impact. Fast.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities */}
            <section id="solutions" className="py-24">
                <div className="container px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
                            What We Bring
                        </motion.h2>

                        <h3 className="text-xs font-mono tracking-widest text-accent mb-6 text-center">OUR WORLD-CLASS PEOPLE</h3>
                        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {capabilities.filter(c => c.category === 'PEOPLE').map((cap) => (
                                <motion.div
                                    key={cap.title}
                                    variants={itemVariants}
                                    className="card-editorial p-6 group"
                                >
                                    <IconCircle icon={cap.icon} className="mb-4" />
                                    <h4 className="font-semibold mb-2">{cap.title}</h4>
                                    <p className="text-sm text-muted-foreground">{cap.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <h3 className="text-xs font-mono tracking-widest text-accent mb-6 text-center">OUR INDUSTRY-LEADING TECH STACK</h3>
                        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {capabilities.filter(c => c.category === 'TECH').map((cap) => (
                                <motion.div
                                    key={cap.title}
                                    variants={itemVariants}
                                    className="card-editorial p-6 group"
                                >
                                    <IconCircle icon={cap.icon} className="mb-4" />
                                    <h4 className="font-semibold mb-2">{cap.title}</h4>
                                    <p className="text-sm text-muted-foreground">{cap.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Guiding Principles */}
            <section className="py-24 gradient-chrome">
                <div className="container px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Guiding Principles
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The beliefs that shape how we work
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    >
                        {principles.map((principle) => (
                            <motion.div
                                key={principle.title}
                                variants={itemVariants}
                                className="card-editorial p-8 group"
                            >
                                <div className="flex items-start gap-4">
                                    <IconCircle icon={principle.icon} />
                                    <div>
                                        <h3 className="font-semibold text-xl mb-3">{principle.title}</h3>
                                        <p className="text-muted-foreground">{principle.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="py-24">
                <div className="container px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold mb-4">
                            How We Engage
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Flexible engagement models designed for your needs
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {engagementTypes.map((type) => (
                            <motion.div
                                key={type.title}
                                variants={itemVariants}
                                className="card-editorial p-6"
                            >
                                <span className="text-xs font-mono tracking-wider text-accent mb-2 block">{type.duration}</span>
                                <h3 className="font-semibold text-lg mb-3">{type.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{type.desc}</p>
                                <div className="flex items-center gap-2 text-accent text-sm">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Available Now</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="text-center mt-12">
                        <Link to="/ventures" className="btn-accent inline-flex items-center gap-2">
                            Start a Conversation
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
