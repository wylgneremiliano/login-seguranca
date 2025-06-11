

import './App.css';
import Logo from './assets/logo.png'
import { LoginForm } from './components/LoginForm';

export type Usuario = {
  username: string;
  password: string
}

function App() {
  const usuario = {
    username: "admin",
    password: "123456"
  }
  const handleLogin = ({ username, password }: Usuario): void => {
    if (usuario.username === username && usuario.password === password) {
      alert("Logado");
    } else {
      alert("Usuário ou senha invalidos!");
    }

  }

  return (
    <div className='main'>
      <div className='container'>
        <div className='imagemLogin'>
          <img src={Logo} alt="" width={550} height={345} />
        </div>
        <LoginForm handleLogin={handleLogin} />
      </div>
    </div>
  )
}

export default App
