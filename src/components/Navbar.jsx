import { Button } from '@/components/ui/button'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Academics', href: '#academics' },
    { label: 'Console', href: '#console' },
]

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#home">arunjose</a>
            </div>

            <div className="navbar-links">
                {links.map((link) => (
                    <a key={link.href} href={link.href}>
                        {link.label}
                    </a>
                ))}
            </div>

            <Button asChild className="navbar-contact">
                <a href="#contact">Contact me ↗</a>
            </Button>
        </nav>
    )
}