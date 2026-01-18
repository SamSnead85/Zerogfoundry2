import { useEffect, useRef } from 'react'

/**
 * CinematicBackground - Award-winning ambient background effect
 * Inspired by Ciridae, Terminal Industries, and House of Maserati
 * 
 * Creates a subtle, slow-moving gradient aurora effect using canvas
 * No heavy video files, pure generative graphics
 */
export default function CinematicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationId: number
        let time = 0

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const draw = () => {
            time += 0.002 // Very slow animation

            const { width, height } = canvas

            // Clear with deep black
            ctx.fillStyle = '#050505'
            ctx.fillRect(0, 0, width, height)

            // Create ambient light sources
            const lights = [
                {
                    x: width * 0.8 + Math.sin(time * 0.5) * 100,
                    y: height * 0.2 + Math.cos(time * 0.3) * 50,
                    radius: 600,
                    color: 'rgba(59, 130, 246, 0.04)' // Subtle blue
                },
                {
                    x: width * 0.2 + Math.cos(time * 0.4) * 80,
                    y: height * 0.8 + Math.sin(time * 0.6) * 60,
                    radius: 500,
                    color: 'rgba(255, 255, 255, 0.02)' // Subtle white
                },
                {
                    x: width * 0.5 + Math.sin(time * 0.3) * 120,
                    y: height * 0.5 + Math.cos(time * 0.5) * 80,
                    radius: 700,
                    color: 'rgba(100, 100, 100, 0.03)' // Subtle gray
                }
            ]

            // Draw ambient lights with radial gradients
            lights.forEach(light => {
                const gradient = ctx.createRadialGradient(
                    light.x, light.y, 0,
                    light.x, light.y, light.radius
                )
                gradient.addColorStop(0, light.color)
                gradient.addColorStop(1, 'transparent')

                ctx.fillStyle = gradient
                ctx.fillRect(0, 0, width, height)
            })

            // Add very subtle noise/grain
            const imageData = ctx.getImageData(0, 0, width, height)
            const data = imageData.data
            for (let i = 0; i < data.length; i += 4) {
                const noise = (Math.random() - 0.5) * 4
                data[i] += noise     // R
                data[i + 1] += noise // G
                data[i + 2] += noise // B
            }
            ctx.putImageData(imageData, 0, 0)

            animationId = requestAnimationFrame(draw)
        }

        resize()
        window.addEventListener('resize', resize)
        draw()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: -1 }}
            aria-hidden="true"
        />
    )
}
