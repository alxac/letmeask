import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import '../style/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
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
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala? <a href="/home">aqui</a>
          </p>
        </div>
      </main>
    </div>
  )
}
