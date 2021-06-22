import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg';

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Img" />
                <strong>Crie salas</strong>
                <p>Tire suas duvidas</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="logo" />
                    <button>
                        <img src={googleImg} alt="" />
                        Crie sua sala com o google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Código sa sala" />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}
