import { Link } from 'react-router-dom'
import { useState } from 'react'
import projects from '../data/projects'

const skills = [
    { name: 'Python', short: 'Py' },
    { name: 'React', short: 'Re' },
    { name: 'Java', short: 'Ja' },
    { name: 'C', short: 'C' },
    { name: 'Godot', short: 'Go' },
    { name: 'Flutter', short: 'Fl' },
    { name: 'PyTorch', short: 'Pt' },
    { name: 'OpenCV', short: 'CV' },
]

const pageSize = 4

export default function Projects() {
    const [page, setPage] = useState(1)

    const pageCount = Math.ceil(projects.length / pageSize)
    const visibleProjects = projects.slice(
        (page - 1) * pageSize,
        page * pageSize,
    )

    function changePage(nextPage) {
        setPage(nextPage)
    }

    return (
        <section id="projects" className="projects-section">
            <div className="projects-main">
                <div className="section-title">
                    <h2>Projects</h2>
                    <span>SELECTED WORK / 001—{projects.length}</span>
                </div>

                <div className="projects-grid" key={page}>
                    {visibleProjects.map((project) => (
                        <article
                            className={`project-card card-${project.color}`}
                            key={project.id}
                        >
                            <h3>{project.title}</h3>

                            <div className="project-card-content">
                                <div>
                                    <p className="project-category">{project.category}</p>
                                    <p>{project.description}</p>
                                </div>

                                <div className="project-image">
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} />
                                    ) : (
                                        <span>PROJECT<br />IMAGE</span>
                                    )}
                                </div>
                            </div>

                            <Link
                                className="learn-more"
                                to={`/projects/${project.id === 1
                                    ? 'crazy-fjord'
                                    : project.id === 2
                                        ? 'ai-traffic-management'
                                        : project.id === 3
                                            ? 'cyphora'
                                            : 'weather-man'}`}
                            >
                                Learn more ↗
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="project-pagination">
                    <button
                        type="button"
                        onClick={() => changePage(Math.max(1, page - 1))}
                        disabled={page === 1}
                        aria-label="Previous page"
                    >
                        ←
                    </button>

                    {Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
                        <button
                            type="button"
                            key={number}
                            className={page === number ? 'active' : ''}
                            onClick={() => changePage(number)}
                            aria-current={page === number ? 'page' : undefined}
                        >
                            {number}
                        </button>
                    ))}

                    <button
                        type="button"
                        onClick={() => changePage(Math.min(pageCount, page + 1))}
                        disabled={page === pageCount}
                        aria-label="Next page"
                    >
                        →
                    </button>
                </div>
            </div>

            <aside className="skills-panel">
                <h2>Skills</h2>

                <div className="skills-window">
                    <div className="skills-track">
                        {[...skills, ...skills].map((skill, index) => (
                            <div className="skill-item" key={`${skill.name}-${index}`}>
                                <div className="skill-logo">{skill.short}</div>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="skills-note">TOOLS OF THE TRADE</p>
            </aside>
        </section>
    )
}
