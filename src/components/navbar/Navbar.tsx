import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="bg-white shadow-md py-4 sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-8 flex justify-between items-center flex-wrap gap-4">
				<Link to="/" className="text-2xl font-bold text-gray-800 no-underline">
					E-commerce
				</Link>
				<div className="flex gap-6 items-center">
					<Link
						to="/"
						className="text-gray-800 no-underline font-medium transition-colors duration-200 hover:text-gray-600"
					>
						Home
					</Link>
					<Link
						to="/checkout"
						className="text-gray-800 no-underline font-medium transition-colors duration-200 hover:text-gray-600"
					>
						Cart
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<div className="flex gap-2">
						<Link
							to="/auth"
							className="bg-gray-500 text-white px-6 py-3 border-none rounded font-medium text-base cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.01] no-underline inline-block text-center"
						>
							Login
						</Link>
						<Link
							to="/auth"
							className="bg-blue-600 text-white px-6 py-3 border-none rounded font-medium text-base cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.01] no-underline inline-block text-center"
						>
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
