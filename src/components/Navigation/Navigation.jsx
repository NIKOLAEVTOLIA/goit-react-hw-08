import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(css.link, isActive && css.isActive)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => clsx(css.link, isActive && css.isActive)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
