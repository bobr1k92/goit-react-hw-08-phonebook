import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        <NavLink className={({ isActive }) => `${isActive && css.active} ${css.link}`} to="/contacts">
          Contacts
        </NavLink>
      ) : <NavLink className={({ isActive }) => `${isActive && css.active} ${css.link}`} to="/">
        Home
      </NavLink>}
    </nav>
  );
};