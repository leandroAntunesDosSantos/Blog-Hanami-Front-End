import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./style.css"

export default function ContactHome() {
    return (
        <section className="contact-container">
            <h1>Entre em Contato</h1>
            <div className="contact-person">
                <h2>Leandro Antunes</h2>
                <ul className="social-icons">
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=4599999999">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/">
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact-person">
                <h2>Nayra Brito</h2>
                <ul className="social-icons">
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=4599999999">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/">
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact-person">
                <h2>Mariana Moreira</h2>
                <ul className="social-icons">
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=4599999999">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/">
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact-person">
                <h2>Maria Viana</h2>
                <ul className="social-icons">
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=4599999999">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/">
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                    </li>
                </ul>
            </div>
            <h1>Obrigado por entrar em contato!</h1>
        </section>
    );
}
