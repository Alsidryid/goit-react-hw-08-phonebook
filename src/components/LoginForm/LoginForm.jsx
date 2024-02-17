import { useState, useId } from 'react';
import style from './LoginForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const { email, password } = state;
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div>
        <label className={style.label} htmlFor={emailId}>
          Email
        </label>
        <input
          className={style.input}
          onChange={handleChange}
          id={emailId}
          value={email}
          type="email"
          name="email"
        />
      </div>
      <div>
        <label className={style.label} htmlFor={passwordId}>
          Password
        </label>
        <input
          className={style.input}
          onChange={handleChange}
          id={passwordId}
          value={password}
          type="password"
          name="password"
        />
      </div>
      <button className={style.btn} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
