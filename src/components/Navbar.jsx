
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
                <a href="#home">
                    <img src={`${import.meta.env.BASE_URL}/images/logoblack.png`} alt="Arun Jose" />
                </a>
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

            <a className="navbar-contact" href="#contact">
                Contact me ↗
            </a>
        </nav>
    )
}
