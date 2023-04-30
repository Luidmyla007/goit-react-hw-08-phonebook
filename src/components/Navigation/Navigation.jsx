import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { TbHome, TbUsers } from "react-icons/tb";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/"><TbHome/>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts"><TbUsers size={16}/>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};