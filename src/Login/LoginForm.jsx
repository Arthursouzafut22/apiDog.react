import React from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Forms/Input";
import Button from "../Components/Forms/Button";
import Error from "../Components/Helper/Error";
import useForm from "../Hooks/useForm";
import { UserContext } from "../UseContext";
import styles from "../Login/LoginForm.module.css";
import stylesBtn from "../Components/Forms/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  // Função disparada após o envio do formulário
  async function handleSubmite(event) {
    event.preventDefault();

    // Faz a verificação dos campos de username e password
    // Se TRUE, faz a solicitação a API em UserContext.js para obter o token do usuário.
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmite}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button>Carregando...</Button> : <Button>Entrar</Button>}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastra-se</h2>
        <p>Ainda Nao possui conta? Cadastra-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
