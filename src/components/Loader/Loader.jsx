import style from './Loader.module.css';
import { createPortal } from 'react-dom';

const loaderRoot = document.getElementById('loader-root');
export default function Loader() {
  return createPortal(
    <div className={style.sp}>
      <div className={style.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>,
    loaderRoot
  );
}
