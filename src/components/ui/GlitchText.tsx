import { useEffect, useState } from 'react'

interface GlitchTextProps {
    text: string
    className?: string
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true)
            setTimeout(() => setIsGlitching(false), 200)
        }, 4000 + Math.random() * 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <span
            className={className}
            style={{
                position: 'relative',
                display: 'inline-block'
            }}
        >
            {/* Main visible text */}
            <span style={{ position: 'relative' }}>
                {text}
            </span>

            {/* Glitch layers */}
            {isGlitching && (
                <>
                    <span
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            color: '#06b6d4',
                            clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
                            animation: 'glitch-1 0.2s ease-in-out'
                        }}
                    >
                        {text}
                    </span>
                    <span
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            color: '#8b5cf6',
                            clipPath: 'polygon(0 45%, 100% 45%, 100% 100%, 0 100%)',
                            animation: 'glitch-2 0.2s ease-in-out'
                        }}
                    >
                        {text}
                    </span>
                </>
            )}

            <style>{`
                @keyframes glitch-1 {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(-8px) skewX(-3deg); }
                    40% { transform: translateX(8px) skewX(3deg); }
                    60% { transform: translateX(-5px); }
                    80% { transform: translateX(5px); }
                }
                
                @keyframes glitch-2 {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(8px) skewX(3deg); }
                    40% { transform: translateX(-8px) skewX(-3deg); }
                    60% { transform: translateX(5px); }
                    80% { transform: translateX(-5px); }
                }
            `}</style>
        </span>
    )
}
