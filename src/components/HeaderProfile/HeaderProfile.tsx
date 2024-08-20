import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function HeaderProfile() {

    const navigate = useNavigate();

    function logoutAccount(event: { preventDefault: () => void; } ) {
        event.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("expiresIn");
        navigate("/");
    }
    return (
        <header className="header-profile">
            <nav className="nav-bar-profile">
                <div className="nav-brand-profile">
                    <Link to={"/"}>
                        <h1>Blog Hanami</h1>
                    </Link>
                </div>
                <ul className="nav-list">
                    <li>
                        <Link to={"/profile"}>Perfil</Link>
                    </li>
                    <button className="button-exit" onClick={logoutAccount}>Sair</button>
                </ul>
            </nav>
        </header>
    );
}

