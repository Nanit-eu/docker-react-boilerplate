import {Link} from "react-router-dom";

export default function Navbar() {
    return <>
        <nav className="navbar sticky-top navbar-light bg-light navbar-expand-lg" role="navigation">
            <div className="container">
                <Link className="navbar-brand" to="/" data-testid="menu-logo-link">Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/" data-testid="menu-home" activeclassname="active">Home</Link>
                        <Link className="nav-link" to="/about" data-testid="menu-about"
                              activeclassname="active">About</Link>
                        <Link className="nav-link" to="/dashboard" data-testid="menu-dashboard"
                        activeclassname="active">Dashboard</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}