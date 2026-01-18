import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, User } from 'lucide-react'

const insights = [
    { type: 'STRATEGIC ANALYSIS', readTime: '12 min', title: 'The Executive\'s Guide to AI Transformation', desc: 'A comprehensive framework for C-suite leaders navigating enterprise AI adoption in 2025 and beyond.', author: 'Dr. Sarah Chen', date: 'Dec 20, 2024', featured: true },
    { type: 'FEATURED REPORT', readTime: '8 min', title: 'Voice AI in Healthcare: 2025 Outlook', desc: 'How conversational AI is reshaping patient engagement, clinical workflows, and operational efficiency across health systems.', author: 'Michael Torres', date: 'Dec 18, 2024', featured: true },
    { type: 'CASE STUDY', readTime: '5 min', title: 'Fortune 100 Retailer Achieves 340% ROI', desc: 'How we deployed intelligent agents across 2,000 locations in 8 weeks, transforming customer service operations.', author: 'ZeroG Team', date: 'Dec 15, 2024' },
    { type: 'TECHNICAL DEEP DIVE', readTime: '15 min', title: 'Building Enterprise-Grade RAG Systems', desc: 'Architecture patterns, best practices, and lessons learned from production retrieval-augmented generation deployments.', author: 'Dr. James Liu', date: 'Dec 12, 2024' },
    { type: 'INDUSTRY TRENDS', readTime: '6 min', title: 'The Rise of Agentic Workflows', desc: 'Why autonomous AI agents are the next frontier in enterprise automation—and what leaders need to prepare for.', author: 'Elena Rodriguez', date: 'Dec 10, 2024' },
    { type: 'REGULATORY UPDATE', readTime: '10 min', title: 'AI Governance: EU AI Act Implications', desc: 'What enterprises need to know about compliance requirements, risk classifications, and enforcement timelines.', author: 'Alexandra Smith', date: 'Dec 8, 2024' },
    { type: 'WHITEPAPER', readTime: '20 min', title: 'The Economics of Enterprise AI', desc: 'A detailed analysis of ROI patterns, cost structures, and value drivers across 100+ AI implementations.', author: 'ZeroG Research', date: 'Dec 5, 2024' },
    { type: 'PODCAST', readTime: '45 min', title: 'Fireside Chat: The Future of Work with AI', desc: 'Our partners discuss how AI is reshaping enterprise talent strategies, skills development, and organizational design.', author: 'ZeroG Team', date: 'Dec 3, 2024' },
    { type: 'CASE STUDY', readTime: '7 min', title: 'Financial Services AI: Fraud Detection at Scale', desc: 'How a top-10 bank reduced false positives by 60% while catching 40% more actual fraud with our AI solution.', author: 'David Park', date: 'Dec 1, 2024' },
]

const categories = ['All', 'Strategic Analysis', 'Case Studies', 'Technical', 'Regulatory', 'Research']

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

export default function InsightsPage() {
    return (
        <>
            <Helmet>
                <title>Insights | ZeroG Foundry</title>
                <meta name="description" content="Strategic intelligence from the frontlines of enterprise AI transformation. Insights, research, and case studies from ZeroG Foundry." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-16 gradient-executive">
                <div className="container px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Strategic Intelligence
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                            Insights from the frontlines of enterprise AI transformation
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 border-b border-border">
                <div className="container px-6">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0
                                        ? 'bg-foreground text-background'
                                        : 'border border-border hover:border-foreground'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Insights */}
            <section className="py-16">
                <div className="container px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid lg:grid-cols-2 gap-8 mb-16"
                    >
                        {insights.filter(i => i.featured).map((insight, index) => (
                            <motion.article
                                key={index}
                                variants={itemVariants}
                                className="card-editorial overflow-hidden group cursor-pointer"
                            >
                                <div className="h-64 gradient-metallic relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 text-xs font-mono tracking-wider bg-accent/80 rounded-full">
                                            {insight.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {insight.readTime} read
                                        </span>
                                        <span>{insight.date}</span>
                                    </div>
                                    <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                                        {insight.title}
                                    </h2>
                                    <p className="text-muted-foreground mb-6">{insight.desc}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <User className="w-4 h-4" />
                                            {insight.author}
                                        </span>
                                        <span className="text-accent flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                                            Read Full Report
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* All Insights Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {insights.filter(i => !i.featured).map((insight, index) => (
                            <motion.article
                                key={index}
                                variants={itemVariants}
                                className="card-editorial overflow-hidden group cursor-pointer"
                            >
                                <div className="h-40 gradient-chrome relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 text-xs font-mono tracking-wider bg-accent/80 rounded-full">
                                            {insight.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                        <span>{insight.readTime} read</span>
                                        <span>•</span>
                                        <span>{insight.date}</span>
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                                        {insight.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{insight.desc}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-muted-foreground">By {insight.author}</span>
                                        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="btn-secondary">
                            Load More Insights
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-24 gradient-metallic">
                <div className="container px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="font-display text-3xl font-bold mb-4">Stay Informed</h2>
                        <p className="text-muted-foreground mb-8">
                            Get our latest insights delivered directly to your inbox. No spam, just strategic intelligence.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                            />
                            <button type="submit" className="btn-accent whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
