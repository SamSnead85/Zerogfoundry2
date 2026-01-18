import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { z } from 'zod'
import { Brain, Building2, Users, Rocket, ArrowRight, CheckCircle, Upload } from 'lucide-react'
import IconCircle from '../components/ui/IconCircle'

const investmentCriteria = [
    { label: 'Stage', value: 'Pre-Seed, Seed, and Series A' },
    { label: 'Initial Check Size', value: '$250K to $2M' },
    { label: 'Sectors', value: 'Enterprise SaaS, AI/ML Platforms, Data Infrastructure, Vertical AI' },
    { label: 'Geography', value: 'Primarily North America' },
]

const advantages = [
    { icon: Brain, title: 'Embedded Expertise', desc: 'Our team joins your team. We\'re operators, not just investors.' },
    { icon: Building2, title: 'Enterprise Access', desc: 'Direct introductions to Fortune 500 decision-makers.' },
    { icon: Users, title: 'Founder Community', desc: 'Join a network of exceptional AI founders supporting each other.' },
    { icon: Rocket, title: 'Rapid Deployment', desc: 'We help you ship faster with hands-on technical support.' },
]

const processSteps = [
    { step: 1, title: 'Initial Submission', desc: 'Share your pitch deck and vision with us' },
    { step: 2, title: 'First Meeting', desc: '60-minute conversation with a partner' },
    { step: 3, title: 'Deep Dive', desc: '90-minute technical and business review' },
    { step: 4, title: 'Diligence & Partnership', desc: '1-2 weeks of focused evaluation' },
    { step: 5, title: 'Decision', desc: 'Clear, fast answer with detailed feedback' },
]

const applicationSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Valid email is required'),
    companyName: z.string().min(2, 'Company name is required'),
    website: z.string().url().optional().or(z.literal('')),
    elevatorPitch: z.string().min(50, 'Please provide at least 50 characters'),
    pitchDeckUrl: z.string().optional(),
    howDidYouHear: z.string().optional(),
})

type ApplicationData = z.infer<typeof applicationSchema>

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

