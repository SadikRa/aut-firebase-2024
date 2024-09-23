import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-10">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    );
};

export default Header;