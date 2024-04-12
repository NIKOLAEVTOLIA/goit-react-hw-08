import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <Bars color="blue" height={80} width={80} timeout={3000} visible={true} />
    </div>
  );
}

export default Loader;
