
import { NavLink, Link } from "react-router-dom"
import loginIcon from "../assets/login-icon.png"

export default function Header() {

    function fakeLogout() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
            <Link to="/" className='site-logo'>#VanLife</Link>
            <nav>
                <NavLink 
                to="/host"
                className={({isActive}) => isActive ? "active-link" : null}
                >
                    Host
                </NavLink>

                <NavLink 
                to="/about"
                className={({isActive}) => isActive ? "active-link" : null}
                >
                    About
                </NavLink>

                <NavLink 
                to="/vans"
                className={({isActive}) => isActive ? "active-link" : null}
                >
                    Vans
                </NavLink>

                <Link to="login" className="login-link">
                    <img src={loginIcon} className="login-icon" />
                </Link>
                <button onClick={fakeLogout}>x</button>
            </nav>
        </header>
    )
}

