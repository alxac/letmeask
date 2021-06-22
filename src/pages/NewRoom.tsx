import { Link } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import '../style/auth.scss';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
  const { user } = useAuth();
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
          <h1>{user.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala? <Link to="/">aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
