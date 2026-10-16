
import { useState } from 'react'

const education = [
    {
        title: "Bachelor's in Technology",
        institution: 'APJ Abdul Kalam Technological University',
        period: '2022 - 2026',
        description:
            'Computer Science and Engineering. Add a short description of your degree and academic focus.',
        topics: [
            'Computer Science',
            'Programming',
            'AI / ML',
            'Databases',
            'Web Development',
        ],
        color: 'mint',
    },
    {
        title: 'Higher Secondary Education',
        institution: "St. Antony's Public School",
        period: '2020 - 2022',
        description:
            'Add a short description of your higher secondary education and stream.',
        topics: ['ADD SUBJECT', 'ADD SUBJECT', 'ADD SUBJECT'],
        color: 'blue',
    },
    {
        title: 'Secondary Education',
        institution: 'ADD YOUR SCHOOL NAME',
        period: 'ADD YOUR STUDY PERIOD',
        description:
            'Add a short description of your secondary education.',
        topics: ['ADD SUBJECT', 'ADD SUBJECT', 'ADD SUBJECT'],
        color: 'yellow',
    },
]

const certificates = [
    {
        title: 'Certificate 01',
        issuer: 'ADD ISSUING ORGANIZATION',
        year: 'YEAR',
        description: 'Add a short description of this certification.',
        image: null,
    },
    {
        title: 'Certificate 02',
        issuer: 'ADD ISSUING ORGANIZATION',
        year: 'YEAR',
        description: 'Add a short description of this certification.',
        image: null,
    },
    {
        title: 'Certificate 03',
        issuer: 'ADD ISSUING ORGANIZATION',
        year: 'YEAR',
        description: 'Add a short description of this certification.',
        image: null,
    },
    {
        title: 'Certificate 04',
        issuer: 'ADD ISSUING ORGANIZATION',
        year: 'YEAR',
        description: 'Add a short description of this certification.',
        image: null,
    },
]

export default function Academics() {
    const [activeCertificate, setActiveCertificate] = useState(0)

    function moveCertificate(direction) {
        setActiveCertificate(
            (current) =>
                (current + direction + certificates.length) % certificates.length
        )
    }

    return (
        <section id="academics" className="academics-section">
            <div className="academics-main">
                <header className="academics-heading">
                    <h2>Academics</h2>
                </header>

                <div className="education-list">
                    {education.map((item) => (
                        <article
                            className={`education-card education-${item.color}`}
                            key={item.title}
                        >
                            <div className="education-content">
                                <h3>{item.title}</h3>

                                <p className="education-institution">
                                    {item.institution}
                                </p>

                                <p className="education-description">
                                    {item.description}
                                </p>

                                <span className="education-period">{item.period}</span>
                            </div>

                            <div className="education-topics">
                                {item.topics.map((topic, index) => (
                                    <span className="topic-badge" key={`${topic}-${index}`}>
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <aside className="certifications-panel">
                <header className="certifications-heading">
                    <h2>Certifications</h2>
                </header>

                <div className="certificate-carousel">
                    <button
                        type="button"
                        className="certificate-arrow"
                        onClick={() => moveCertificate(-1)}
                        aria-label="Previous certificate"
                    >
                        ↑
                    </button>

                    <div className="certificate-window">
                        <div
                            className="certificate-track"
                            style={{
                                transform: `translateY(-${activeCertificate * 100}%)`,
                            }}
                        >
                            {certificates.map((item, index) => (
                                <article className="certificate-slide" key={item.title}>
                                    <div className="certificate-image">
                                        {item.image ? (
                                            <img src={item.image} alt={item.title} />
                                        ) : (
                                            <div className="certificate-placeholder">
                                                <span>CERTIFICATE</span>
                                                <strong>
                                                    {String(index + 1).padStart(2, '0')}
                                                </strong>
                                                <span>IMAGE GOES HERE</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="certificate-description">
                                        <h3>{item.title}</h3>
                                        <p className="certificate-issuer">{item.issuer}</p>
                                        <p>{item.description}</p>
                                        <span className="certificate-year">{item.year}</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        className="certificate-arrow"
                        onClick={() => moveCertificate(1)}
                        aria-label="Next certificate"
                    >
                        ↓
                    </button>
                </div>

                <p className="certificate-counter">
                    {String(activeCertificate + 1).padStart(2, '0')} /{' '}
                    {String(certificates.length).padStart(2, '0')}
                </p>
            </aside>
        </section>
    )
}
