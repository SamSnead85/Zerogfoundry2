import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Node {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    pulsePhase: number
}

interface Connection {
    from: number
    to: number
    strength: number
}

export default function NeuralNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number | undefined>(undefined)
    const nodesRef = useRef<Node[]>([])
    const connectionsRef = useRef<Connection[]>([])
    const mouseRef = useRef({ x: 0, y: 0 })
    const dataFlowRef = useRef<{ pos: number; connection: number; speed: number }[]>([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initNodes()
        }

        const initNodes = () => {
            const nodeCount = Math.floor((canvas.width * canvas.height) / 25000)
            nodesRef.current = Array.from({ length: Math.min(nodeCount, 80) }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 3 + 2,
                pulsePhase: Math.random() * Math.PI * 2
            }))

            // Create connections between nearby nodes
            connectionsRef.current = []
            for (let i = 0; i < nodesRef.current.length; i++) {
                for (let j = i + 1; j < nodesRef.current.length; j++) {
                    const dx = nodesRef.current[i].x - nodesRef.current[j].x
                    const dy = nodesRef.current[i].y - nodesRef.current[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 200) {
                        connectionsRef.current.push({
                            from: i,
                            to: j,
                            strength: 1 - dist / 200
                        })
                    }
                }
            }

            // Initialize data flow particles
            dataFlowRef.current = connectionsRef.current
                .slice(0, 30)
                .map((_, idx) => ({
                    pos: Math.random(),
                    connection: idx,
                    speed: 0.005 + Math.random() * 0.01
                }))
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY }
        }

        const animate = () => {
            if (!ctx || !canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const time = Date.now() * 0.001

            // Update and draw nodes
            nodesRef.current.forEach((node) => {
                // Mouse interaction
                const dx = mouseRef.current.x - node.x
                const dy = mouseRef.current.y - node.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist < 200) {
                    node.vx -= (dx / dist) * 0.02
                    node.vy -= (dy / dist) * 0.02
                }

                // Update position
                node.x += node.vx
                node.y += node.vy

                // Boundary bounce with dampening
                if (node.x < 0 || node.x > canvas.width) node.vx *= -0.8
                if (node.y < 0 || node.y > canvas.height) node.vy *= -0.8

                // Keep in bounds
                node.x = Math.max(0, Math.min(canvas.width, node.x))
                node.y = Math.max(0, Math.min(canvas.height, node.y))

                // Friction
                node.vx *= 0.99
                node.vy *= 0.99

                // Draw node with pulsing glow
                const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5
                const glowRadius = node.radius * (2 + pulse)

                // Outer glow
                const gradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, glowRadius * 3
                )
                gradient.addColorStop(0, `rgba(139, 92, 246, ${0.4 * pulse})`)
                gradient.addColorStop(0.5, `rgba(6, 182, 212, ${0.2 * pulse})`)
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

                ctx.beginPath()
                ctx.arc(node.x, node.y, glowRadius * 3, 0, Math.PI * 2)
                ctx.fillStyle = gradient
                ctx.fill()

                // Core node
                const coreGradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, node.radius
                )
                coreGradient.addColorStop(0, '#ffffff')
                coreGradient.addColorStop(0.5, '#8b5cf6')
                coreGradient.addColorStop(1, '#06b6d4')

                ctx.beginPath()
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
                ctx.fillStyle = coreGradient
                ctx.fill()
            })

            // Draw connections
            connectionsRef.current.forEach((conn) => {
                const from = nodesRef.current[conn.from]
                const to = nodesRef.current[conn.to]
                if (!from || !to) return

                const dx = to.x - from.x
                const dy = to.y - from.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                const strength = Math.max(0, 1 - dist / 250)

                if (strength > 0) {
                    ctx.beginPath()
                    ctx.moveTo(from.x, from.y)
                    ctx.lineTo(to.x, to.y)

                    const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
                    gradient.addColorStop(0, `rgba(139, 92, 246, ${strength * 0.5})`)
                    gradient.addColorStop(0.5, `rgba(6, 182, 212, ${strength * 0.3})`)
                    gradient.addColorStop(1, `rgba(139, 92, 246, ${strength * 0.5})`)

                    ctx.strokeStyle = gradient
                    ctx.lineWidth = strength * 2
                    ctx.stroke()
                }
            })

            // Draw data flow particles
            dataFlowRef.current.forEach((particle) => {
                const conn = connectionsRef.current[particle.connection]
                if (!conn) return

                const from = nodesRef.current[conn.from]
                const to = nodesRef.current[conn.to]
                if (!from || !to) return

                particle.pos += particle.speed
                if (particle.pos > 1) {
                    particle.pos = 0
                    particle.connection = Math.floor(Math.random() * Math.min(connectionsRef.current.length, 30))
                }

                const x = from.x + (to.x - from.x) * particle.pos
                const y = from.y + (to.y - from.y) * particle.pos

                // Data particle with trail
                const trailGradient = ctx.createRadialGradient(x, y, 0, x, y, 8)
                trailGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)')
                trailGradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.6)')
                trailGradient.addColorStop(1, 'rgba(139, 92, 246, 0)')

                ctx.beginPath()
                ctx.arc(x, y, 8, 0, Math.PI * 2)
                ctx.fillStyle = trailGradient
                ctx.fill()
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        resize()
        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    return (
        <motion.canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        />
    )
}
