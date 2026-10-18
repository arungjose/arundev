import { Link } from 'react-router-dom'
import { useState } from 'react'
import projects from '../data/projects'

const skills = [
    { name: 'Python', short: 'Py', logo: "public/skills/python.png" },
    { name: 'Java', short: 'Ja', logo: "public/skills/java.png" },
    { name: 'C', short: 'C', logo: "public/skills/c.png" },
    { name: 'Godot', short: 'Go', logo: "public/skills/godot.png" },
    { name: 'Flutter', short: 'Fl', logo: "public/skills/flutter.png" },
    { name: 'MySQL', short: 'My', logo: "public/skills/mysql.png" },
    { name: 'JavaScript', short: 'Js', logo: "public/skills/js.png" },
    { name: 'Git', short: 'Gi', logo: "public/skills/git.png" },
    { name: 'Django', short: 'Dj', logo: "public/skills/django.png" },
    { name: 'Flask', short: 'Fl', logo: "public/skills/flask.png" },
    { name: 'Docker', short: 'Do', logo: "public/skills/docker.png" },
    { name: 'Affinity', short: 'Af', logo: "public/skills/af.png" },
    { name: 'React', short: 'Re', logo: "public/skills/react.png" },
]

const pageSize = 4

export default function Projects() {
    const [page, setPage] = useState(
        () => Number(sessionStorage.getItem('projectsPage')) || 1
    )

    const pageCount = Math.ceil(projects.length / pageSize)
    const visibleProjects = projects.slice(
        (page - 1) * pageSize,
        page * pageSize,
    )

    function changePage(nextPage) {
        setPage(nextPage)
        sessionStorage.setItem('projectsPage', String(nextPage))
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

                            </div>

                            <Link
                                className="learn-more"
                                to={`/projects/${project.id === 1
                                    ? 'crazy-fjord'
                                    : project.id === 2
                                        ? 'axolotl'
                                        : project.id === 3
                                            ? 'ai-traffic-management'
                                            : project.id === 4
                                                ? 'cyphora'
                                                : project.id === 5
                                                    ? 'cygnus'
                                                    : project.id === 6
                                                        ? 'signum'
                                                        : project.id === 7
                                                            ? 'weather-man'
                                                            : project.id === 8
                                                                ? 'souch'
                                                                : 'unknown-project'}`}
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
                                <div className="skill-logo"> <img src={skill.logo} alt={skill.short} /></div>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="skills-note">TOOLS OF THE TRADE</p>
            </aside>
        </section >
    )
}
