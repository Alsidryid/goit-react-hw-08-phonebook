import { NavLink } from 'react-router-dom';
import style from './NavbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={style.registr}>
      <NavLink className={style.link} to="/register">
        sign in
      </NavLink>
      |
      <NavLink className={style.link} to="/login">
        login{' '}
      </NavLink>
    </div>
  );
};
export default NavbarAuth;
