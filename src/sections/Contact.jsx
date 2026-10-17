
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactContent } from "../data/contactContent";

function SocialIcon({ type }) {
    if (type === "linkedin") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v11.7H3.3V9Zm6.2 0h3.6v1.6h.1A4 4 0 0 1 16.8 8c3.9 0 4.6 2.5 4.6 5.8v6.9h-3.8v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.2H9.5V9Z"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.9 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.8 5.5-5.4 5.8.4.3.8 1 .8 2v3.3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z"
            />
        </svg>
    );
}

export default function Contact() {
    const { heading, eyebrow, cardTitle, image, form, socialHeading, socials } =
        contactContent;

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    async function handleSubmit(event) {
        event.preventDefault();

        if (isSending) return;

        const formElement = event.currentTarget;
        const data = new FormData(formElement);

        // Basic honeypot. Real anti-spam protection should also be
        // configured in the email service.
        if (data.get("website")) return;

        const firstName = data.get("first_name").trim();
        const lastName = data.get("last_name").trim();
        const email = data.get("user_email").trim();
        const message = data.get("message").trim();
        const fullName = `${firstName} ${lastName}`.trim();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const contactTemplate =
            import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
        const receiptTemplate =
            import.meta.env.VITE_EMAILJS_RECEIPT_TEMPLATE_ID;

        if (!serviceId || !publicKey || !contactTemplate || !receiptTemplate) {
            setStatus({
                type: "error",
                message: "Email service is not configured yet.",
            });
            return;
        }

        setIsSending(true);
        setStatus({ type: "", message: "" });

        const commonParams = {
            first_name: firstName,
            last_name: lastName,
            user_name: fullName,
            user_email: email,
            message,
        };

        try {
            // Send the message to the site owner.
            await emailjs.send(
                serviceId,
                contactTemplate,
                commonParams,
                { publicKey }
            );

            // Send the visitor a receipt only after the first send succeeds.
            await emailjs.send(
                serviceId,
                receiptTemplate,
                commonParams,
                { publicKey }
            );

            setStatus({
                type: "success",
                message: form.success,
            });

            formElement.reset();
        } catch (error) {
            console.error("Contact form error:", error);

            setStatus({
                type: "error",
                message:
                    "We couldn't confirm delivery of both emails. Please try again or contact me through social media.",
            });
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section className="contact-section" id="contact">
            <header className="contact-heading">
                <div>
                    <span className="contact-eyebrow">{eyebrow}</span>
                    <h1>{heading}</h1>
                </div>

                <span className="contact-heading-index">/ CONTACT</span>
            </header>

            <div className="contact-content">
                <div className="contact-main-card">
                    <div className="contact-art-panel">
                        <img src={image.src} alt={image.alt} />
                        <span className="contact-art-caption">
                            {image.caption}
                        </span>
                    </div>

                    <div className="contact-form-panel">
                        <h2>{cardTitle}</h2>

                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="contact-name-row">
                                <label>
                                    <span>{form.firstName}</span>
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="John"
                                        autoComplete="given-name"
                                        maxLength={80}
                                        required
                                    />
                                </label>

                                <label>
                                    <span>{form.lastName}</span>
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Doe"
                                        autoComplete="family-name"
                                        maxLength={80}
                                        required
                                    />
                                </label>
                            </div>

                            <label>
                                <span>{form.email}</span>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="john@example.com"
                                    autoComplete="email"
                                    maxLength={254}
                                    required
                                />
                            </label>

                            <label>
                                <span>Your message</span>
                                <textarea
                                    name="message"
                                    placeholder={form.message}
                                    rows={5}
                                    maxLength={5000}
                                    required
                                />
                            </label>

                            <div className="contact-honeypot" aria-hidden="true">
                                <label>
                                    Leave this field empty
                                    <input
                                        type="text"
                                        name="website"
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </label>
                            </div>

                            <button
                                className="contact-submit"
                                type="submit"
                                disabled={isSending}
                            >
                                {isSending ? form.sending : form.submit}
                                {!isSending && <span aria-hidden="true"> ↗</span>}
                            </button>

                            <p
                                className={`contact-status ${status.type ? `is-${status.type}` : ""
                                    }`}
                                role="status"
                                aria-live="polite"
                            >
                                {status.message}
                            </p>
                        </form>
                    </div>
                </div>

                <aside className="contact-socials">
                    <h2>{socialHeading}</h2>

                    <div className="contact-social-links">
                        {socials.map((social) => (
                            <a
                                key={social.id}
                                className="contact-social-link"
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit my ${social.label} profile`}
                            >
                                <span className="contact-social-icon">
                                    <SocialIcon type={social.id} />
                                </span>
                                <span>{social.label}</span>
                                <span aria-hidden="true">↗</span>
                            </a>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}
