import './style.css';

export default function LoginComp() {
    return (
        <main className="containerAA">
            <section className="container-login">
                <h2 className="title-login">Login</h2>
                <form className="form-login">
                    <div className="form-group">
                        <input type="email" id="email" name="email" required placeholder={"Email"}/>
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" name="password" required placeholder={"Senha"}/>
                    </div>
                    <button className="btn-login">Entrar</button>
                </form>
            </section>
        </main>
    );
}
