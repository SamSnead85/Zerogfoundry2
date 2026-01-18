import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight, CheckCircle } from 'lucide-react'

const industryMultipliers: Record<string, number> = {
    healthcare: 2.8,
    financial: 3.2,
    retail: 2.4,
    manufacturing: 2.6,
    technology: 2.2,
    other: 2.5
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function ROICalculatorPage() {
    const [industry, setIndustry] = useState('healthcare')
    const [annualRevenue, setAnnualRevenue] = useState(100)
    const [employees, setEmployees] = useState(1000)
    const [manualProcessHours, setManualProcessHours] = useState(500)

    // Calculate ROI metrics
    const multiplier = industryMultipliers[industry] || 2.5
    const potentialSavings = Math.round((annualRevenue * 0.03) * multiplier * 10) / 10
    const productivityGain = Math.round(manualProcessHours * 0.6)
    const timeToValue = industry === 'healthcare' || industry === 'financial' ? '8-12 weeks' : '6-10 weeks'
    const threeYearROI = Math.round(potentialSavings * 3 * 1.15)

    return (
        <>
            <Helmet>
                <title>ROI Calculator | Zero G Foundry</title>
                <meta name="description" content="Calculate your potential ROI from AI transformation. See estimated savings, productivity gains, and time to value for your organization." />
            </Helmet>

            {/* Hero */}
            <section className="pt-32 pb-16 gradient-executive">
                <div className="container px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium mb-6">
                            <Calculator className="w-4 h-4" />
                            AI Transformation ROI
                        </div>
                        <h1 className="heading-display heading-xl mb-6">
                            Calculate Your
                            <br />
                            <span className="text-[var(--color-muted)]">AI Transformation ROI</span>
                        </h1>
                        <p className="text-body max-w-2xl mx-auto">
                            Get a personalized estimate of the value AI can deliver for your organization based on industry benchmarks and our client data.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Calculator */}
            <section className="py-16">
                <div className="container px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Input Form */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="card-editorial p-8"
                        >
                            <motion.h2 variants={itemVariants} className="heading-display text-2xl mb-6">
                                Your Organization
                            </motion.h2>

                            <div className="space-y-6">
                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium mb-2">Industry</label>
                                    <select
                                        value={industry}
                                        onChange={(e) => setIndustry(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-elevated)] border border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none transition-colors"
                                    >
                                        <option value="healthcare">Healthcare</option>
                                        <option value="financial">Financial Services</option>
                                        <option value="retail">Retail & E-commerce</option>
                                        <option value="manufacturing">Manufacturing</option>
                                        <option value="technology">Technology</option>
                                        <option value="other">Other</option>
                                    </select>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium mb-2">
                                        Annual Revenue ($ Millions)
                                    </label>
                                    <input
                                        type="range"
                                        min="10"
                                        max="10000"
                                        step="10"
                                        value={annualRevenue}
                                        onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                                        className="w-full accent-[var(--color-accent)]"
                                    />
                                    <div className="flex justify-between text-sm text-[var(--color-muted)] mt-1">
                                        <span>$10M</span>
                                        <span className="font-medium text-[var(--color-foreground)]">${annualRevenue}M</span>
                                        <span>$10B+</span>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium mb-2">
                                        Number of Employees
                                    </label>
                                    <input
                                        type="range"
                                        min="100"
                                        max="50000"
                                        step="100"
                                        value={employees}
                                        onChange={(e) => setEmployees(Number(e.target.value))}
                                        className="w-full accent-[var(--color-accent)]"
                                    />
                                    <div className="flex justify-between text-sm text-[var(--color-muted)] mt-1">
                                        <span>100</span>
                                        <span className="font-medium text-[var(--color-foreground)]">{employees.toLocaleString()}</span>
                                        <span>50,000+</span>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium mb-2">
                                        Weekly Hours on Manual Processes
                                    </label>
                                    <input
                                        type="range"
                                        min="50"
                                        max="5000"
                                        step="50"
                                        value={manualProcessHours}
                                        onChange={(e) => setManualProcessHours(Number(e.target.value))}
                                        className="w-full accent-[var(--color-accent)]"
                                    />
                                    <div className="flex justify-between text-sm text-[var(--color-muted)] mt-1">
                                        <span>50 hrs</span>
                                        <span className="font-medium text-[var(--color-foreground)]">{manualProcessHours.toLocaleString()} hrs</span>
                                        <span>5,000+ hrs</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Results */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="space-y-6"
                        >
                            <motion.h2 variants={itemVariants} className="heading-display text-2xl">
                                Your Estimated ROI
                            </motion.h2>

                            <div className="grid gap-4">
                                <motion.div
                                    variants={itemVariants}
                                    className="card-editorial p-6 border-l-4 border-l-[var(--color-accent)]"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                                        <span className="text-sm text-[var(--color-muted)]">Annual Savings Potential</span>
                                    </div>
                                    <p className="heading-display text-3xl">${potentialSavings}M</p>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="card-editorial p-6"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <TrendingUp className="w-5 h-5 text-[var(--color-accent)]" />
                                        <span className="text-sm text-[var(--color-muted)]">Weekly Hours Recovered</span>
                                    </div>
                                    <p className="heading-display text-3xl">{productivityGain.toLocaleString()} hours</p>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="card-editorial p-6"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <Clock className="w-5 h-5 text-[var(--color-accent)]" />
                                        <span className="text-sm text-[var(--color-muted)]">Time to Value</span>
                                    </div>
                                    <p className="heading-display text-3xl">{timeToValue}</p>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="card-editorial p-6 bg-[var(--color-accent)]/5"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <CheckCircle className="w-5 h-5 text-[var(--color-accent)]" />
                                        <span className="text-sm text-[var(--color-muted)]">3-Year Total Value</span>
                                    </div>
                                    <p className="heading-display text-4xl text-[var(--color-accent)]">${threeYearROI}M+</p>
                                </motion.div>
                            </div>

                            <motion.div variants={itemVariants} className="pt-4">
                                <Link to="/contact" className="btn btn-primary w-full justify-center">
                                    Get a Detailed Assessment
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <p className="text-xs text-center text-[var(--color-muted)] mt-3">
                                    These estimates are based on industry benchmarks. Actual results may vary.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-16 border-t border-[var(--color-border)]">
                <div className="container px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="heading-display text-4xl mb-2">$400M+</p>
                            <p className="text-[var(--color-muted)]">Value delivered to clients</p>
                        </div>
                        <div>
                            <p className="heading-display text-4xl mb-2">340%</p>
                            <p className="text-[var(--color-muted)]">Average client ROI</p>
                        </div>
                        <div>
                            <p className="heading-display text-4xl mb-2">8 weeks</p>
                            <p className="text-[var(--color-muted)]">Average time to first value</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
