import {Link} from "react-router-dom";

export default function Navbar() {
    return <>
        <ul>
            <li>
                <Link to="/" data-testid="menu-home">Home</Link>
            </li>
            <li>
                <Link to="/about" data-testid="menu-about">About</Link>
            </li>
            <li>
                <Link to="/dashboard" data-testid="menu-dashboard">Dashboard</Link>
            </li>
        </ul>
        <hr />
    </>
}