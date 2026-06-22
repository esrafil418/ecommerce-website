import { useHexclaveApp, useUser } from "@hexclave/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth() {
	const [mode, setMode] = useState("signup");

	const app = useHexclaveApp();
	const user = useUser();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	async function onSubmit(data: any) {
		try {
			if (mode === "signup") {
				await app.signUpWithCredential({
					email: data.email,
					password: data.password,
				});
				console.log("User signed up successfully!");
			} else {
				await app.signInWithCredential({
					email: data.email,
					password: data.password,
				});
				console.log("User logged in successfully!");
			}
		} catch (error) {
			console.error("Authentication error", error);
			alert("Error: " + (error as Error).message);
		}
	}

	const getErrorMessage = (error: unknown): string => {
		if (typeof error === "string") return error;
		if (error && typeof error === "object" && "message" in error) {
			return String(error.message);
		}
		return "";
	};

	if (user) {
		return (
			<div className="flex-1 py-8">
				<div className="max-w-6xl mx-auto px-8">
					<div className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-md text-center">
						<div className="text-green-600 text-5xl mb-4">✅</div>
						<h2 className="text-2xl font-bold">Welcome!</h2>
						<p className="text-gray-600">
							You are logged in as <strong>{user.email}</strong>
						</p>
						<button
							type="button"
							onClick={() => app.signOut()}
							className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
						>
							Sign Out
						</button>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className="flex-1 py-8">
			<div className="max-w-6xl mx-auto px-8">
				<div className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-md">
					<h1 className="text-3xl mb-8 text-gray-800" aria-label="sign up">
						{mode === "signup" ? "Sign Up" : "Login"}
					</h1>
					<form action="" className="mb-8" onSubmit={handleSubmit(onSubmit)}>
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
								{...register("email", { required: "Email is required" })}
							/>
							{errors.email && (
								<span className="block text-red-600 text-sm mt-1">
									{getErrorMessage(errors.email)}
								</span>
							)}
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
								{...register("password", {
									required: "Password is required",
									minLength: {
										value: 6,
										message: "Password must be at least 6 characters",
									},
									maxLength: {
										value: 12,
										message: "Password must be less than 12 characters",
									},
								})}
							/>
							{errors.password && (
								<span className="block text-red-600 text-sm mt-1">
									{getErrorMessage(errors.password)}
								</span>
							)}
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
