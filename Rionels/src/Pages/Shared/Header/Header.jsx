import logo from '../../../assets/Rionel/vector/default-monochrome-white.svg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar bg-black text-secondary flex-col md:flex-row">
      <div className="flex-1">
        <Link to='/'>
        <div className="w-20 rounded-full">
          <img src={logo} />
        </div>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link>All Toys</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </ul>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
              <Link>Add a Toy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
