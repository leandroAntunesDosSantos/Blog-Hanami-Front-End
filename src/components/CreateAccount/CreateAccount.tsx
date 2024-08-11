import './style.css';
import axios from "axios";
import {BASE_URL} from "../../utils/system.ts";
import {useState} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {useNavigate} from "react-router-dom";
const MySwal = withReactContent(Swal);

export default function CreateAccount(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event: { preventDefault: () => void; }){
        event.preventDefault();
        if (password !== confirmPassword){
            MySwal.fire({
                title: "Erro",
                text: "As senhas não conferem",
                icon: "error",
                confirmButtonText: "Ok",
            });
            return;
        }
        axios.post(BASE_URL + "/newUsers", {
            name: name,
            email: email,
            password: password
        }).then(() => {
            MySwal.fire({
                title: "Usuário cadastrado com sucesso!",
                icon: "success",
                confirmButtonText: "Ok",
            }).then(() => {
                navigate("/login"); // Redireciona para a página de login
            });
        }).catch(error => {
            console.log("erro ", error);
            navigate("/createAccount"); // Redireciona para a página de cadastro
        })
    }

    return (
        <main className={"container"}>
            <div className={"container-create-account"}>
                <h2 className={"title-create-account"}>Crie sua conta</h2>
                <form className={"form-create-account"} onSubmit={handleSubmit}>
                    <div className={"form-group"}>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={"form-control"}
                            required
                            onChange={event => setName(event.target.value)}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={"form-control"}
                            required
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={"form-control"}
                            required
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="confirmPassword">Confirme sua senha:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className={"form-control"}
                            required
                            onChange={event => setConfirmPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className={"btn-register"} >Cadastrar</button>
                </form>
            </div>
        </main>
    );
}
