import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-dark bg-dark px-3">
    <Link to="/" className="navbar-brand text-white">
      Movie Explorer
    </Link>
  </nav>
);

export default Header;
