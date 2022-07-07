import "./login.css";
import { ImMail4, ImLock } from "react-icons/im";
import { VscAccount } from "react-icons/vsc";

export function Login() {
  return (
    <div className="login-page">
      <div className="auth-side">
        <div className="icon-login">
          <VscAccount size="50px" color="white"></VscAccount>
        </div>

        <form id="my_form" className="">
          <div className="input-group">
            <ImMail4 size="23px" color="white"></ImMail4>
            <input
              type="email"
              name="usuario"
              id="usuario"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div  className="input-group">
            <ImLock size="23px" color="white"></ImLock>
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="display-flex justify-center align-center">
          <button type="submit">Entrar</button>
          </div>
            
        </form>
      </div>
    </div>
  );
}
