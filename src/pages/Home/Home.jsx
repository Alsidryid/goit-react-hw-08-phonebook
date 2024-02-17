import style from './Home.module.css';
import picture from '../../images/2.png';
const Home = () => {
  return (
    <div className={style.home}>
      <h1>PHONEBOOK</h1>
      <img className={style.image} src={picture} alt="phone" />
    </div>
  );
};

export default Home;
