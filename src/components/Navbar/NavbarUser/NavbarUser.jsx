import style from './NavbarUser.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthName } from '../../../redux/auth/auth-selectors';
import { logOut } from '../../../redux/auth/auth-operations';

const NavbarUser = () => {
  const ourName = useSelector(selectAuthName);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());

  return (
    <div className={style.user}>
      {ourName}
      <button onClick={onLogout} className={style.btn} to="/">
        logout
      </button>
    </div>
  );
};
export default NavbarUser;
