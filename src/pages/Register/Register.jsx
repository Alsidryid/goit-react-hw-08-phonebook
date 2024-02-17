import { Link } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/auth/auth-operations';
import Loader from 'components/Loader/Loader';
import style from './Register.module.css';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';

const Register = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();
  const handleSignUp = body => {
    dispatch(signUp(body));
  };

  return (
    <div className={style.regbox}>
      <h1 className={style.title}>Please Register</h1>
      {authLoading && <Loader />}

      <RegisterForm onSubmit={handleSignUp} />
      {authError && <p>{authError}</p>}

      <Link className={style.link} to="/">
        to home page
      </Link>
    </div>
  );
};

export default Register;
