import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { selectAuthLogin } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const authLogin = useSelector(selectAuthLogin);

  return (
    <navbar className={style.nav}>
      <div className={style.navigation}>
        <NavLink className={style.link} to="/">
          Home
        </NavLink>
        {authLogin && (
          <NavLink className={style.link} to="/my-contacts">
            Contacts
          </NavLink>
        )}
      </div>

      {!authLogin && <NavbarAuth />}
      {authLogin && <NavbarUser />}
    </navbar>
  );
};
export default Navbar;
