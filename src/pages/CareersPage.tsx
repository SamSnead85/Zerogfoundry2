import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Users, Award, TrendingUp, Globe, Play, Pause, Volume2, VolumeX, MapPin, Clock, ArrowRight } from 'lucide-react'
import IconCircle from '../components/ui/IconCircle'

const benefits = [
    { icon: Users, title: 'Elite Team', desc: 'Work alongside Fortune 500 veterans and cutting-edge AI researchers' },
    { icon: Award, title: 'Impact at Scale', desc: 'Shape AI strategy for the world\'s largest organizations' },
    { icon: TrendingUp, title: 'Career Growth', desc: 'Accelerated learning with direct exposure to C-suite executives' },
    { icon: Globe, title: 'Global Reach', desc: 'Work with clients across industries and geographies' },
]

const openPositions = [
    { title: 'Senior AI Solutions Architect', location: 'San Francisco, CA', type: 'Full-time', department: 'Engineering' },
    { title: 'Machine Learning Engineer', location: 'Remote (US)', type: 'Full-time', department: 'Engineering' },
    { title: 'Enterprise Account Executive', location: 'New York, NY', type: 'Full-time', department: 'Sales' },
    { title: 'AI Strategy Consultant', location: 'Remote (US)', type: 'Full-time', department: 'Consulting' },
    { title: 'Product Manager, Voice AI', location: 'San Francisco, CA', type: 'Full-time', department: 'Product' },
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

export default function CareersPage() {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <>
            <Helmet>
                <title>Careers | ZeroG Foundry</title>
                <meta name="description" content="Shape the future of enterprise AI. Join our team of elite AI specialists and work with Fortune 500 organizations." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-24 gradient-chrome">
                <div className="container px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Shape the Future of{' '}
                                <span className="text-gradient">Enterprise AI</span>
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8">
                                Join a team of elite AI specialists who are transforming how the world's largest organizations leverage artificial intelligence. We move fast, think big, and ship solutions that matter.
                            </p>
                            <a href="#positions" className="btn-accent inline-flex items-center gap-2">
                                View Open Positions
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="card-editorial overflow-hidden">
                                <div className="relative aspect-video">
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                        poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                    >
                                        <source src="https://cdn.coverr.co/videos/coverr-team-meeting-in-an-office-2599/1080p.mp4" type="video/mp4" />
                                    </video>
                                    <div className="absolute bottom-4 right-4 flex gap-2">
                                        <button
                                            onClick={togglePlay}
                                            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
                                            aria-label={isPlaying ? 'Pause' : 'Play'}
                                        >
                                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                        </button>
                                        <button
                                            onClick={toggleMute}
                                            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
                                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                                        >
                                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
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
                            Why ZeroG Foundry?
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We're building the future of enterprise AI—and we want you to be part of it.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {benefits.map((benefit) => (
                            <motion.div
                                key={benefit.title}
                                variants={itemVariants}
                                className="card-editorial p-6 text-center group"
                            >
                                <div className="flex justify-center mb-4">
                                    <IconCircle icon={benefit.icon} />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="py-24 gradient-metallic">
                <div className="container px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Open Positions
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Find your next opportunity with us
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="max-w-3xl mx-auto space-y-4"
                    >
                        {openPositions.map((position, index) => (
                            <motion.a
                                key={index}
                                href="#"
                                variants={itemVariants}
                                className="card-editorial p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group block"
                            >
                                <div>
                                    <span className="text-xs font-mono tracking-wider text-accent mb-1 block">{position.department}</span>
                                    <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">{position.title}</h3>
                                </div>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {position.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {position.type}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Internship CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 max-w-3xl mx-auto"
                    >
                        <div className="card-editorial p-8 text-center gradient-executive">
                            <h3 className="font-display text-2xl font-bold mb-4">Summer Internship Program</h3>
                            <p className="text-muted-foreground mb-6">
                                Our 12-week summer program immerses you in real enterprise AI projects. Work directly with our senior team and gain hands-on experience at the cutting edge.
                            </p>
                            <a href="#" className="btn-accent inline-flex items-center gap-2">
                                Apply for Summer 2025
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
