import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg';

import '../style/auth.scss';
import { Button } from '../components/Button';

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Img" />
                <strong>Crie salas</strong>
                <p>Tire suas duvidas</p>
            </aside>
            <main>
                <div className="main-container">
                    <img src={logoImg} alt="logo" />
                    <button className="create-room">
                        <img src={googleImg} alt="" />
                        Crie sua sala com o google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Código sa sala" />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
