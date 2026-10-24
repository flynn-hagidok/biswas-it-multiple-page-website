import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router"

const navItems = [
    {
        id: 1,
        label: "Home",
        href: "/"
    },
    {
        id: 2,
        label: "Service",
        href: "/service"
    },
    {
        id: 3,
        label: "Members",
        href: "/team-member"
    },
]

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(false)
    }

    return (
        <section className="">
            <div className="shadow-md p-6">
                <div className="flex max-w-7xl mx-auto justify-between items-center">
                    <NavLink to="/"
                        className="text-2xl lg:text-4xl font-semibold"
                    >
                        Biswas IT Firm
                    </NavLink>

                    <nav className="hidden lg:flex">
                        <ul className="flex gap-8">
                            {
                                navItems.map(item =>
                                    <li key={item.id}>
                                        <NavLink
                                            to={item.href}
                                            className={({ isActive }) => `font-semibold py-2 hover:text-blue-600 hover:border-b-2 ${isActive ? "border-b-2 text-blue-600" : ""}`}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>

                    <button
                        className="font-semibold rounded bg-blue-600 text-[#ffff] px-4 py-2 cursor-pointer active:scale-98 hidden lg:flex"
                    >
                        Get Started
                    </button>

                    {/* mobile navigation */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden"
                    >
                        <MdMenu size={20} />
                    </button>
                </div>
            </div>
            {
                menuOpen && (
                    <nav className="p-4 shadow-md">
                        <ul className="flex flex-col gap-4">
                            {
                                navItems.map(item =>
                                    <li key={item.id}>
                                        <NavLink
                                            onClick={handleMenu}
                                            to={item.href}
                                            className={({ isActive }) => `font-semibold py-2 hover:text-blue-600 hover:border-b-2 ${isActive ? "text-blue-600" : ""}`}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>

                        <button
                            onClick={handleMenu}
                            className="font-semibold rounded bg-blue-600 mt-4 w-full text-[#ffff] px-4 py-2 cursor-pointer active:scale-98"
                        >
                            Get Started
                        </button>
                    </nav>
                )
            }
        </section>
    )
};

export default Navbar;