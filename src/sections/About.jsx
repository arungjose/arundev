
import { aboutContent } from "../data/aboutContent";

export default function About() {
    const { heading, label, story, cards, photo } = aboutContent;

    return (
        <section className="about-section" id="about">
            <header className="about-heading">
                <div>
                    <span className="about-heading-label">{label}</span>
                    <h1>{heading}</h1>
                </div>
                <span className="about-heading-index">/ 04</span>
            </header>

            <div className="about-layout">
                <article className="about-story-card">
                    <figure className="about-portrait">
                        <div className="about-portrait-image">
                            <img src={photo.src} alt={photo.alt} />
                        </div>
                        <figcaption>{photo.caption}</figcaption>
                    </figure>

                    <span className="about-card-number">
                        / {story.number}
                    </span>

                    <h2>{story.title}</h2>

                    {story.paragraphs.map((paragraph, index) => (
                        <p key={index} className="about-story-paragraph">
                            {paragraph}
                        </p>
                    ))}
                </article>

                <article className="about-card about-card-wide">
                    <span className="about-card-number">
                        / {cards[0].number}
                    </span>
                    <span className="about-card-eyebrow">
                        {cards[0].eyebrow}
                    </span>
                    <h2>{cards[0].title}</h2>
                    <p>{cards[0].description}</p>
                </article>

                {cards.slice(1).map((card) => (
                    <article
                        key={card.id}
                        className={`about-card about-card-${card.color}`}
                    >
                        <span className="about-card-number">
                            / {card.number}
                        </span>
                        <span className="about-card-eyebrow">
                            {card.eyebrow}
                        </span>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
