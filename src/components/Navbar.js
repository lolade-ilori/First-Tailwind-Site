import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            {/* HERO SECTION */}
            <div className="w-full bg-indigo-600 p-4 flex justify-between items-center">
                {/* Left Side */}
                <div className="flex justify-between items-center">
                    <img src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png" alt="Logo" width={50}
                        className="mr-2"
                    />
                    <div>
                        <Link to="/" className="inline-block p-2 text-indigo-300 mr-2 hover:text-indigo-100">Home</Link>
                        <Link to="/" className="inline-block p-2 text-indigo-300 hover:text-indigo-100">About</Link>
                    </div>
                </div>

                {/* Right Side */}
                {/* className="hidden md:block" */}
                <div>
                    <Link to="/" className="inline-block p-2 text-indigo-300 hover:text-indigo-100 mr-2">Login</Link>
                    <Link to="/" className="inline-block py-2 px-4 text-yellow-700 bg-yellow-400 rounded
                        hover:bg-yellow-300 hover:text-yellow-800 transition ease-in duration-150"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
