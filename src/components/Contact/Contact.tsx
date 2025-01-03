import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import fotoLeandro from "../../assets/images/leandro_perfil.jpg";
import fotoNayara from "../../assets/images/nayara-perfil.webp";
import fotoMariana from "../../assets/images/mariana_perfil.webp";
import fotoMaria from "../../assets/images/maria_perfil.png";


export default function ContactHome() {
    const contacts = [
        {
            index: 1,
            name: "Leandro Antunes",
            whatsapp: "45998550854",
            linkedin: "https://www.linkedin.com/in/leandrosantosjs/",
            github: "https://github.com/leandroAntunesDosSantos/",
            photo: fotoLeandro
        },
        {
            index: 2,
            name: "Nayra Brito",
            whatsapp: "4599999999",
            linkedin: "https://www.linkedin.com/in/nayarabpereira/",
            github: "https://github.com/nxyara/",
            photo: fotoNayara
        },
        {
            index: 3,
            name: "Mariana Moreira",
            whatsapp: "4599999999",
            linkedin: "https://www.linkedin.com/in/mariana-moreira-ti/",
            github: "https://github.com/mari-moreira/",
            photo: fotoMariana
        },
        {
            index: 4,
            name: "Maria Viana",
            whatsapp: "4599999999",
            linkedin: "https://www.linkedin.com/in/maria-viana-688166230/",
            github: "https://github.com/Marian97a",
            photo: fotoMaria
        }
    ];

    return (
        <section className="contact-container">
            <h1>Entre em Contato</h1>
            <div className="contact-grid">
                {contacts.map((person) => (
                    <div key={person.index} className="contact-person">
                        <img src={person.photo} alt={person.name} className="contact-photo" />
                        <div className="contact-info">
                            <h2>{person.name}</h2>
                            <ul className="social-icons">
                                <li>
                                    <a href={`https://api.whatsapp.com/send?phone=${person.whatsapp}`} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp" />
                                    </a>
                                </li>
                                <li>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} className="icon github" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="thank-you-message">Obrigado por entrar em contato!</h1>
        </section>
    );
}
