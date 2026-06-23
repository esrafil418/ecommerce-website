import { useCart } from "../../context/CartContext";

export default function Checkout() {
	const {
		getCartItemWithProducts,
		updateQuantity,
		removeFromCart,
		getCartTotal,
	} = useCart();
	const cartItem = getCartItemWithProducts();
	return (
		<div className="flex-1 py-8">
			<div className="max-w-6xl mx-auto px-8">
				<h1 className="text-3xl mb-8 text-gray-800">Checkout</h1>
				<div className="grid grid-cols-2 gap-8 mt-8">
					<div className="bg-white p-8 rounded-lg shadow-md">
						<h2 className="text-2xl mb-6 text-gray-800">Order Summary</h2>
						{cartItems.map((item) => (
							<div className="flex gap-4 py-6 border-b border-gray-200">
								<img
									src={item.product.image}
									alt={item.product.title}
									className="w-24 h-24 object-cover rounded"
								/>
								<div className="flex-1">
									<h3 className="text-[1.1rem] mb-2 text-gray-800">
										{item.product.name}
									</h3>
									<p className="text-gray-500 text-[0.9rem]">
										${item.product.price} each
									</p>
								</div>
								<div className="flex flex-col items-end gap-2">
									<div className="flex items-center gap-2">
										<button
											type="button"
											onClick={() => updateQuantity(item.id, item.quantity - 1)}
											className="w-8 h-8 border border-gray-300 bg-white rounded cursor-pointer text-[1.2rem] flex items-center justify-center transition-colors duration-200 hover:bg-gray-100"
										>
											-
										</button>
										<span className="min-w-10 text-center font-medium">
											{item.quantity}
										</span>
										<button
											type="button"
											onClick={() => updateQuantity(item.id, item.quantity + 1)}
											className="w-8 h-8 border border-gray-300 bg-white rounded cursor-pointer text-[1.2rem] flex items-center justify-center transition-colors duration-200 hover:bg-gray-100"
										>
											+
										</button>
									</div>
									<p className="font-bold text-gray-800 text-[1.1rem]">
										{(item.product.price * item.quantity).toFixed(2)}
									</p>
									<button
										type="button"
										onClick={() => removeFromCart(item.id)}
										className="bg-gray-500 text-white px-4 py-2 border-none rounded font-medium text-sm cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.01] no-underline inline-block text-center"
									>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>

					<div className="bg-white p-8 rounded-lg shadow-md h-fit sticky top-25"></div>
				</div>
			</div>
		</div>
	);
}
