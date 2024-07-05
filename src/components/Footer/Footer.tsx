import './style.css';
import imgIcon from "../../assets/images/instagram.svg";
import twtIcon from "../../assets/images/twitter.svg";
import fbIcon from "../../assets/images/facebook.svg";
import linIcon from "../../assets/images/linkedin.svg";
import whatsIcon from "../../assets/images/whatsapp.svg";

export default function Footer() {
    return (
        <footer>
            <div className="nav-bar-footer">
                <div className="nav-bar-footer-left">
                    <h2>Recode Pro</h2>
                </div>
                <div className="nav-bar-footer-right">
                    <img src={imgIcon} alt="Instagram"/>
                    <img src={twtIcon} alt="Twitter"/>
                    <img src={fbIcon} alt="Facebook"/>
                    <img src={linIcon} alt="LinkedIn"/>
                    <img src={whatsIcon} alt="WhatsApp"/>
                </div>
            </div>
        </footer>
    )
}
