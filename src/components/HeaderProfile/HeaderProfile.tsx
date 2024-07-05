import "./style.css";
import { Link } from "react-router-dom";

export default function HeaderProfile() {
    return (
        <header className="header-profile">
            <nav className="nav-bar-profile">
                <div className="nav-brand-profile">
                    <Link to={"/"}>
                        <h1>Blog Hanami</h1>
                    </Link>
                </div>
                <ul className="nav-list">
                    <li><Link to="#">Meu Perfil</Link></li>
                </ul>
            </nav>
        </header>
    );
}
