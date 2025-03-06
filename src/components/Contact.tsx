import emailjs from "@emailjs/browser";
import { PiMapPin } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { useRef, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useTranslation } from "react-i18next";

const mailIdKey = import.meta.env.VITE_EMAILJS_ID_KEY;
const mailServiceKey = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
const mailTemplateKey = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
export const Contact = () => {
    const [t] = useTranslation("global");
    const form = useRef<HTMLFormElement>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sendSms, setSendSms] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form?.current) {
            setIsLoading(true);
            emailjs
                .sendForm(
                    mailServiceKey,
                    mailTemplateKey,
                    form?.current,
                    mailIdKey
                )
                .then(
                    () => {
                        setIsLoading(false);
                        setName("");
                        setEmail("");
                        setMessage("");
                        setIsError(false);
                        setSendSms("Votre message a été envoyé avec succès.");
                    },
                    () => {
                        setIsLoading(false);
                        setIsError(true);
                        setSendSms(
                            "Le message n'a pas pu être envoyé. Veuillez réessayer."
                        );
                    }
                );

            setTimeout(() => {
                setSendSms("");
                setIsError(false);
            }, 3000);
        }
    };

    const contact = t("contact", { returnObjects: true }) as {
        title: string;
        name: string;
        send: string;
    };

    const menu = t("menu", { returnObjects: true }) as {
        liste: Array<string>;
    };

    return (
        <section className="contact" id={menu?.liste[3]?.toLowerCase()}>
            <h2>{contact?.title}</h2>
            <article className="infos">
                <div className="addr">
                    <PiMapPin />
                    <span>France, 16000 Angoulême, 47 bd d'auvergne</span>
                </div>
                <a href="mailto:bboubacarfr@gmail.com" className="email">
                    <FiMail />
                    <span>bboubacarfr@gmail.com</span>
                </a>
                <a href="tel:0744175119" className="tel">
                    <BsTelephone />
                    <span>+33 744 17 51 19</span>
                </a>
            </article>
            <article className="form">
                <form ref={form} onSubmit={sendEmail}>
                    <div
                        className={
                            isError
                                ? "error successError"
                                : "success successError"
                        }
                    >
                        {sendSms}
                    </div>
                    <label>
                        <input
                            value={name}
                            type="text"
                            placeholder={contact?.name}
                            onChange={handleNameChange}
                            required
                        />
                    </label>
                    <label>
                        <input
                            value={email}
                            type="email"
                            placeholder="Email"
                            onChange={handleEmailChange}
                            required
                        />
                    </label>
                    <label>
                        <textarea
                            value={message}
                            placeholder="Message"
                            rows={10}
                            onChange={handleMessageChange}
                            required
                        />
                    </label>
                    <input
                        type="submit"
                        value={contact?.send}
                        className="send-btn"
                        aria-label="Envoyer votre mail"
                    />
                    {isLoading ? (
                        <div className="loading">
                            <ImSpinner9 />
                        </div>
                    ) : (
                        ""
                    )}
                </form>
            </article>
        </section>
    );
};
