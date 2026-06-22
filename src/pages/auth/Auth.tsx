import { useState } from "react";

export default function Auth() {
	const [mode, setMode] = useState("signup");
	return (
		<div className="flex-1 py-8">
			<div className="max-w-6xl mx-auto px-8">
				<div className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-md">
					<h1 className="text-3xl mb-8 text-gray-800" aria-label="sign up">
						{mode === "signup" ? "Sign Up" : "Login"}
					</h1>
					<form action="" className="mb-8">
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 font-medium text-gray-800"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								className="w-full p-3 border border-gray-300 rounded text-base transition-colors duration-200 focus:border-blue-500 focus:outline-none"
								placeholder="Enter your email..."
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="password"
								className="block mb-2 font-medium text-gray-800"
							>
								Password
							</label>
							<input
								id="password"
								type="password"
								className="w-full p-3 border border-gray-300 rounded text-base transition-colors duration-200 focus:border-blue-500 focus:outline-none"
								placeholder="Enter your password..."
							/>
						</div>
						<button
							type="submit"
							className="bg-blue-600 text-white px-8 py-4 border-none rounded font-medium text-base cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.01] no-underline inline-block text-center mt-4 w-full"
						>
							{mode === "signup" ? "Sign Up" : "Login"}
						</button>
					</form>
					<div className="mt-6 text-center text-gray-500">
						{mode === "signup" ? (
							<p>
								Already have an account?
								<button
									type="button"
									className="text-blue-600 ml-2 no-underline font-medium cursor-pointer"
									onClick={() => setMode("login")}
								>
									Login
								</button>
							</p>
						) : (
							<p>
								Don't have an account?
								<button
									type="button"
									className="text-blue-600 ml-2 no-underline font-medium cursor-pointer"
									onClick={() => setMode("signup")}
								>
									Sign up
								</button>
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
