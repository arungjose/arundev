export default function Footer() {
    const marqueeText =
        'MADE USING AI | ARUN INTELLIGENCE | ';

    return (
        <footer className="site-footer">
            <div className="footer-marquee" aria-label={marqueeText}>
                <div className="footer-marquee-track" aria-hidden="true">
                    {[0, 1].map((group) => (
                        <div className="footer-marquee-group" key={group}>
                            {Array.from({ length: 6 }, (_, index) => (
                                <span key={index}>{marqueeText}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-credit">
                <span className="footer-name">Arun G. Jose</span>
                <span className="footer-legal">
                    © {new Date().getFullYear()} · All rights reserved.
                </span>
            </div>
        </footer>
    );
}