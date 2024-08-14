import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img 
          src="https://www.whitesky.co.id/images/logo_wsa.png"
          style={{ width: "150px" }} 
          alt="logo" 
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
            <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
            >
                Account
            </a>
            <ul className="dropdown-menu">
                <li>
                <Link to={'/sign-in'} className="dropdown-item">
                    Sign In
                </Link>
                </li>
                <li>
                <Link to={'/sign-uo'} className="dropdown-item">
                    Sign Up
                </Link>
                </li>
            </ul>
            </li>
            <li className="nav-item">
              <Link to={'/profile'} className="nav-link">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
