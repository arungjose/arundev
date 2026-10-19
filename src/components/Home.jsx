import resume from '../files/Arun G Jose - Resume.pdf'

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

                <p className="intro-description">
                    and I like experimenting! I am a software developer and a game designer. Explore my portfolio to see some of my work and learn more about me.
                </p>

                <div className="home-buttons">
                    <a className="action-button primary-button" href="#projects">
                        View projects ↗
                    </a>

                    <a className="action-button secondary-button" href="#about">
                        About me ↗
                    </a>
                </div>

                <p className="resume-note">
                    Download my resume{" "}
                    <a href={resume} download>
                        <u>here</u>
                    </a>.
                </p>


                <div className="social-area">
                    <h2>Connect with me</h2>

                    <div className="social-links">
                        <a href="https://github.com/arungjose" aria-label="GitHub">
                            <img src={`${import.meta.env.BASE_URL}/images/github-icon.png`}></img>
                        </a>
                        <a href="https://www.linkedin.com/in/arungjose/" aria-label="LinkedIn">
                            <img src={`${import.meta.env.BASE_URL}/images/linkedin-icon.png`}></img>
                        </a>
                        <a href="#contact" aria-label="Email">
                            <img src={`${import.meta.env.BASE_URL}/images/gmail-icon.png`}></img>
                        </a>
                    </div>
                </div>
            </div>

            {/* Right panel: Featured project */}
            <div className="featured">
                <p className="eyebrow">COMING SOON</p>

                <h2>Crazy Fjord</h2>

                <p>
                    A boat adventure through beautiful fjords.
                    Stay tuned for the release!
                </p>

                <div className="featured-art">
                    <img src={`${import.meta.env.BASE_URL}/images/crazy-fjord.png`} alt="Crazy Fjord" />
                </div>

                <a className="featured-link" href="#projects/crazy-fjord">
                    Explore project ↗
                </a>
            </div>
        </section>
    )
}
