import { useState } from 'react';
import logoImg from "../../assets/images/logo-hanami.jpg";
import './style.css';
import { Link } from "react-router-dom";

export default function HeaderClient() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={"header-client"}>
            <nav className="nav-bar">
                <Link to={"/"}>
                    <div className="nav-brand">
                        <img src={logoImg} alt="imagem hanami" className="logo-hanami"/>
                        <h1>Blog Hanami</h1>
                    </div>
                </Link>

                {/* Botão do menu para telas menores */}
                <button className="menu-btn" onClick={toggleMenu}>
                    Menu
                </button>

                {/* Lista de navegação para telas maiores */}
                <ul className={`nav-list-client ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <Link to={"/"} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/aboutUs"} onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} onClick={() => setIsMenuOpen(false)}>Contato</Link>
                    </li>
                    <li className={"login-btn"}>
                        <Link to={"/login"} onClick={() => setIsMenuOpen(false)}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
