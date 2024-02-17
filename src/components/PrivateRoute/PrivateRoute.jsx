import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectAuthLogin,
  selectAuthToken,
} from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const PrivateRoute = () => {
  const isLogin = useSelector(selectAuthLogin);
  const isToken = useSelector(selectAuthToken);
  if (!isLogin && isToken) {
    return <Loader />;
  }
  if (!isLogin && !isToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
