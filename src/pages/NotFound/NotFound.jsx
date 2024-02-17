import { Link } from 'react-router-dom';
import style from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={style.not}>
      <h1>This page os not exist</h1>
      <Link to="/"> to home page </Link>
    </div>
  );
};

export default NotFound;
