import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/cycle-info">Cycle Info</Link>
    <Link to="/track-care">Track & Care</Link>
    <Link to="/mood-tracker">Mood Tracker</Link>
    <Link to="/resources">Resources</Link>
  </nav>
);

export default Navbar;