export default function VenturesPage() {
    const [formData, setFormData] = useState<ApplicationData>({
        name: '',
        email: '',
        companyName: '',
        website: '',
        elevatorPitch: '',
        pitchDeckUrl: '',
        howDidYouHear: '',
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const result = applicationSchema.safeParse(formData)
        if (!result.success) {
            const newErrors: Record<string, string> = {}
            result.error.issues.forEach((issue) => {
                if (issue.path[0]) {
                    newErrors[issue.path[0] as string] = issue.message
                }
            })
            setErrors(newErrors)
            return
        }

        // Simulate submission
        console.log('Form submitted:', formData)
        setIsSubmitted(true)
    }

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            companyName: '',
            website: '',
            elevatorPitch: '',
            pitchDeckUrl: '',
            howDidYouHear: '',
        })
        setIsSubmitted(false)
    }

    return (
        <>
            <Helmet>
                <title>ZeroG Ventures | Capital + Code</title>
                <meta name="description" content="We invest in founders building the future of AI. Pre-seed to Series A investments in enterprise AI, ML platforms, and vertical AI applications." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-24 gradient-executive">
                <div className="container px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-gradient">ZeroG Ventures</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground mb-4">
                            Capital + Code: We invest in founders building the future of AI
                        </p>
                        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
                            ZeroG Ventures is the investment arm of ZeroG Foundry. We back exceptional founders at the earliest stages and provide the operational support they need to scale.
                        </p>
                        <a href="#apply" className="btn-accent inline-flex items-center gap-2">
                            Submit Your Pitch
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Investment Thesis */}
            <section className="py-24">
                <div className="container px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">
                            Our Thesis: <span className="text-gradient">The Operator's Advantage</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-muted-foreground text-center mb-16">
                            We believe the best AI companies are built at the intersection of deep domain expertise and cutting-edge technology. As former enterprise operators, we understand the challenges of selling to, deploying within, and scaling across large organizations—and we back founders who do too.
                        </motion.p>

                        {/* Investment Criteria */}
                        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6 mb-16">
                            {investmentCriteria.map((criteria) => (
                                <motion.div
                                    key={criteria.label}
                                    variants={itemVariants}
                                    className="card-editorial p-6"
                                >
                                    <span className="text-xs font-mono tracking-wider text-accent mb-2 block">{criteria.label}</span>
                                    <p className="font-semibold text-lg">{criteria.value}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ZeroG Advantage */}
            <section className="py-24 gradient-metallic">
                <div className="container px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold mb-4">
                            The ZeroG Advantage
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            More than capital—a true partnership
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {advantages.map((advantage) => (
                            <motion.div
                                key={advantage.title}
                                variants={itemVariants}
                                className="card-editorial p-6 text-center group"
                            >
                                <div className="flex justify-center mb-4">
                                    <IconCircle icon={advantage.icon} />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                                <p className="text-sm text-muted-foreground">{advantage.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Investment Process */}
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
                            Our Process
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Fast, transparent, and founder-friendly
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="max-w-3xl mx-auto"
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                variants={itemVariants}
                                className="flex gap-6 mb-8 last:mb-0"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">
                                        {step.step}
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <div className="w-px h-16 bg-border mt-2" />
                                    )}
                                </div>
                                <div className="flex-1 pt-1">
                                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Application Form */}
            <section id="apply" className="py-24 gradient-chrome">
                <div className="container px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="max-w-2xl mx-auto"
                    >
                        <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
                            Submit Your Pitch
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-muted-foreground text-center mb-12">
                            Tell us about what you're building
                        </motion.p>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="card-editorial p-8 text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-success/20 text-success flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4">Application Received!</h3>
                                <p className="text-muted-foreground mb-8">
                                    Thank you for your interest in ZeroG Ventures. Our team will review your submission and get back to you within 5 business days.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-accent">
                                        Schedule an Intro Call
                                    </a>
                                    <button onClick={resetForm} className="btn-secondary">
                                        Submit Another Pitch
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.form
                                variants={itemVariants}
                                onSubmit={handleSubmit}
                                className="card-editorial p-8 space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg bg-muted border ${errors.name ? 'border-red-500' : 'border-border'} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors`}
                                            placeholder="Your name"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg bg-muted border ${errors.email ? 'border-red-500' : 'border-border'} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors`}
                                            placeholder="you@company.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium mb-2">Company Name *</label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg bg-muted border ${errors.companyName ? 'border-red-500' : 'border-border'} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors`}
                                            placeholder="Your company"
                                        />
                                        {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="website" className="block text-sm font-medium mb-2">Website</label>
                                        <input
                                            type="url"
                                            id="website"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                                            placeholder="https://yourcompany.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="elevatorPitch" className="block text-sm font-medium mb-2">Elevator Pitch *</label>
                                    <textarea
                                        id="elevatorPitch"
                                        name="elevatorPitch"
                                        value={formData.elevatorPitch}
                                        onChange={handleChange}
                                        rows={4}
                                        className={`w-full px-4 py-3 rounded-lg bg-muted border ${errors.elevatorPitch ? 'border-red-500' : 'border-border'} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none`}
                                        placeholder="Tell us about your company, the problem you're solving, and why now..."
                                    />
                                    {errors.elevatorPitch && <p className="text-red-500 text-sm mt-1">{errors.elevatorPitch}</p>}
                                </div>

                                <div>
                                    <label htmlFor="pitchDeckUrl" className="block text-sm font-medium mb-2">Pitch Deck (URL or Upload)</label>
                                    <div className="flex gap-4">
                                        <input
                                            type="url"
                                            id="pitchDeckUrl"
                                            name="pitchDeckUrl"
                                            value={formData.pitchDeckUrl}
                                            onChange={handleChange}
                                            className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                                            placeholder="Link to your pitch deck"
                                        />
                                        <button
                                            type="button"
                                            className="px-4 py-3 rounded-lg border border-border hover:border-accent transition-colors flex items-center gap-2"
                                        >
                                            <Upload className="w-4 h-4" />
                                            Upload
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="howDidYouHear" className="block text-sm font-medium mb-2">How did you hear about us?</label>
                                    <select
                                        id="howDidYouHear"
                                        name="howDidYouHear"
                                        value={formData.howDidYouHear}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="referral">Founder Referral</option>
                                        <option value="linkedin">LinkedIn</option>
                                        <option value="twitter">Twitter/X</option>
                                        <option value="event">Conference/Event</option>
                                        <option value="blog">Blog/Article</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full btn-accent flex items-center justify-center gap-2">
                                    Submit Application
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.form>
                        )}
                    </motion.div>
                </div>
            </section>
        </>
    )
}
