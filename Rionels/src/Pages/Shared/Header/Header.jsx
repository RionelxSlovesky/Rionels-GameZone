import { useContext } from "react";
import logo from "../../../assets/Rionel/vector/default-monochrome-white.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {

  const {user, loading, logOut} = useContext(AuthContext)

  return (
    <div className="navbar bg-black text-secondary flex-col md:flex-row">
      <div className="flex-1">
        <Link to="/">
          <div className="w-20 rounded-full">
            <img src={logo} />
          </div>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/toys'>All Toys</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
        {loading || (user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} title={user.displayName}/>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <Link>My Toys</Link>
              </li>
              <li>
                <Link to="/addAToy">Add a Toy</Link>
              </li>
              <li>
                <Link onClick={logOut}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to='/login'>Login</Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
