
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const links = [
    { label: 'Home', href: '#home', type: 'section' },
    { label: 'Projects', href: '#projects', type: 'section' },
    { label: 'Academics', href: '#academics', type: 'section' },
    { label: 'About', href: '#about', type: 'section' },
    { label: 'Console', href: '/console', type: 'route' },
]

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#home">arunjose</a>
            </div>

            <div className="navbar-links">
                {links.map((link) =>
                    link.type === 'route' ? (
                        <Link key={link.href} to={link.href}>
                            {link.label}
                        </Link>
                    ) : (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    )
                )}
            </div>

            <Button asChild className="navbar-contact">
                <a href="#contact">Contact me ↗</a>
            </Button>
        </nav>
    )
}
