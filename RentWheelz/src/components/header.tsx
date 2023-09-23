import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <Link to='' className="logo">
                <h1>RentWheels</h1>
            </Link>
            <div className="nav-links">
                <NavLink to=''>Home</NavLink>
                <NavLink to='about' >About</NavLink>
                <NavLink to='cars' >Cars</NavLink>
                <NavLink to='pricing' >Pricing</NavLink>
                <NavLink to='contact' >Contact</NavLink>
            </div>
            <div className="nav-actions">
                <button>Search</button>
                <button>Login</button>
            </div>
        </div >
    )
}