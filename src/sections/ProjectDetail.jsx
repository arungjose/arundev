
import { Link, useParams, useNavigate } from 'react-router-dom'
import projectDetails from '../data/projectDetails'
import { useEffect } from 'react'

export default function ProjectDetail() {
    const { slug } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])
    const project = projectDetails[slug]

    const navigate = useNavigate()

    function backToProjects() {
        navigate('/')
        setTimeout(() => {
            document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth',
            })
        }, 100)
    }

    // Show a fallback if the URL doesn't match a project.
    if (!project) {
        return (
            <section className="project-detail">
                <h1>Project not found</h1>
                <Link to="/projects">← Back to projects</Link>
            </section>
        )
    }

    return (
        <div className="project-page">
            <article className="project-detail">
                {/* Title bar */}
                <header className="detail-header">
                    <button
                        className="detail-back"
                        onClick={backToProjects}
                        type="button"
                    >
                        ← Back
                    </button>
                    <h1>{project.title}</h1>
                </header>

                {/* Description and main image */}
                <div className="detail-content">
                    <div className="detail-description">
                        <p className="project-category">{project.category}</p>

                        {project.description.map((paragraph, index) => (
                            <p key={index} className="detail-paragraph">
                                {paragraph}
                            </p>
                        ))}

                        <h2>Technology stack</h2>

                        <div className="technology-list">
                            {project.technologies.map((technology) => (
                                <span key={technology} className="technology-tag">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    <aside className="detail-media">
                        {project.image ? (
                            <img src={project.image} alt={project.title} />
                        ) : (
                            <div className="detail-image-placeholder">
                                PROJECT IMAGE
                            </div>
                        )}

                        {project.repository && (
                            <a
                                className="detail-project-link"
                                href={project.repository}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View project repository ↗
                            </a>
                        )}
                        {project.link && (
                            <a
                                className="detail-paper-link"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View research paper ↗
                            </a>
                        )}
                    </aside>
                </div>

                {/* Screenshot gallery — we will add real images later. */}
                {project.screenshots.length > 0 && (
                    <section className="detail-gallery">
                        <h2>Gallery</h2>

                        <div className="gallery-grid">
                            {project.screenshots.map((screenshot, index) => (
                                <img
                                    key={screenshot}
                                    src={screenshot}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </div>)
}
