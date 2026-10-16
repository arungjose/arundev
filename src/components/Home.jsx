export default function Home() {
    return (
        <section id="home" className="home">
            {/* Left panel: Introduction */}
            <div className="intro">
                <p className="intro-greeting">Hi, I am</p>

                <h1 className="intro-name">
                    Arun G.
                    <br />
                    Jose<span>.</span>
                </h1>

                <div className="home-buttons">
                    <a className="action-button primary-button" href="#projects">
                        View projects ↗
                    </a>

                    <a className="action-button secondary-button" href="#about">
                        About me ↗
                    </a>
                </div>

                <p className="intro-description">
                    I build software, experiment with AI, and turn ideas into
                    interactive projects.
                </p>

                <div className="social-area">
                    <h2>Connect with me</h2>

                    <div className="social-links">
                        <a href="#contact" aria-label="GitHub">GH</a>
                        <a href="#contact" aria-label="LinkedIn">in</a>
                        <a href="#contact" aria-label="Email">@</a>
                    </div>
                </div>
            </div>

            {/* Right panel: Featured project */}
            <div className="featured">
                <p className="eyebrow">CURRENTLY BUILDING / 001</p>

                <h2>Crazy Fjord</h2>

                <p>
                    A boat adventure through beautiful fjords.
                    Explore my latest game development project.
                </p>

                <div className="featured-art">
                    <span>CRAZY FJORD</span>
                    <p>GAME ARTWORK GOES HERE</p>
                </div>

                <a className="featured-link" href="#projects">
                    Explore project ↗
                </a>
            </div>
        </section>
    )
}
