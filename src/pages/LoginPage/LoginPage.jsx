import LoginForm from 'components/LoginForm/LoginForm';
import style from './LoginPage.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();
  const handleLogin = body => {
    dispatch(logIn(body));
  };

  return (
    <div className={style.logbox}>
      <h1 className={style.title}>Please Login</h1>
      {authLoading && <Loader />}
      <LoginForm onSubmit={handleLogin} />
      {authError && <p>{authError}</p>}
      <Link className={style.link} to="/">
        to home page
      </Link>
    </div>
  );
};

export default LoginPage;
