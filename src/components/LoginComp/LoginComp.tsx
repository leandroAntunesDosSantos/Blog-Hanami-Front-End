import './style.css';
import {BASE_URL} from "../../utils/system.ts";
import axios from "axios";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import InputFormLogin from '../InputFormLogin/InputFormLogin.tsx';
const MySwal = withReactContent(Swal);


export default function LoginComp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    function handleSubmit(event: { preventDefault: () => void; }){
        event.preventDefault();
        axios.post(BASE_URL + "/login", {
            email: email,
            password: password
        }).then(response => {
            window.localStorage.setItem("token", JSON.stringify(response.data.acessToken));
            navigate("/profile");
        }).catch(() => {
            MySwal.fire({
                title: "Erro",
                text: "Email ou senha inválidos",
                icon: "error",
                confirmButtonText: "Ok",
            }).then(r => {
                if (r.isConfirmed || r.isDismissed) {
                    navigate("/login");
                }
            })
        })
    }



    return (
        <main className="containerAA">
            <div className="container-login">
                <h2 className="title-login">Login</h2>
                <form className="form-login" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <InputFormLogin 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder={"Email"} 
                            onChange={event => setEmail(event.target.value)} 
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <InputFormLogin 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder={"Senha"} 
                            onChange={event => setPassword(event.target.value)} 
                            required={true}
                        />
                    </div>
                    <button className="btn-login" type='submit'>Entrar</button>
                    <Link to={"/createAccount"} className="btn-create">Criar Conta</Link>
                </form>
            </div>
        </main>
    );
}
