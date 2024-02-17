import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectAuthLogin,
  selectAuthToken,
} from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const PublicRoute = () => {
  const isLogin = useSelector(selectAuthLogin);
  const isToken = useSelector(selectAuthToken);
  if (!isLogin && isToken) {
    return <Loader />;
  }
  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }
  return <Outlet />;
};
export default PublicRoute;
