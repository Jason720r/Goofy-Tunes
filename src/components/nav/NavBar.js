import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/tickets">???</Link>
            </li>
        <li className="navbar__item">
        <Link className="nav-link" to="/home">
        <i className="fas fa-edit"></i>
        <div className="home_nav">Home</div>
        <span></span>
    </Link>
        </li>
        <li className="navbar__item">
        <Link className="nav-link" to="/boss">
        <i className="fas fa-edit"></i>
        <div className="challenge_nav">Challenge</div>
        <span></span>
    </Link>
        </li>
            {
                localStorage.getItem("honey_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("honey_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

