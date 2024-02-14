import { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../styles/contact.scss"

const mailIdKey = process.env.REACT_APP_EMAILJS_ID_KEY;
const mailServiceKey = process.env.REACT_APP_EMAILJS_SERVICE_KEY;
const mailTemplateKey = process.env.REACT_APP_EMAILJS_TEMPLATE_KEY;

function Contact({id}) {

    return(
        <article className="bcr-contact bcr-panel" id={id}>
            <div className="bcr-contact-form  bcr-panel-details">
                <h1>Mail</h1>
                <Message />
            </div>
        </article>
    )
}

function Message() {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sucessMessage, setSucessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    let MessageTimer = null;
    const sendEmail = (e) => {
        e.preventDefault();
        MessageTimer = null

        emailjs.sendForm(mailServiceKey, mailTemplateKey, 
            form.current, mailIdKey)
        .then((result) => {
            setErrorMessage('')
            setSucessMessage("Message bien envoyé.")
            setName('');
            setEmail('');
            setMessage('');
            MessageTimer = setTimeout(() => {
                setSucessMessage('');
                clearTimeout(MessageTimer);
            }, 5000);
        }, (error) => {
            setSucessMessage('');
            setErrorMessage("Erreur d'envoi, veuillez reessayer.")
            MessageTimer = setTimeout(() => {
                setErrorMessage('');
                clearTimeout(MessageTimer);
            }, 5000)
        });
        e.target.reset();
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            {
                sucessMessage ? <span className="succes"> {sucessMessage} </span>
                : ''
            }
            {
                errorMessage ? <span className="erreur"> {sucessMessage} </span>
                : ''
            }
            <label>
                <input type="text" value={name} onChange={handleNameChange} 
                    name="user_name" placeholder="Votre nom" required/>
                <input type="email" value={email} onChange={handleEmailChange}
                    placeholder='Votre email' required name="user_email"/>
            </label>
            <label>
                <textarea value={message} onChange={handleMessageChange} 
                    name="message" placeholder='Message' required />
                <input type="submit" value="Envoyer" />
            </label>
        </form>
    )
}

export default Contact;