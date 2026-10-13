import './login-page.css';
import { useState } from 'react';
import InputText from '../../components/input-text/input-text';
import SubmitButton from '../../components/submit-button/submit-button';
import { LoginDTO } from '../../models/loginDTO';

function LoginPage(props: { login: (dto: LoginDTO) => Promise<void>, handleOpen: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async () => {
    setDisabled(true);
    await props.login({ email, password });
    props.handleOpen();
    setDisabled(false);
  }
  
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <InputText label="Username:" id="username" name="username" type="text" handleChanges={setEmail} />
        <InputText label="Password:" id="password" name="password" type="password" handleChanges={setPassword} />
        <SubmitButton label="Login" onClick={handleSubmit} disabled={disabled}/>
      </form>
    </div>
  );
}

export default LoginPage;
