import { Link } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">
                    Dashboard
                </span>

                <div>
                    
                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}