import { Link } from 'react-router-dom'

const footerLinks = [
    {
        title: 'Services',
        links: [
            { name: 'Case Studies', href: '/work' },
            { name: 'Our Approach', href: '/approach' },
            { name: 'Ventures', href: '/ventures' },
        ]
    },
    {
        title: 'Company',
        links: [
            { name: 'About', href: '/about' },
            { name: 'Careers', href: '/careers' },
            { name: 'Contact', href: '/contact' },
        ]
    },
    {
        title: 'Resources',
        links: [
            { name: 'Insights', href: '/insights' },
            { name: 'Newsletter', href: '/insights' },
        ]
    }
]

const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zerogfoundry' },
    { name: 'Twitter', href: 'https://twitter.com/zerogfoundry' },
]

export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)]">
            <div className="container">
                {/* Main Footer */}
                <div className="py-16 lg:py-20 grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <Link to="/" className="font-medium tracking-tight inline-block mb-4">
                            Zero G Foundry
                        </Link>
                        <p className="text-small max-w-xs mb-6">
                            Enterprise AI consulting. From strategy to deployment.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-small link"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <p className="text-mono mb-4">{group.title}</p>
                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-small link">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-small text-[var(--color-subtle)]">
                        © {new Date().getFullYear()} Zero G Foundry. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="text-small link">Privacy</Link>
                        <Link to="/terms" className="text-small link">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
