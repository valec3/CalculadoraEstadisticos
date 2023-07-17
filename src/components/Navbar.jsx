import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <header className="bg-gray-900 py-3 flex justify-center">
            <Link to="/">
                <h1 className="text-white text-2xl font-bold hover:scale-110 hover:text-orange-500 transition-all duration-500">Quiz App</h1>
            </Link>

        </header>
    )
}
