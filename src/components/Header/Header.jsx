import { Link, NavLink } from "react-router-dom"
import logo from "../../../Resources/Logo.png"


const Header = () => {
    return (
        <div>
            <nav className="flex justify-between items-center p-6">
                <Link to={"/"}>
                <img src={logo} alt="logo" className="" />
                </Link>
                <ul className="flex gap-5 text-lg">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] hover:underline" : ""
                            }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donations"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] hover:underline" : ""
                            }
                        >Donation</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] hover:underline" : ""
                            }
                        >Statistics</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
