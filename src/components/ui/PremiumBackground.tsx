/**
 * PremiumBackground - Smooth Gradient Mesh
 * 
 * CSS-based animated gradient - clean, professional, modern
 * Like Linear, Stripe, Vercel - not "christmas lights"
 */

export function PremiumBackground() {
    return (
        <div className="premium-background" aria-hidden="true">
            {/* Animated gradient mesh - smooth, professional */}
            <div className="gradient-mesh">
                <div className="gradient-blob gradient-blob-1" />
                <div className="gradient-blob gradient-blob-2" />
                <div className="gradient-blob gradient-blob-3" />
            </div>

            {/* Viewport Frame Glow */}
            <div className="viewport-frame">
                <div className="frame-glow frame-glow-top" />
                <div className="frame-glow frame-glow-right" />
                <div className="frame-glow frame-glow-bottom" />
                <div className="frame-glow frame-glow-left" />
            </div>

            {/* Subtle noise texture overlay */}
            <div className="noise-overlay" />
        </div>
    )
}

export default PremiumBackground
