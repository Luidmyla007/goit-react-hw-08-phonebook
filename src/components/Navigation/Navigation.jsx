import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { TbHome } from "react-icons/tb";
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/"><TbHome/>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};