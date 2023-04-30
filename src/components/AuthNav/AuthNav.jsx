import { NavLink } from 'react-router-dom';
import { TbChecklist, TbKey} from "react-icons/tb";

export const AuthNav = () => {
  return (
    <div>
      <NavLink  to="/register"><TbChecklist/>
        Register
      </NavLink>
      <NavLink  to="/login"><TbKey/>
        Log In
      </NavLink>
    </div>
  );
};